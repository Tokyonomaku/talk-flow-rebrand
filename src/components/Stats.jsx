import { useMemo, useState } from 'react';
import { getAllLanguages } from '../data/languages';
import { clearEvents, readEvents } from '../utils/eventLog';

export default function Stats({ onBack }) {
  const [refreshKey, setRefreshKey] = useState(0);

  const stats = useMemo(() => {
    // refreshKey forces recalculation when user hits refresh/clear
    void refreshKey;

    const events = readEvents();

    const languagesSelected = events.filter(e => e?.type === 'languages_selected');
    const lessonOpened = events.filter(e => e?.type === 'lesson_opened');
    const upgradeClicked = events.filter(e => e?.type === 'upgrade_clicked');

    const langCounts = new Map();
    for (const e of languagesSelected) {
      if (e?.lang1) langCounts.set(e.lang1, (langCounts.get(e.lang1) || 0) + 1);
      if (e?.lang2) langCounts.set(e.lang2, (langCounts.get(e.lang2) || 0) + 1);
    }

    let mostPopularLanguageId = null;
    let mostPopularLanguageCount = 0;
    for (const [langId, count] of langCounts.entries()) {
      if (count > mostPopularLanguageCount) {
        mostPopularLanguageId = langId;
        mostPopularLanguageCount = count;
      }
    }

    const languages = getAllLanguages();
    const mostPopularLanguageName = mostPopularLanguageId
      ? (languages.find(l => l.id === mostPopularLanguageId)?.name || mostPopularLanguageId)
      : '—';

    return {
      languagesSelectedCount: languagesSelected.length,
      mostPopularLanguageName,
      lessonsOpenedCount: lessonOpened.length,
      upgradeClicksCount: upgradeClicked.length,
    };
  }, [refreshKey]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Stats</h1>
            <p className="text-gray-600">Local-only counts from this browser</p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setRefreshKey(k => k + 1)}
              className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Refresh
            </button>
            <button
              onClick={() => {
                clearEvents();
                setRefreshKey(k => k + 1);
              }}
              className="px-3 py-2 rounded-lg bg-white border border-gray-200 text-gray-700 hover:bg-gray-50"
            >
              Clear
            </button>
            <button
              onClick={onBack}
              className="px-3 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
            >
              Back
            </button>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="text-gray-700 font-semibold">Languages selected</div>
            <div className="text-gray-900 font-bold">{stats.languagesSelectedCount} times</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-700 font-semibold">Most popular language</div>
            <div className="text-gray-900 font-bold">{stats.mostPopularLanguageName}</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-700 font-semibold">Lessons opened</div>
            <div className="text-gray-900 font-bold">{stats.lessonsOpenedCount} times</div>
          </div>
          <div className="flex items-center justify-between">
            <div className="text-gray-700 font-semibold">Upgrade clicks</div>
            <div className="text-gray-900 font-bold">{stats.upgradeClicksCount} times</div>
          </div>
        </div>
      </div>
    </div>
  );
}

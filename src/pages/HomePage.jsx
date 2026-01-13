import { useMemo } from 'react';
import { getAllLanguages } from '../data/languages';
import { gaEvent } from '../utils/analytics';
import { logEvent } from '../utils/eventLog';

function goToSelect() {
  try {
    window.history.pushState({}, '', '/select');
    window.dispatchEvent(new PopStateEvent('popstate'));
  } catch (_) {
    window.location.href = '/select';
  }
}

function trackCtaClick(buttonLocation) {
  gaEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    button_text: 'CHOOSE YOUR 2 FREE LANGUAGES →',
    destination: '/select',
  });
  logEvent('homepage_cta_clicked', {
    button_location: buttonLocation,
    destination: '/select',
  });
}

const EXAMPLE_PHRASES = [
  {
    flag: '🇪🇸',
    language: 'Spanish',
    foreign: '¿Dónde está el baño?',
    english: 'Where is the bathroom?',
  },
  {
    flag: '🇫🇷',
    language: 'French',
    foreign: 'Où sont les toilettes?',
    english: 'Where is the bathroom?',
  },
  {
    flag: '🇩🇪',
    language: 'German',
    foreign: 'Wo ist die Toilette?',
    english: 'Where is the bathroom?',
  },
];

const LANGUAGE_IDS = [
  'spanish',
  'french',
  'german',
  'korean',
  'portuguese',
  'japanese',
  'chinese',
  'russian',
  'arabic',
  'esl-english',
  'english-native',
];

export default function HomePage() {
  const languages = useMemo(() => {
    const all = getAllLanguages();
    return LANGUAGE_IDS.map((id) => all.find((l) => l.id === id)).filter(Boolean);
  }, []);

  const onCta = (location) => {
    trackCtaClick(location);
    goToSelect();
  };

  return (
    <div className="min-h-screen bg-white text-slate-900">
      {/* SECTION 1: HERO */}
      <main className="mx-auto w-full max-w-6xl px-4 pb-10 pt-8 sm:pt-14">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-[34px] leading-[1.08] font-extrabold tracking-[-0.02em] sm:text-5xl">
            <span className="block">Learn Real Conversations</span>
            <span className="block">in 11 Languages</span>
          </h1>

          <p className="mt-4 text-[16px] leading-[1.35] font-semibold text-slate-700 sm:text-lg">
            <span className="block">Start speaking from Lesson 1.</span>
            <span className="block">No boring drills.</span>
            <span className="block">No energy bars locking you out.</span>
          </p>

          <div className="mt-6">
            <button
              type="button"
              onClick={() => onCta('hero_primary')}
              className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 py-4 text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform hover:-translate-y-[1px] hover:shadow-[0_22px_50px_rgba(255,69,0,0.28)] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:w-auto sm:min-w-[440px] sm:px-10"
              style={{ minHeight: 52 }}
            >
              CHOOSE YOUR 2 FREE LANGUAGES →
            </button>

            <div className="mt-4 flex flex-col items-center gap-2 text-[14px] font-semibold text-slate-700 sm:flex-row sm:justify-center sm:gap-4">
              <span>✓ 10 free lessons per language</span>
              <span>✓ No credit card required</span>
              <span>✓ Start learning in 2 minutes</span>
            </div>
          </div>

          {/* Visual proof: swipe on mobile, 3-up grid on desktop */}
          <div className="mt-6">
            <p className="text-[13px] font-semibold text-slate-600">
              <span className="block">This is what you learn in Lesson 1.</span>
              <span className="block">Real travel phrases. Not “apple is red.”</span>
            </p>

            <div className="mt-3 flex gap-3 overflow-x-auto pb-2 [-webkit-overflow-scrolling:touch] sm:grid sm:grid-cols-3 sm:overflow-visible">
              {EXAMPLE_PHRASES.map((p) => (
                <button
                  key={p.language}
                  type="button"
                  onClick={() => onCta('hero_phrase_card')}
                  className="min-w-[280px] flex-1 rounded-2xl border border-slate-200 bg-slate-50 p-4 text-left shadow-sm transition-transform hover:shadow-md hover:-translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:min-w-0"
                  aria-label={`See a Lesson 1 example in ${p.language}`}
                >
                  <div className="flex items-center gap-2">
                    <span className="text-2xl leading-none" aria-hidden="true">
                      {p.flag}
                    </span>
                    <div className="text-[16px] font-extrabold text-slate-900">{p.language}</div>
                  </div>

                  <div className="mt-3 text-[18px] leading-[1.25] font-extrabold text-slate-900">
                    “{p.foreign}”
                  </div>
                  <div className="mt-3 text-[16px] leading-[1.25] font-semibold text-slate-700">
                    {p.english}
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* SECTION 2: HOW IT WORKS */}
        <section className="mx-auto mt-12 max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold tracking-[-0.02em]">
            How TalkFlow Works
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-[18px] font-extrabold">1) Choose 2 languages</div>
              <div className="mt-2 text-[16px] font-semibold text-slate-700">
                Pick any 2 from 11 options.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-[18px] font-extrabold">2) Start Lesson 1</div>
              <div className="mt-2 text-[16px] font-semibold text-slate-700">
                Learn travel phrases you use today.
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <div className="text-[18px] font-extrabold">3) Keep going</div>
              <div className="mt-2 text-[16px] font-semibold text-slate-700">
                Get 10 free lessons per language.
              </div>
            </div>
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => onCta('how_it_works')}
              className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 py-4 text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform hover:-translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:w-auto sm:min-w-[420px]"
              style={{ minHeight: 52 }}
            >
              START YOUR FIRST FREE LESSON →
            </button>

            <div className="mt-3 text-[14px] font-semibold text-slate-700">
              ✓ No credit card required&nbsp;&nbsp;✓ Start in 2 minutes
            </div>
          </div>
        </section>

        {/* SECTION 3: WHY DIFFERENT */}
        <section className="mx-auto mt-14 max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold tracking-[-0.02em]">
            Why TalkFlow Is Different
          </h2>

          <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
            <div className="grid grid-cols-2 border-b border-slate-200">
              <div className="p-4 text-[16px] font-extrabold text-slate-700">Other apps</div>
              <div className="p-4 text-[16px] font-extrabold text-slate-900">TalkFlow</div>
            </div>

            {[
              ['Locked out after 3 lessons', '10 free lessons per language'],
              ['Energy bars and forced ads', 'No limits. No tricks.'],
              ['Random vocabulary', 'Real travel phrases'],
              ['Takes months to speak', 'Speak from Day 1'],
            ].map(([left, right]) => (
              <div key={left} className="grid grid-cols-2 border-b border-slate-200 last:border-b-0">
                <div className="p-4 text-[15px] font-semibold text-slate-700">{left}</div>
                <div className="p-4 text-[15px] font-extrabold text-slate-900">{right}</div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              type="button"
              onClick={() => onCta('comparison')}
              className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 py-4 text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform hover:-translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:w-auto sm:min-w-[420px]"
              style={{ minHeight: 52 }}
            >
              TRY IT FREE - NO SIGNUP NEEDED →
            </button>

            <div className="mt-3 text-[14px] font-semibold text-slate-700">
              ✓ 10 free lessons per language&nbsp;&nbsp;✓ No credit card
            </div>
          </div>
        </section>

        {/* SECTION 4: LANGUAGES */}
        <section className="mx-auto mt-14 max-w-5xl pb-10">
          <h2 className="text-center text-3xl font-extrabold tracking-[-0.02em]">
            Choose From 11 Languages
          </h2>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-4">
            {languages.map((lang) => (
              <button
                key={lang.id}
                type="button"
                onClick={() => onCta('languages_grid')}
                className="rounded-2xl border border-slate-200 bg-white p-4 text-left shadow-sm transition-transform hover:-translate-y-[1px] hover:shadow-md focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200"
              >
                <div className="text-3xl leading-none" aria-hidden="true">
                  {lang.flag}
                </div>
                <div className="mt-2 text-[16px] font-extrabold text-slate-900">{lang.name}</div>
              </button>
            ))}
          </div>

          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={() => onCta('final')}
              className="w-full rounded-full bg-gradient-to-r from-[#FF6B35] to-[#FF4500] px-6 py-4 text-[18px] font-extrabold tracking-[-0.01em] text-white shadow-[0_18px_40px_rgba(255,69,0,0.22)] transition-transform hover:-translate-y-[1px] focus:outline-none focus-visible:ring-4 focus-visible:ring-orange-200 sm:w-auto sm:min-w-[520px]"
              style={{ minHeight: 52 }}
            >
              START LEARNING NOW - CHOOSE YOUR LANGUAGES →
            </button>

            <div className="mt-3 text-[14px] font-semibold text-slate-700">
              ✓ No signup needed&nbsp;&nbsp;✓ No credit card required
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}


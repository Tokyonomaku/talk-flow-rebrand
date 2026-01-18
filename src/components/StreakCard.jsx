import { useEffect, useState } from 'react';
import { getStreakData, getStreakMessage, updateStreakOnLogin } from '../utils/streakTracking';

export default function StreakCard({ variant = 'card', streakData, streakMeta: streakMetaProp }) {
  const [streak, setStreak] = useState(streakData || getStreakData());
  const [streakMeta, setStreakMeta] = useState(
    streakMetaProp || { streakBroken: false, previousStreak: 0 }
  );

  useEffect(() => {
    if (streakData) {
      setStreak(streakData);
    }
    if (streakMetaProp) {
      setStreakMeta(streakMetaProp);
    }
  }, [streakData, streakMetaProp]);

  useEffect(() => {
    if (streakData) return;
    const updated = updateStreakOnLogin();
    setStreak(updated);
    setStreakMeta({ streakBroken: updated.streakBroken, previousStreak: updated.previousStreak });
  }, [streakData]);

  const message = getStreakMessage({
    currentStreak: streak.currentStreak,
    streakBroken: streakMeta.streakBroken,
    previousStreak: streakMeta.previousStreak,
  });

  if (variant === 'badge') {
    return (
      <div className="flex items-center gap-2 rounded-full bg-orange-100 px-3 py-1 text-sm font-semibold text-orange-700">
        <span aria-hidden="true">🔥</span>
        <span>{streak.currentStreak} day streak</span>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-orange-200 p-5">
      <div className="flex items-center gap-3 mb-2">
        <span className="text-2xl" aria-hidden="true">🔥</span>
        <div className="text-2xl font-bold text-gray-900">
          {streak.currentStreak} Day Streak!
        </div>
      </div>
      <p className="text-gray-700 mb-4">{message}</p>
      <div className="text-sm text-gray-500">
        Longest streak: <span className="font-semibold">{streak.longestStreak} days</span>
      </div>
    </div>
  );
}


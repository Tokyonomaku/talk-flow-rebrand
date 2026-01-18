const STREAK_KEY = 'userStreak';

const MILESTONE_MESSAGES = new Map([
  [3, "🎉 3 days! You're building a habit!"],
  [7, '🔥 One week streak! Amazing!'],
  [14, "💪 Two weeks! You're unstoppable!"],
  [30, '🏆 30 DAYS! Language master!'],
]);

function formatLocalDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

function parseLocalDate(dateString) {
  if (!dateString) return null;
  const [year, month, day] = dateString.split('-').map(Number);
  if (!year || !month || !day) return null;
  return new Date(year, month - 1, day);
}

function diffInDays(start, end) {
  if (!start || !end) return null;
  const startMidnight = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const endMidnight = new Date(end.getFullYear(), end.getMonth(), end.getDate());
  const diffMs = endMidnight - startMidnight;
  return Math.round(diffMs / (1000 * 60 * 60 * 24));
}

export function getStreakData() {
  try {
    const stored = localStorage.getItem(STREAK_KEY);
    if (!stored) {
      return { currentStreak: 0, longestStreak: 0, lastLoginDate: null };
    }
    const parsed = JSON.parse(stored);
    return {
      currentStreak: Number(parsed?.currentStreak) || 0,
      longestStreak: Number(parsed?.longestStreak) || 0,
      lastLoginDate: parsed?.lastLoginDate || null,
    };
  } catch (error) {
    console.error('Error reading streak data:', error);
    return { currentStreak: 0, longestStreak: 0, lastLoginDate: null };
  }
}

export function updateStreakOnLogin(now = new Date()) {
  const todayString = formatLocalDate(now);
  const previous = getStreakData();
  const lastLogin = parseLocalDate(previous.lastLoginDate);
  const daysSince = lastLogin ? diffInDays(lastLogin, now) : null;

  let currentStreak = previous.currentStreak;
  let longestStreak = previous.longestStreak;
  let streakBroken = false;
  let previousStreak = previous.currentStreak;

  if (!previous.lastLoginDate) {
    currentStreak = 1;
  } else if (previous.lastLoginDate === todayString) {
    currentStreak = previous.currentStreak;
  } else if (daysSince === 1) {
    currentStreak = previous.currentStreak + 1;
  } else if (daysSince >= 2) {
    streakBroken = previous.currentStreak > 0;
    previousStreak = previous.currentStreak;
    currentStreak = 1;
  } else {
    currentStreak = 1;
  }

  if (currentStreak > longestStreak) {
    longestStreak = currentStreak;
  }

  const updated = {
    currentStreak,
    longestStreak,
    lastLoginDate: todayString,
  };

  try {
    localStorage.setItem(STREAK_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving streak data:', error);
  }

  return { ...updated, streakBroken, previousStreak };
}

export function getStreakMessage({ currentStreak, streakBroken, previousStreak }) {
  if (streakBroken) {
    return `Your ${previousStreak}-day streak ended. Start a new one today!`;
  }
  if (MILESTONE_MESSAGES.has(currentStreak)) {
    return MILESTONE_MESSAGES.get(currentStreak);
  }
  if (currentStreak <= 0) {
    return 'Start your streak today!';
  }
  return `Keep it going! Come back tomorrow to reach ${currentStreak + 1} days.`;
}


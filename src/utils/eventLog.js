const STORAGE_KEY = 'vibe_simple_event_log_v1';
const MAX_EVENTS = 2000;

export function readEvents() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function writeEvents(events) {
  try {
    const next = Array.isArray(events) ? events.slice(-MAX_EVENTS) : [];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // ignore
  }
}

export function logEvent(type, payload = {}) {
  const event = {
    type,
    timestamp: new Date().toISOString(),
    ...payload,
  };

  // Simple console logging
  // eslint-disable-next-line no-console
  console.log('[event]', event);

  // Simple localStorage append
  const events = readEvents();
  events.push(event);
  writeEvents(events);

  return event;
}

export function clearEvents() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch {
    // ignore
  }
}

/**
 * Kosha — LocalStorage Utilities
 * Manages session history and Sankalpa tracking.
 */

const STORAGE_KEY = 'kosha_sessions';

/**
 * Get all saved sessions
 */
export function getSessions() {
  if (typeof window === 'undefined') return [];
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : [];
  } catch {
    return [];
  }
}

/**
 * Save a new session
 */
export function saveSession({ sankalpa, mode, duration, prompt, script }) {
  const sessions = getSessions();
  const session = {
    id: crypto.randomUUID(),
    sankalpa,
    mode,
    duration,
    prompt,
    script,
    date: new Date().toISOString(),
    completedCount: 1,
  };
  sessions.unshift(session);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  return session;
}

/**
 * Increment a Sankalpa's practice count
 */
export function incrementSession(id) {
  const sessions = getSessions();
  const session = sessions.find(s => s.id === id);
  if (session) {
    session.completedCount = (session.completedCount || 1) + 1;
    session.lastPracticed = new Date().toISOString();
    localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  }
  return session;
}

/**
 * Delete a session
 */
export function deleteSession(id) {
  const sessions = getSessions().filter(s => s.id !== id);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(sessions));
  return sessions;
}

/**
 * Get unique Sankalpas with counts
 */
export function getSankalpaStats() {
  const sessions = getSessions();
  const statsMap = {};
  sessions.forEach(s => {
    const key = s.sankalpa?.toLowerCase().trim();
    if (!key) return;
    if (!statsMap[key]) {
      statsMap[key] = {
        sankalpa: s.sankalpa,
        totalSessions: 0,
        modes: new Set(),
        firstDate: s.date,
        lastDate: s.date,
      };
    }
    statsMap[key].totalSessions += s.completedCount || 1;
    statsMap[key].modes.add(s.mode);
    if (s.date < statsMap[key].firstDate) statsMap[key].firstDate = s.date;
    if (s.date > statsMap[key].lastDate) statsMap[key].lastDate = s.date;
  });

  return Object.values(statsMap).map(stat => ({
    ...stat,
    modes: Array.from(stat.modes),
  }));
}

export function gaEvent(eventName, params = {}) {
  try {
    if (typeof window === 'undefined') return;

    // Ensure a GA-compatible gtag() exists (and queues to dataLayer if GA hasn't loaded yet).
    if (typeof window.gtag !== 'function') {
      window.dataLayer = window.dataLayer || [];
      window.gtag = function gtag() {
        // eslint-disable-next-line prefer-rest-params
        window.dataLayer.push(arguments);
      };
    }

    window.gtag('event', eventName, params);
  } catch {
    // no-op
  }
}



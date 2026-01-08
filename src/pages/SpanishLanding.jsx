import { useMemo } from 'react';
import './SpanishLanding.css';

/**
 * Spanish landing page (conversation-first).
 * Standalone route: /spanish-landing
 */
export default function SpanishLanding() {
  // Send into the existing selector flow (user can pick 2 free languages).
  const startUrl = useMemo(() => '/select?language=spanish&lesson=1', []);

  const handleStart = () => {
    window.location.href = startUrl;
  };

  return (
    <div className="sl-page">
      <main className="sl-main" aria-label="Spanish landing page">
        {/* TOP SECTION */}
        <header className="sl-hero">
          <div className="sl-flag" aria-hidden="true">🇪🇸</div>
          <h1 className="sl-title">Learn Spanish - Real Conversations</h1>
          <p className="sl-subtitle">Start speaking from Day 1. No boring drills.</p>
        </header>

        {/* PHRASE EXAMPLE */}
        <section className="sl-card" aria-label="Phrase example">
          <div className="sl-es">¿Dónde está el baño?</div>
          <div className="sl-arrow" aria-hidden="true">↓</div>
          <div className="sl-en">Where is the bathroom?</div>
          <div className="sl-note">This is Lesson 1. No &quot;the apple is red&quot; nonsense.</div>
        </section>

        {/* ONE BIG CTA */}
        <section className="sl-cta">
          <button type="button" className="sl-button" onClick={handleStart}>
            START YOUR FIRST FREE LESSON →
          </button>
          <div className="sl-tiny">10 free lessons • No credit card</div>
        </section>

        {/* BOTTOM LINK */}
        <div className="sl-bottom">
          <a className="sl-link" href="/select">
            Want a different language? Click here
          </a>
        </div>
      </main>
    </div>
  );
}


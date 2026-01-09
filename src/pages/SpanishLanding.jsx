import { useMemo, useState } from 'react';
import './SpanishLanding.css';

/**
 * Spanish landing page as an interactive 30-second mini-lesson.
 * Standalone route: /spanish-landing
 */
export default function SpanishLanding() {
  const startUrl = useMemo(() => '/select?language=spanish&lesson=1', []);
  const [step, setStep] = useState(1); // 1..4

  const handleStart = () => {
    window.location.href = startUrl;
  };

  const advance = () => {
    setStep((s) => (s < 4 ? s + 1 : 4));
  };

  const onLessonKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      advance();
    }
  };

  return (
    <div className="ml-page">
      <main className="ml-main" aria-label="Spanish mini-lesson">
        {/* SIMPLE HEADER */}
        <header className="ml-header">
          <div className="ml-flag" aria-hidden="true">🇪🇸</div>
          <h1 className="ml-title">
            Learn Your First
            <br />
            Spanish Phrase
          </h1>
          <p className="ml-subtitle">
            Takes 30 seconds.
            <br />
            No signup.
          </p>
        </header>

        {/* INTERACTIVE LESSON */}
        <section
          className="ml-lesson"
          role="button"
          tabIndex={0}
          onClick={advance}
          onKeyDown={onLessonKeyDown}
          aria-label="Tap to continue the lesson"
        >
          <div className="ml-progress" aria-hidden="true">
            <span className={step >= 1 ? 'on' : ''} />
            <span className={step >= 2 ? 'on' : ''} />
            <span className={step >= 3 ? 'on' : ''} />
            <span className={step >= 4 ? 'on' : ''} />
          </div>

          {/* Step prompt (swaps in place to keep layout compact) */}
          {step === 1 && (
            <div className="ml-line">
              In Spanish,
              <br />
              you say:
            </div>
          )}
          {step === 2 && (
            <div className="ml-line">
              This means:
            </div>
          )}
          {step === 3 && (
            <div className="ml-line">
              Try saying it
              <br />
              out loud now.
            </div>
          )}
          {step === 4 && (
            <div className="ml-line">
              Nice!
              <br />
              You learned a
              <br />
              travel phrase.
            </div>
          )}

          <div className="ml-phraseBox">
            <div className="ml-spanish">¿Dónde está el baño?</div>
            <div className="ml-phonetic">(DOHN-deh eh-STAH el BAH-nyo)</div>
          </div>

          {/* Step detail (also swaps) */}
          {step === 1 && (
            <div className="ml-detail" aria-hidden="true">
              Tap to continue
            </div>
          )}
          {step === 2 && (
            <div className="ml-detail">
              <div className="ml-english">Where is the bathroom?</div>
            </div>
          )}
          {step === 3 && (
            <div className="ml-detail">
              <div className="ml-nudge">Say it once.</div>
            </div>
          )}
          {step === 4 && (
            <div className="ml-detail">
              <div className="ml-nudge">You can use it today.</div>
            </div>
          )}

          <div className="ml-hint">
            {step < 4 ? 'Tap anywhere to continue' : 'You did it'}
          </div>
        </section>

        {/* ONE BUTTON */}
        <section className="ml-cta">
          <button type="button" className="ml-button" onClick={handleStart}>
            START LESSON 1 NOW (FREE) →
          </button>
          <div className="ml-proof">2,847 people started learning today</div>
          <div className="ml-tiny">Takes 3 minutes • No signup required • Free forever</div>
        </section>

        {/* BOTTOM */}
        <div className="ml-bottom">
          <a className="ml-link" href="/select">
            Want French or German instead? Click here
          </a>
        </div>
      </main>
    </div>
  );
}


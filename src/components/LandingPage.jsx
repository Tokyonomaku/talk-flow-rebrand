import { gaEvent } from '../utils/analytics';

export default function LandingPage({ onTryFree, onNavigate }) {
  const navigate = (path) => {
    if (typeof onNavigate === 'function') onNavigate(path);
    else window.location.href = path;
  };

  const goToLanguageSelector = () => {
    // Keeps the app routing logic centralized in App.jsx
    if (typeof onTryFree === 'function') onTryFree();
    else navigate('/choose-languages');
  };

  const handleCtaClick = (buttonLocation, buttonText) => {
    gaEvent('cta_button_clicked', {
      button_location: buttonLocation,
      button_text: buttonText,
    });
    goToLanguageSelector();
  };

  return (
    <div className="landing-page landing-simplified">
      <section className="lp-section lp-hero" aria-label="Hero">
        <h1 className="lp-headline">
          Learn Real French Phrases
          <br />
          In 3 Minutes
        </h1>
        <p className="lp-subheadline">No signup. No credit card. Free forever.</p>
        <button
          className="lp-button"
          onClick={() => handleCtaClick('hero_section', 'Try Lesson 1 Now →')}
        >
          Try Lesson 1 Now →
        </button>
        <div className="lp-microcopy">3 minutes • No signup</div>
      </section>

      <section className="lp-section lp-phrases" aria-label="Phrase preview">
        <div className="lp-card">
          <div className="lp-card-title">🇫🇷 Lesson 1 Preview</div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">Où sont les toilettes?</div>
            <div className="lp-phrase-english">Where is the bathroom?</div>
          </div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">Combien ça coûte?</div>
            <div className="lp-phrase-english">How much does this cost?</div>
          </div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">Parlez-vous anglais?</div>
            <div className="lp-phrase-english">Do you speak English?</div>
          </div>
        </div>
        <button
          className="lp-button lp-button-secondary"
          onClick={() => handleCtaClick('phrase_preview', 'Start Learning →')}
        >
          Start Learning →
        </button>
      </section>

      <section className="lp-section lp-why" aria-label="Why TalkFlow">
        <h2 className="lp-heading">Why TalkFlow?</h2>
        <ul className="lp-list">
          <li>✓ Real phrases from Day 1</li>
          <li>✓ 8 languages to choose from</li>
          <li>✓ Learn at your own pace</li>
          <li>✓ Free forever</li>
        </ul>
        <button
          className="lp-button"
          onClick={() => handleCtaClick('why_section', 'Try It Free →')}
        >
          Try It Free →
        </button>
      </section>
    </div>
  );
}

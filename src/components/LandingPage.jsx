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
          Language Learning Gets Hard
          <br />
          Let Me Make It Easier
        </h1>
        <p className="lp-subheadline">Real phrases you&apos;ll actually use. From Day 1.</p>
        <button
          className="lp-button"
          onClick={() => handleCtaClick('hero_section', 'Try Lesson 1 Free →')}
        >
          Try Lesson 1 Free →
        </button>
        <div className="lp-microcopy">3 minutes • No signup</div>
      </section>

      <section className="lp-section lp-phrases" aria-label="Phrase preview">
        <div className="lp-card">
          <div className="lp-card-title">🇰🇷 Korean - Lesson 1</div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">화장실이 어디에요?</div>
            <div className="lp-phrase-english">Where is the bathroom?</div>
          </div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">얼마예요?</div>
            <div className="lp-phrase-english">How much?</div>
          </div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">영어 할 수 있어요?</div>
            <div className="lp-phrase-english">Do you speak English?</div>
          </div>
        </div>
        <button
          className="lp-button lp-button-secondary"
          onClick={() => handleCtaClick('phrase_preview', 'Start Now →')}
        >
          Start Now →
        </button>
      </section>

      <section className="lp-section lp-why" aria-label="Why TalkFlow">
        <h2 className="lp-heading">Why TalkFlow?</h2>
        <ul className="lp-list">
          <li>✓ Real phrases from Day 1</li>
          <li>✓ 8 languages</li>
          <li>✓ No limits</li>
          <li>✓ Free forever</li>
        </ul>
        <button
          className="lp-button"
          onClick={() => handleCtaClick('why_section', 'Try It Now →')}
        >
          Try It Now →
        </button>
      </section>
    </div>
  );
}

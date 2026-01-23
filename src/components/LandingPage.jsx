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
        <h1 className="lp-headline">Learn French in 3 Minutes</h1>
        <div className="lp-subheadline">Real phrases. No signup.</div>
        <button
          className="lp-button"
          onClick={() => handleCtaClick('hero_section', 'Try Lesson 1 →')}
        >
          Try Lesson 1 →
        </button>
        <div className="lp-microcopy">Free • No credit card</div>
      </section>

      <section className="lp-section lp-phrases" aria-label="French phrases">
        <div className="lp-card">
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">Où sont les toilettes?</div>
            <div className="lp-phrase-english">Where is the bathroom?</div>
          </div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">Combien ça coûte?</div>
            <div className="lp-phrase-english">How much?</div>
          </div>
          <div className="lp-phrase">
            <div className="lp-phrase-foreign">Parlez-vous anglais?</div>
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
    </div>
  );
}

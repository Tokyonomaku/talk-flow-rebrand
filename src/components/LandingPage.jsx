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

  const handleCtaClick = () => {
    gaEvent('cta_button_clicked', {
      button_location: 'hero_section',
      button_text: 'Start Today →',
    });
    goToLanguageSelector();
  };

  return (
    <div className="landing-page">
      <div className="hero-conversion-optimized">
        <div className="hero-text">
          <h1>Finally Speak the Language You&apos;ve Been Putting Off</h1>
        </div>

        <div className="hero-cta">
          <button className="cta-primary" onClick={handleCtaClick}>
            Start Today →
          </button>

          <div className="trust-signals" aria-label="Trust signals">
            ✓ No credit card&nbsp;&nbsp;&nbsp;&nbsp;✓ Always free
          </div>
        </div>
      </div>

      <div className="quick-value" aria-label="Quick value preview">
        <div className="value-item">
          <span className="emoji" aria-hidden="true">🌍</span>
          <div>
            <div>Choose 2 of 11 languages</div>
            <div>Spanish, French, German, Korean, Portuguese, Japanese, Chinese, Russian, Arabic + English</div>
          </div>
        </div>
        <div className="value-item">
          <span className="emoji" aria-hidden="true">💬</span>
          <div>
            <div>20 practical lessons per language</div>
            <div>Learn phrases you&apos;ll actually use in real-life situations</div>
          </div>
        </div>
        <div className="value-item">
          <span className="emoji" aria-hidden="true">🎯</span>
          <div>
            <div>Learn at your own pace</div>
            <div>Practice as much as you want. Transparent pricing. Honest approach.</div>
          </div>
        </div>
      </div>

      <div className="language-preview" aria-label="Language preview">
        <p className="preview-label">Available languages:</p>
        <div className="flags-row" aria-label="Preview languages">
          <span>🇪🇸 Spanish</span>
          <span>🇫🇷 French</span>
          <span>🇩🇪 German</span>
          <span>🇰🇷 Korean</span>
          <span>🇧🇷 Portuguese</span>
          <span>+6 more</span>
        </div>
      </div>
    </div>
  );
}

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

  return (
    <div className="hero-conversion-optimized">
      <h1>Learn Any Language You Want - Free Forever</h1>
      <p className="subheadline">
        Real conversations from day 1. Pick 2 languages and start speaking today. No credit card required.
      </p>

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

      <button className="cta-primary" onClick={goToLanguageSelector}>
        Choose Your 2 Free Languages →
      </button>

      <div className="trust-signals" aria-label="Trust signals">
        <span>✓ No credit card</span>
        <span>✓ Free forever</span>
        <span>✓ Start in 60 seconds</span>
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

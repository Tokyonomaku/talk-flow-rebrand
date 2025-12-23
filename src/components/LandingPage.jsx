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
      <h1>Learn Spanish, French, or 9 Other Languages Free</h1>
      <p className="subheadline">
        Real conversations. No credit card. Start your first lesson in 60 seconds.
      </p>

      <div className="quick-value" aria-label="Quick value preview">
        <div className="value-item">
          <span className="emoji" aria-hidden="true">🌍</span>
          <span>Choose 2 of 11 languages</span>
        </div>
        <div className="value-item">
          <span className="emoji" aria-hidden="true">💬</span>
          <span>20 practical lessons</span>
        </div>
        <div className="value-item">
          <span className="emoji" aria-hidden="true">🎯</span>
          <span>Learn phrases you&apos;ll actually use</span>
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

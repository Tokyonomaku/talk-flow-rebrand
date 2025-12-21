export default function LandingPage({ onTryFree, onNavigate }) {
  const navigate = (path) => {
    if (typeof onNavigate === 'function') onNavigate(path);
    else window.location.href = path;
  };

  const goToLanguageSelector = () => {
    // Keeps the app routing logic centralized in App.jsx
    if (typeof onTryFree === 'function') onTryFree();
    else navigate('/select');
  };

  const languageFromQuery = (() => {
    try {
      const lang = new URLSearchParams(window.location.search).get('lang');
      return lang && lang.trim().length > 0 ? lang.trim() : null;
    } catch (_) {
      return null;
    }
  })();

  return (
    <div className="hero-simple">
      <h1>Learn {languageFromQuery ?? 'a Language'} Free</h1>
      <p>Real conversations. No credit card. Start in 60 seconds.</p>

      <button className="cta-massive" onClick={goToLanguageSelector}>
        Choose Your Free Languages →
      </button>

      <div className="trust-signals" aria-label="Trust signals">
        <span>✓ No credit card</span>
        <span>✓ Free forever</span>
        <span>✓ 2 languages to start</span>
      </div>
    </div>
  );
}

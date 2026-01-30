export default function LandingPage() {
  const handlePickLanguage = () => {
    window.location.href = '/choose-languages';
  };

  return (
    <>
      <h1>Learn French Fast</h1>
      <style>{`
        .landing-cta {
          display: flex;
          align-items: center;
          gap: 12px;
          margin-top: 12px;
        }
        .turtle-pointer {
          display: flex;
          align-items: center;
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @media (max-width: 640px) {
          .landing-cta {
            flex-direction: column;
            align-items: center;
          }
          .turtle-pointer {
            justify-content: center;
            width: 100%;
          }
        }
      `}</style>
      <div className="landing-cta">
        <div className="turtle-pointer">
          <span role="img" aria-label="turtle" style={{
            fontSize: '60px',
            display: 'block',
            animation: 'bounce 2s infinite'
          }}>
            🐢 👉
          </span>
        </div>
        <button type="button" onClick={handlePickLanguage}>
          Start Learning →
        </button>
      </div>
    </>
  );
}

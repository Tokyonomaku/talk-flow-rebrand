export default function LandingPage() {
  const handlePickLanguage = () => {
    window.location.href = '/choose-languages';
  };

  return (
    <>
      <style>{`
        .landing-min {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 24px;
          text-align: center;
          gap: 16px;
        }
        .landing-min h1 {
          font-size: clamp(36px, 8vw, 64px);
          font-weight: 800;
          margin: 0;
        }
        .landing-min p {
          margin: 0;
          font-size: 14px;
          color: #6b7280;
        }
      `}</style>
      <div className="landing-min">
        <h1>Learn a Language</h1>
        <button type="button" onClick={handlePickLanguage}>
          Start Free →
        </button>
        <p>No signup • No credit card • Free forever</p>
      </div>
    </>
  );
}

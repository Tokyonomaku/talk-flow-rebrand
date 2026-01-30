export default function LandingPage() {
  const handlePickLanguage = () => {
    window.location.href = '/choose-languages';
  };

  return (
    <>
      <h1>Learn French Fast</h1>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '12px' }}>
        <svg
          width="72"
          height="52"
          viewBox="0 0 72 52"
          role="img"
          aria-label="Turtle pointing toward the call to action"
        >
          <title>Friendly turtle pointing to the button</title>
          <ellipse cx="30" cy="28" rx="20" ry="14" fill="#B7CDBD" stroke="#8EA89A" strokeWidth="2" />
          <circle cx="12" cy="28" r="6" fill="#C7D9CC" stroke="#8EA89A" strokeWidth="2" />
          <circle cx="10" cy="26" r="1.5" fill="#4B5B53" />
          <path d="M18 36 L10 42" stroke="#8EA89A" strokeWidth="3" strokeLinecap="round" />
          <path d="M42 40 L48 46" stroke="#8EA89A" strokeWidth="3" strokeLinecap="round" />
          <path d="M38 14 L44 8" stroke="#8EA89A" strokeWidth="3" strokeLinecap="round" />
          <path d="M54 28 L70 20" stroke="#7A9688" strokeWidth="3" strokeLinecap="round" />
          <path d="M66 18 L70 20 L65 24" stroke="#7A9688" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <button type="button" onClick={handlePickLanguage}>
          Pick Your Language →
        </button>
      </div>
    </>
  );
}

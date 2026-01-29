export default function LandingPage() {
  const handlePickLanguage = () => {
    window.location.href = '/choose-languages';
  };

  return (
    <>
      <h1>Learn French Fast</h1>
      <button type="button" onClick={handlePickLanguage}>
        Pick Your Language →
      </button>
    </>
  );
}

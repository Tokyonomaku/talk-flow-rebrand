export default function LandingPage({ onTryFree }) {
  const handleTryLesson = () => {
    if (typeof onTryFree === 'function') onTryFree();
  };

  return (
    <div
      style={{
        padding: '40px 20px',
        textAlign: 'center',
        maxWidth: '600px',
        margin: '0 auto',
      }}
    >
      <h1>Learn French in 3 Minutes</h1>

      <div
        style={{
          background: '#f5f5f5',
          padding: '20px',
          margin: '30px 0',
          borderRadius: '8px',
        }}
      >
        <p>"Où sont les toilettes?" - Where is the bathroom?</p>
        <p>"Combien ça coûte?" - How much?</p>
        <p>"Parlez-vous anglais?" - Do you speak English?</p>
      </div>

      <button
        style={{
          background: '#ff6b35',
          color: 'white',
          fontSize: '20px',
          padding: '20px 40px',
          border: 'none',
          borderRadius: '8px',
          cursor: 'pointer',
        }}
        onClick={handleTryLesson}
      >
        Try Lesson 1 →
      </button>

      <p style={{ fontSize: '14px', color: '#666', marginTop: '10px' }}>
        Free • No signup
      </p>
    </div>
  );
}

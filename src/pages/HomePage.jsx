export default function HomePage({ onStartLesson }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        textAlign: 'center',
        padding: '20px',
      }}
    >
      <div style={{ fontSize: '48px', marginBottom: '10px' }}>
        🇪🇸 🇲🇽 🇨🇺 🇦🇷 🇨🇴
      </div>

      <h1>Learn Spanish</h1>

      <div
        style={{
          fontSize: '28px',
          margin: '30px 0',
          fontStyle: 'italic',
        }}
      >
        "¿Dónde está el baño?"
      </div>

      <div
        style={{
          fontSize: '18px',
          color: '#666',
          marginBottom: '30px',
        }}
      >
        ↓ "Where is the bathroom?" ↓
      </div>

      <button
        onClick={onStartLesson}
        style={{
          backgroundColor: '#f97316',
          color: 'white',
          padding: '16px 48px',
          fontSize: '18px',
          border: 'none',
          borderRadius: '30px',
          cursor: 'pointer',
        }}
      >
        Start Your First Lesson Free →
      </button>

      <p
        style={{
          marginTop: '15px',
          color: '#888',
          fontSize: '14px',
        }}
      >
        No credit card • No signup • Takes 5 minutes
      </p>
    </div>
  );
}

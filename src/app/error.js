'use client';

export default function Error({ error, reset }) {
  return (
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Something went wrong</h2>
      <p style={{ color: '#666', margin: '1rem 0' }}>{error?.message}</p>
      <button
        onClick={reset}
        style={{
          padding: '8px 20px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          background: 'white',
          cursor: 'pointer',
          fontSize: '0.875rem',
        }}
      >
        Try again
      </button>
    </div>
  );
}

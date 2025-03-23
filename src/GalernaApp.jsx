import React from 'react';

export default function GalernaApp() {
  const [question, setQuestion] = React.useState('');

  const handleSend = () => {
    const galernaLink = 'https://chatgpt.com/g/g-677e850ea65c81919eba551d1ad492aa-marketing-digital-streamer-pro-club';
    window.open(galernaLink, '_blank');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '2rem',
      backgroundColor: '#f9fafb'
    }}>
      <h1 style={{ fontSize: '1.8rem', fontWeight: 'bold', marginBottom: '1rem' }}>
        🎩 Bienvenido a Galerna
      </h1>
      <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1.5rem', textAlign: 'center' }}>
        Tu mentor de marketing digital 24/7. Escribe tu duda y abre el asistente para comenzar.
      </p>
      <input
        type="text"
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
        placeholder="Escribe tu pregunta para Galerna..."
        style={{ padding: '0.5rem', width: '100%', maxWidth: '300px', marginBottom: '1rem' }}
      />
      <button
        onClick={handleSend}
        style={{ padding: '0.6rem 1.2rem', backgroundColor: '#000', color: '#fff', border: 'none', cursor: 'pointer' }}
      >
        Ir a Galerna
      </button>
    </div>
  );
}

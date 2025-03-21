import React from 'react';

function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', padding: '20px' }}>
      <header>
        <h1>Welcome to My Simple Website</h1>
      </header>
      <main>
        <p>This is a simple website built with ReactJS.</p>
        <button
          onClick={() => alert('Hello, welcome to my website!')}
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: '#007BFF',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Click Me
        </button>
      </main>
      <footer style={{ marginTop: '20px', fontSize: '14px', color: '#555' }}>
        <p>&copy; 2023 My Simple Website</p>
      </footer>
    </div>
  );
}

export default App;
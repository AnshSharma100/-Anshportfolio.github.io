import React from 'react';
import About from './about'; // Assuming this is your About page component
import './App.css'; // Make sure you have CSS for styling

function App() {
  return (
    <div className="App">
      <h1>Welcome to Ansh's Portfolio</h1>
      <About /> {/* Rendering the About component */}
    </div>
  );
}

export default App;

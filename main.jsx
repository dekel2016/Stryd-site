import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './pages/HomePage';
import AdminPanel from './pages/AdminPanel';

function App() {
  return <HomePage />;
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

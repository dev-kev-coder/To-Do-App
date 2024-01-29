import React from 'react';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('app');

const root = createRoot(container);

const App = () => {
  return (
    <>
      <h1>From App</h1>
    </>
  );
};

root.render(<App />);

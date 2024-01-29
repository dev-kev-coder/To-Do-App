import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from 'Materialize';

const container = document.getElementById('app');

const root = createRoot(container);

const App = () => {
  return (
    <>
      <Container useDefaultPadding>
        <h1>From App</h1>
      </Container>
    </>
  );
};

root.render(<App />);

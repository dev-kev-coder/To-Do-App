import React from 'react';
import { createRoot } from 'react-dom/client';
import { Container } from 'materialize';
import { Login } from 'pages';

const container = document.getElementById('app');

const root = createRoot(container);

const App = () => {
  return (
    <>
      <Container useDefaultPadding>
        <Login />
      </Container>
    </>
  );
};

root.render(<App />);

import React from 'react';
import App from './components/App/App.jsx'
import { createRoot } from 'react-dom/client';
const container = document.getElementById('react-root');
const root = createRoot(container); 




root.render(<App tab="home" />);
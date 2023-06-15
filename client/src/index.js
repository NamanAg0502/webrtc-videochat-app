import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './page.js';
import { ContextProvider } from './SocketContext.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextProvider>
      <Home />
    </ContextProvider>
  </React.StrictMode>
);

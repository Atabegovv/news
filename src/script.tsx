import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './common.css';
// import { BrowserRouter } from 'react-router-dom';

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
    // <BrowserRouter>
    <App />,
    // </BrowserRouter>,
);

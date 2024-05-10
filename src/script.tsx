import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';
import './common.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { initializeAPI } from './api';
import { AuthContextProvider } from './features/auth/AuthContextProvider';

const firebaseApp = initializeAPI();

const container: any = document.getElementById('root');
const root = createRoot(container);
root.render(
    <AuthContextProvider firebaseApp={firebaseApp}>
        <Router>
            <App />
        </Router>
        ,
    </AuthContextProvider>,
);

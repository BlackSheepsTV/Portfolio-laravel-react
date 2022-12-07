import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import reportWebVitals from './reportWebVitals';

import './utils/Styles/index.scss'
import GlobalStyle from './utils/Styles/GlobalStyles'
import { GlobalProvider } from './utils/Context'

import Header from './Components/Header'
import Home from './Pages/Home';
import NotFound from './Pages/NotFound';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
  <React.StrictMode>

    <Router>

      <GlobalProvider >
        <GlobalStyle />
        <Header />

        
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        
        

      </GlobalProvider>
    </Router>
  
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

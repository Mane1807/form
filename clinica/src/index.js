import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import {App} from './App';
import { Main } from './components/pages/Main';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { global } from './components/global/global';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
     <BrowserRouter>
      
      <Routes>

        
        < Route path="/" element={<Main quotesDB={global.quotesDB} />} />
        
        

      </Routes>
    </BrowserRouter>
  </>
);



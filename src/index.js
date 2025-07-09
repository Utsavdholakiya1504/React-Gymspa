import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home';
import About from './About';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contactus from './Contactus';
import Header from './Header';
import Footer from './Footer';
import Sale from './Sale';


 
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

    <>
        <BrowserRouter>
            <Header />
            <Routes>
                < Route path={'/'} element={<Home />} />
                < Route path={'/Contactus'} element={<Contactus />} />
                < Route path={'/Sale'} element={<Sale />} />
                
            </Routes>
            <Footer />
        </BrowserRouter>


    </>


);




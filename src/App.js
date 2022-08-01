import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './pages/Home.jsx';
import EmptyCart from './pages/EmptyCart';

import './scss/main.scss';

function App() {
    return (
        <div className="wrapper">
            <Header />
            <Routes>
                <Route path="/" element={<Home />}></Route>
                <Route path="/cart" element={<EmptyCart />}></Route>
                {
                    //<Route path="*" element={<NotFound />}></Route>
                }
            </Routes>
        </div>
    );
}

export default App;

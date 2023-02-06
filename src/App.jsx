import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import AboutUs from 'pages/about-us';
import Home from 'pages/home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.scss';

const App = () => (
  <>
    <Header />
    <Main>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Main>
    <Footer />
  </>
);

export default App;

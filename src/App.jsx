import Footer from 'layout/Footer';
import Header from 'layout/Header';
import Main from 'layout/Main';
import AboutUs from 'pages/about-us';
import Home from 'pages/home';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { pages } from 'routes/paths';
import './App.scss';

const App = () => (
  <>
    <Header />
    <Main>
      <Routes>
        <Route path={pages.home.path} element={<Home />} />
        <Route path={pages.aboutUs.path} element={<AboutUs />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </Main>
    <Footer />
  </>
);

export default App;

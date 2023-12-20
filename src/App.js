// AppRouter.jsx
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import About from './Component.jsx/About';
import Contact from './Component.jsx/Contact';
import Help from './Component.jsx/Help';
import Home from './Component.jsx/Home';
import Login from './Component.jsx/Login';
import Layout from './Component.jsx/Layout';
import Header from './Component.jsx/Header';
import HotelList from './Component.jsx/HotelList';
import HotelDetails from './Component.jsx/HotelDetails';
import Item from './Component.jsx/Item';

function AppRouter() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Header />
            <Outlet />
          </Layout>
        }
      >
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
        <Route path="/login" element={<Login />} />
        <Route path="/hotel-list" element={<HotelList />} />
        <Route path="/detail/:index" element={<HotelDetails items={<Item />} />} />
      </Route>
    </Routes>
  );
}

export default AppRouter;

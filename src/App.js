// AppRouter.jsx
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import About from './Component/About';
import Contact from './Component/Contact';
import Help from './Component/Help';
import Home from './Component/Home';
import Login from './Component/Login';
import Layout from './Component/Layout';
import Header from './Component/Header';
import HotelList from './Component/HotelList';
import HotelDetails from './Component/HotelDetails';
import Item from './Component/Item';

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

// Layout.jsx
import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

function Layout({ children }) {
  return (
    <div>
      <Header />
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;

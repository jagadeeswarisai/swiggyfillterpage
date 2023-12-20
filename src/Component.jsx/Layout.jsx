// Layout.jsx
import React from 'react';
import Header from './Header'; // Adjust the path based on the actual location of Header.jsx
import Sidebar from './Sidebar'; // Adjust the path based on the actual location of Sidebar.jsx

function Layout({ children }) {
  return (
    <div>
      <Header /> {/* Add the Header component here */}
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <main style={{ flex: 1 }}>{children}</main>
      </div>
    </div>
  );
}

export default Layout;

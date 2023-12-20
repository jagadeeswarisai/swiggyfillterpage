// HotelList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const HotelList = ({ items }) => {
  return (
    <div>
      <h1>Hotel List</h1>
      <ul>
        {items.map((hotel, index) => (
          <li key={index}>
            <Link to={`/hotel/${hotel.HotelName}`}>
              <img src={hotel.img} alt={hotel.HotelName} />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HotelList;

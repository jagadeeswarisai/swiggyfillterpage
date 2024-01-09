// HotelDetails.jsx
import React from 'react';
import Layout from './Layout';
import Header from './Header';
import Item from './Item';
import { useParams } from 'react-router-dom';

function HotelDetails({ items }) {
  const { index } = useParams();

  if (!items || !items.length) {
    return <div>Loading...</div>;
  }

  const selectedItem = items.find((item, i) => i.toString() === index);

  if (!selectedItem) {
    return <div>Item not found</div>;
  }

  return (
    <Layout>
      <Header /> {/* Add the Header component here */}
      <Item items={items} />
      <div>
        <h1>{selectedItem.HotelName}</h1>
        <img src={selectedItem.img} alt={selectedItem.HotelName} />
        <p>Rating: {selectedItem.Rating}</p>
        <p>Shop Name: {selectedItem.ShopName}</p>
        <p>Location: {selectedItem.Location}</p>
      </div>
    </Layout>
  );
}

export default HotelDetails;

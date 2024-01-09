import React from 'react';

const Item = ({ items }) => {
  return (
    <div class="item-container">
      {items?.map((item, index) => (
        <div key={index} class="item">
          <img src={item.img} alt={`Image ${index + 1}`} />
          <div class="item-text">
            <p>{item.HotelName}</p>
            <p>Rating: {item.Rating}</p>
            <p>Shop Name: {item.ShopName}</p>
            <p>Location: {item.Location}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Item;
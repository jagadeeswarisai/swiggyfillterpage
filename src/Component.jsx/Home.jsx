import React, { useState } from 'react';
import {  Outlet,Link} from 'react-router-dom';

import"./Home.css";
import Item from './Item';
const items=[
    {img: require("./images/image1.jpg"),HotelName:"BriyaniVeedu",Rating:"41 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images2.jpg"),HotelName:"ThalapakattuBriyani",Rating:"47 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images3.jpg"),HotelName:"BaiBriyani",Rating:"25mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images4.jpg"),HotelName:"SurGuru",Rating:"15 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images5.jpg"),HotelName:"AnandhaBhavan",Rating:"10 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images6.jpg"),HotelName:"VegMeals",Rating:"55 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/image7.jpg"),HotelName:"PizzaHuts",Rating:"35 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images8.jpg"),HotelName:"Pizzas",Rating:"15 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
    {img: require("./images/images9.jpg"),HotelName:"KingBurger",Rating:"45 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
 {img: require("./images/images10.jpg"),HotelName:"TopCrispyBurger",Rating:"40 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
 {img: require("./images/images11.jpg"),HotelName:"KFCBytes",Rating:"20 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
 {img: require("./images/images12.jpg"),HotelName:"CrispyChicken",Rating:"15 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." }, 
 {img: require("./images/images16.jpg"),HotelName:"IceInHouse",Rating:"55 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
 {img: require("./images/images15.jpg"),HotelName:"Waffers",Rating:"35 mins",ShopName:"NorthIndia,SouthIndia", Location:"Pudhucherry." },
 

]   
function Home()
{
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);
    const filterItems = () => {
        const filtered = items.filter(
          (item) =>
            item.HotelName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.ShopName.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.Location.toLowerCase().includes(searchQuery.toLowerCase())
        );
        setFilteredItems(filtered);
      };
    return(
        <div>
            <div class="containerA">
        <h2>Restaurants with online food delivery in Pondicherry</h2>
        <div class="box15">
            <input type="text" id="Input" placeholder="Enter your text"  value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
             <button type="submit" id="button" onClick={filterItems}>
          Search
        </button>
        </div>
        
        <div className="box16">
          {searchQuery
            ? filteredItems.map((item, index) => (
                <Link to={`/detail/${index}`} key={index}>
                  {/* Wrap each item with Link and specify the route */}
                  <div>
                    {/* ... Your filtered item rendering ... */}
                    <img src={item.img} alt={`Image ${index + 1}`} id="image1" />
                    <div className="item-text">
                      <p id="hotelname">{item.HotelName}</p>
                      <p id="rating">{item.Rating}</p>
                      <p id="shopname">{item.ShopName}</p>
                      <p id="location">{item.Location}</p>
                    </div>
                  </div>
                </Link>
              ))
            : items.map((item, index) => (
                <Link to={`/detail/${index}`} key={index}>
                  {/* Wrap each item with Link and specify the route */}
                  <div>
                    {/* ... Your original item rendering ... */}
                    <img src={item.img} alt={`Image ${index + 1}`} id="image1" />
                    <div className="item-text">
                      <p id="hotelname">{item.HotelName}</p>
                      <p id="rating">{item.Rating}</p>
                      <p id="shopname">{item.ShopName}</p>
                      <p id="location">{item.Location}</p>
                    </div>
                  </div>
                </Link>
              ))}
       
</div>
<Item/>
<Outlet />
        </div>
     
        </div>
    );
}
export default Home;
// Header.jsx
import React from "react";
import { Link } from 'react-router-dom';
import "./Header.css";

function Header() {
  return (
    <div className="container">
      <div className="header">
        <h1>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJQAAACUCAMAAABC4vDmAAAAclBMVEX////8eRr8cwD8cQD8agD8dxT8bwD8bQD/8Oj8fi//+/r+18H/+vb8dg7+1L/9s479t5T+0Lj/6d39rIH9fSL+y7L+w6X+v6D+x6r/9fD8hTj9pnn9mmT+387/5df9i0f9lVv9o279kk39kVT8ij/9nWxfsXozAAAEh0lEQVR4nO2b25KrKhBAFQSNgrfERI25TC7//4tHTc5MxqASbXB2FettV03VXgVtd9MQyzIYDAaDwWAwGP4ZWBrk291ulyfHYmmXhiLNvwjFGKMWjPklPnqLKh2iK3IRsV/hlJb7ZCkjL19RxG0BBFEcpUs47UqXiIyeXpSsde+in9X/a7/SY7mcSKuWV40ptdDyoM8px0hCqVkt50tTjmCR1DI9F+uqJeCLkyutVIMcDVvoXfAnTvUWEuVJy0OS4fRi5Si28k4fO9VWXKkVKz/cu//X6qjQaT/Jqa6Hpbo0Gn/03b2CT6qcDlg+P71Z7dQ4FTdhSyAHQWrS1ZpOd6rDSskGpmj65jXgDN7J30tkKDJQqUkJX5uPEptHNtG6P+7cHFyqklgoXOfIvFeerKCdUomAInb9h8zpd4aOqlgil5NN/Yd+vxSqfFCn4iSRo8akbAzb8B1lCsyoFI1BpSKZxDkqBZxAS5nEOSpFNpD7562kpOwRKRuFgFKhVCkel8KQQbWVaoIlVmoPKLUGkuI3BubkfwFJERuuKLMrVEwBrpRkzzksRTgGPcMXUmmqX6rxce0qAj1oFVJp6iFlVe34Ezfzz8cclJPVab89eHA795D6YKXqLifMtnEcxXG822ZJAG7zhH0QU9pg5z8oZckcGrRLRXIzBJx7XQrGYNvNH3LJARBfvVGWt0u1DhVEeyB7YCciOMKue86hteT6qeFFxDfoacJ8qbpv4cCDYrnPb8wKspuqSYZqvyzQ0wRv4lzxNwh2yMguMwZmqqSsCCCoyAp4GBQCSPErcKpim/lJAa1hneTmU2NSW2ipw/ykQMDvHbzZ+wc/yQP4/qATekMwV8oJ4KWscl7+JCsVl0bbyddFLSp2b3ZTBTqb+kGyUxdDNmqOf96c2xkaKXGyrPWMpcKqbmxnRBW/qzppWbvJV35Y4YX7aerNtoIS80067Q2ATeGv1V7wzo7j/uA8eP6rV1jFBeQrfhEkWZYlSRKGYfBN2NA7RFZ11y5FTydIkLJPT4KenE+XXKgeKXLT+iSVMVYU7KeoiaVcba8+03AX7e/Vuea+j7OiX4pvtAj5QUVoM5DmDxDCtC0jQilFPUuXuPs0t6Z9TiaS4mc9n14sKIF02yPlaHqBehB0620hEUhRJV2wiPt7kmyl3peQ3LQ91RUcl91MKOUorcS/ea8nbTJ6k0JXfU6CqBJKEVvji2ZBuy6UcvUWPa/7aNBtUmTn6+Ol5u5g21mq9gDcOdlzrZtX4186sU6qvBP+yo56/aTdV+mcdtapVHMmHmTknRchKkY/Y7Dhh14u7GMpWQZfeoHPp2UZGMMQe5Ef81iDG6jgUacsh77fheCvxZx6v0Cu9/zSwRf+5oG4ulP5b1Ii2EAMft/xIYKRFa0WdhL0e8sG1IO0c2lD6LIB9SD4/QWqeKE/gf1ruaHgN43TeH3JpPWkMEj6vVR8tVTJeyd5hhVBf8fp+3CzYBkW0ZYbd+lM3uFYZyt6X9qiS+DiaqFec4A1Wr66vMH+3joZDAaDwWAwGAzD/Afxoz8X6VVpPQAAAABJRU5ErkJggg=="
            alt="Swiggy Logo"
            id="img"
          />
        </h1>
        <p id="row2">
          {" "}
          <a href="https://www.googlemaps.com">Puducherry</a>
        </p>
        <p id="row3">India</p>
        <div className="header1">
          <Link to="/" className="Home">
            Home
          </Link>
          <Link to="/about" className="Home">
            About
          </Link>
          <Link to="/contact" className="Home">
            Contact
          </Link>
          <Link to="/help" className="Home">
            Help
          </Link>
          <Link to="/login" className="Home">
            Login
          </Link>
        </div>
      </div>
      <div className="Sidebar"></div>
      <div className="Body"></div>
      <div className="Footer">
        <h1> This is my Footer page</h1>
      </div>
    </div>
  );
}

export default Header;

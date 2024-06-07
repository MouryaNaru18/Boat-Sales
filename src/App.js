// App.js
import React from 'react';
import './App.css';
import logo from './images/logo.png'; // Import the logo image
import boatlogo from './images/boat.png'; 
import h1 from './images/h1.jpg';
import h2 from './images/h2.jpg';
import h3 from './images/h3.jpg';
function App() {
  return (
    <div className="App">
      <header>
        {/* Add the logo */}
        <img src={logo} alt="Logo" className="logo" />

        <div>
          <h1 className="title">Price History & Tracker</h1> {/* Apply the "title" class */}
          
          {/* Add the search bar */}
          <input type="text" className="search-box" placeholder="Search Keyword or Paste Product link..." />
          <button className="search-button">Search</button>
          {/* Add some space */}
          <div className="spacer"></div>

          {/* Add the navigation */}
          <nav className='slides'>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Shop</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <main>

        <section className="products">

        <div className="product">
    <img src={boatlogo} alt="Boat Logo" className="boat-logo" /> {/* Boat logo */}
    <h3>Featured Models</h3> {/* Text */}
  </div>
          <div className="product">
          <img src={h1} alt="Headphones 1" style={{ width: '100px', height: 'auto' }} />

            <h3>boAt Rockerz 450 Wireless Bluetooth Headphone With Up to 8H Playback</h3>
            <p><span className="discounted-price">₹1,699</span> {/* Discounted price */}<span className="original-price">₹2,017</span> {/* Strikethrough */}
            </p>
            <button>Track Price</button>
          </div>


          <div className="product">
          <img src={h2} alt="Headphones 1" style={{ width: '150px', height: 'auto' }} />
            <h3>BoAt Airdopes 391 V5.0 Bluetooth Truly Wireless In Ear Earbuds</h3>
            <p><span className="discounted-price">₹1729</span> {/* Discounted price */}<span className="original-price">₹2699</span> {/* Strikethrough */}
            </p>
            <button>Track Price</button>
          </div>
          <div className="product">
          <img src={h3} alt="Headphones 1" style={{ width: '135px', height: 'auto' }} />
            <h3>BoAt BassHeads 100 In-Ear Wired Headphones With Mic (Black)</h3>
            <p><span className="discounted-price">₹329</span> {/* Discounted price */}<span className="original-price">₹399</span> {/* Strikethrough */}
            </p>
            <button>Track Price</button>
          </div>
        </section>

        <section className="hero">
        <marquee><p><i>Track prices of your favourite products on Amazon.</i></p></marquee>
          <h5><i>
          Boatsales is a price history tracking tool that enables you to unlock the secret ways to do smart shopping,make informed decisions,and achieve shopping goals as per your budget plans. With our key features,you can find the right time to purchase the products that you want and can grab the best deals. Use our tool and be a smart & savvy shopper.
          </i></h5>
          
        </section>
      </main>

      <footer className='footer'>
        <p>&copy; 2024 Headphone Paradise. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;

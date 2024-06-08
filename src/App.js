import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link, useNavigate } from 'react-router-dom';
import './App.css';
import logo from './images/logo.png';
import boatlogo from './images/boat.png'; 
import h1 from './images/h1.jpg';
import h2 from './images/h2.jpg';
import h3 from './images/h3.jpg';
import h4 from './images/h4.jpg';
import h5 from './images/h5.jpg';
import h6 from './images/h6.jpg';
import h7 from './images/h7.jpg';
import h8 from './images/h8.jpg';
import h9 from './images/h9.jpg';
import About from './About'; // Import the About page component
import Product1 from './Components/Product1'; // Import Product1 page component
import Product2 from './Components/Product2'; // Import Product2 page component
import Product3 from './Components/Product3'; // Import Product3 page component
import Product4 from './Components/Product4'; // Import Product1 page component
import Product5 from './Components/Product5'; // Import Product2 page component
import Product6 from './Components/Product6'; // Import Product3 page component
import Product7 from './Components/Product7'; // Import Product2 page component
import Product8 from './Components/Product8'; // Import Product3 page component
import Product9 from './Components/Product9'; // Import Product3 page component
function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <img src={logo} alt="Logo" className="logo" />
          <div>
            <h1 className="title">Price History & Tracker</h1>
            <input type="text" className="search-box" placeholder="Search Keyword or Paste Product link..." />
            <button className="search-button">Search</button>
            <div className="spacer"></div>
            <nav className='slides'>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><a href="#">Shop</a></li>
                <li><Link to="/about">About</Link></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/boAt Rockerz 551ANC" element={<Product1 />} />
            <Route path="/boAt Rockerz 255 Pro+" element={<Product2 />} />
            <Route path="/boAt Bassheads 102" element={<Product3 />} />
            <Route path="/boAt Nirvanaa 751 ANC" element={<Product4 />} />
            <Route path="/boAt Immortal 700" element={<Product5 />} />
            <Route path="/boAt Bassheads 100" element={<Product6 />} />
            <Route path="/boAt Bassheads 220" element={<Product7 />} />
            <Route path="/boAt Rockerz 195V2 Pro" element={<Product8 />} />
            <Route path="/boAt Rockerz 103 V2 Pro" element={<Product9 />} />
          </Routes>
        </main>

        <footer className='footer'>
          <p>&copy; 2024 Headphone Paradise. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

function Home() {
  const navigate = useNavigate();

  const navigateToAbout = () => {
    navigate('/about');
  };

  const navigateToProduct1 = () => {
    navigate('/boAt Rockerz 551ANC');
  };

  const navigateToProduct2 = () => {
    navigate('/boAt Rockerz 255 Pro+');
  };

  const navigateToProduct3 = () => {
    navigate('/boAt Bassheads 102');
  };
  const navigateToProduct4 = () => {
    navigate('/boAt Nirvanaa 751 ANC');
  };

  const navigateToProduct5 = () => {
    navigate('/boAt Immortal 700');
  };

  const navigateToProduct6 = () => {
    navigate('/boAt Bassheads 100');
  };
  const navigateToProduct7 = () => {
    navigate('/boAt Bassheads 220');
  };

  const navigateToProduct8 = () => {
    navigate('/boAt Rockerz 195V2 Pro');
  };

  const navigateToProduct9 = () => {
    navigate('/boAt Rockerz 103 V2 Pro');
  };

  return (
    <div>
      <section className="products">
        <div className="product">
          <img src={boatlogo} alt="Boat Logo" className="boat-logo" style={{ width: '150px', height: 'auto' }}/>
          <h3>Featured Models</h3>
        </div>
        <div className="product">
          <img src={h1} alt="Headphones 1" style={{ width: '140px', height: 'auto' }} />
          <h3>boAt Rockerz 551ANC</h3>
          <p><span className="discounted-price">₹₹3,299</span>
             <span className="original-price">₹7,990</span>
          </p>
          <button className='b1' onClick={navigateToProduct1}>Track Price</button>
        </div>
        <div className="product">
          <img src={h2} alt="Headphones 1" style={{ width: '145px', height: 'auto' }} />
          <h3>boAt Rockerz 255 Pro+	</h3>
          <p><span className="discounted-price">₹1,599</span>
             <span className="original-price">₹3,990</span>
          </p>
          <button className='b2' onClick={navigateToProduct2}>Track Price</button>
        </div>
        <div className="product">
          <img src={h3} alt="Headphones 1" style={{ width: '115px', height: 'auto' }} />
          <h3>boAt Bassheads 102</h3>
          <p><span className="discounted-price">₹499</span>
             <span className="original-price">₹1,290</span>
          </p>
          <button className='b3' onClick={navigateToProduct3}>Track Price</button>
        </div>
        <div className="product">
          <img src={h4} alt="Headphones 1" style={{ width: '120px', height: 'auto' }} />
          <h3>boAt Immortal 700</h3>
          <p><span className="discounted-price">₹2,799</span>
             <span className="original-price">₹6,990</span>
          </p>
          <button className='b4' onClick={navigateToProduct4}>Track Price</button>
        </div>
        <div className="product">
          <img src={h5} alt="Headphones 1" style={{ width: '120px', height: 'auto' }} />
          <h3>boAt Nirvanaa 751 ANC</h3>
          <p><span className="discounted-price">₹4,499</span>
             <span className="original-price">₹7,990</span>
          </p>
          <button className='b5' onClick={navigateToProduct5}>Track Price</button>
        </div>
        <div className="product">
          <img src={h6} alt="Headphones 1" style={{ width: '125px', height: 'auto' }} />
          <h3>boAt Bassheads 100</h3>
          <p><span className="discounted-price">₹399</span>
             <span className="original-price">₹999</span>
          </p>
          <button className='b6' onClick={navigateToProduct6}>Track Price</button>
        </div>
        <div className="product">
          <img src={h7} alt="Headphones 1" style={{ width: '125px', height: 'auto' }} />
          <h3>boAt Bassheads 220</h3>
          <p><span className="discounted-price">₹499</span>
             <span className="original-price">₹1,290</span>
          </p>
          <button className='b7' onClick={navigateToProduct7}>Track Price</button>
        </div>
        <div className="product">
          <img src={h8} alt="Headphones 1" style={{ width: '145px', height: 'auto' }} />
          <h3>boAt Rockerz 195V2 Pro</h3>
          <p><span className="discounted-price">₹1,399</span>
             <span className="original-price">₹3,490</span>
          </p>
          <button className='b8' onClick={navigateToProduct8}>Track Price</button>
        </div>
        <div className="product">
          <img src={h9} alt="Headphones 1" style={{ width: '145px', height: 'auto' }} />
          <h3>boAt Rockerz 103 V2 Pro</h3>
          <p><span className="discounted-price">₹999</span>
             <span className="original-price">₹3,490</span>
          </p>
          <button className='b9' onClick={navigateToProduct9}>Track Price</button>
        </div>
      </section>

      <section className="hero">
        <marquee><p><i>Track prices of your favourite products on Amazon.</i></p></marquee>
        <h5><i>
          Boatsales is a price history tracking tool that enables you to unlock the secret ways to do smart shopping, make informed decisions, and achieve shopping goals as per your budget plans. With our key features, you can find the right time to purchase the products that you want and can grab the best deals. Use our tool and be a smart & savvy shopper.
        </i></h5>
        <button onClick={navigateToAbout}>Learn More About Us</button> {/* Add navigation button */}
      </section>
    </div>
  );
}

export default App;

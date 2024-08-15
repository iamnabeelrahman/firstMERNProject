// src/components/HomePage.jsx
import React from 'react';
import { Link } from 'react-router-dom';
// Import Bootstrap CSS
import './HomePage.css'; // Import custom CSS

const HomePage = () => {
  return (
    <div>
      <nav className="nav">
        <ul className="nav justify-content-end">
          <li className="nav-item">
            <Link className="nav-link active" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">Profile</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/settings">Setting</Link>
          </li>
        </ul>
      </nav>

      <h1>Latest Event</h1>

      <div className="container">
        <form action="" className="Searchbar">
          <input type="text" placeholder="Search events, friends..." name="q" />
          <button className="search-icon" type="submit">
            <i className='bx bx-search'></i>
          </button>
        </form>

        <div className="connection">
          <button><img width="50" src="images/avatar.png" alt="" /></button>
          <button><img width="50" src="images/avatar.png" alt="" /></button>
          <button><img width="50" src="images/avatar.png" alt="" /></button>
          <button><img width="50" src="images/avatar.png" alt="" /></button>
          <button><img width="50" src="images/avatar.png" alt="" /></button>
          <button><img width="50" src="images/avatar.png" alt="" /></button>
        </div>
      </div>

      <div className="box">
        <h3>Popular Events</h3>
        <button type="button"> See all</button>
      </div>

      <div className="slider">
        <div id="carouselExampleCaptions" className="carousel slide">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img height="300" src="images/basketball.jpg" className="d-block w-100" alt="Basketball Challenge" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Basketball Challenge</h5>
                <p>Show your talent in the ground, <br /><a href="#">BOOK TRIAL!</a></p>
              </div>
            </div>
            <div className="carousel-item">
              <img height="300" src="images/cricket.jpg" className="d-block w-100" alt="Cricket Challenge" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Cricket Challenge</h5>
                <p>Show your talent in the ground, <br /><a href="#">BOOK TRIAL!</a></p>
              </div>
            </div>
            <div className="carousel-item">
              <img height="300" src="images/football.jpg" className="d-block w-100" alt="Football Challenge" />
              <div className="carousel-caption d-none d-md-block">
                <h5>Football Challenge</h5>
                <p>Show your talent in the ground, <br /><a href="#">BOOK TRIAL!</a></p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

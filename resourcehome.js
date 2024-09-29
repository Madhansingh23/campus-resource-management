import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import PeopleIcon from '@mui/icons-material/People';

export default function Home() {
  return (
    <div>
      <header className="header py-3 border-bottom">
        <div className="container d-flex justify-content-between align-items-center">
          <div className="logo d-flex ">
            {/* <img src="/tes-logo.png" alt="tes logo" className="img-fluid" /> */}
            <PeopleIcon style={{ fontSize: '36px' }} />
            <h3 className="fw-bolder">UniSpace</h3>
          </div>
          {/* <nav>
            <ul className="nav">
              <li className="nav-item"><a className="nav-link text-dark" href="#">Products</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">About Us</a></li>
              <li className="nav-item"><a className="nav-link text-dark" href="#">Support</a></li>
            </ul>
          </nav> */}
          <div className="contact-button">
            <a href="/resourceform" className="btn btn-info ">Sign-in</a>
          </div>
        </div>
      </header>

      <section className="hero-section py-5">
        <div className="con container d-flex flex-column flex-lg-row justify-content-between align-items-center">
          <div className="left-content text-center text-lg-start mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mx-1">Easy Campus Resource Booking</h1>
            <p className="lead">Book Auditoriums, Conference Room, Laboratories, Seminar Hall</p>
            <button className="btn btn-lg btn-success mt-2"><a href="/login1" style={{textDecoration:'none',color:'white'}}>Login</a></button>
          </div>
          {/* <div className="right-content bg-white p-4 rounded shadow">
            <div className="booking-widget">
            <img src="images/bg-some.jpg" alt="Booking Schedule" className="image img-fluid rounded" />
            </div>
          </div> */}
          <div className="booking-widget right-content p-4">
            <img src="images/bg-some.jpg" alt="Booking Schedule" className="image " />
            </div>
        </div>
      </section>

      <style jsx>{`
        /* Header */
        .header {
          background-color: #f8f8f8;
        }
        .header .nav-link {
          font-weight: 500;
        }
        .contact-button a {
          padding: 10px 20px;
          border-radius:20px;
        }
          .con{
          height:100vh
          margin-top:50px;
          }

        /* Hero Section */
        .hero-section {
          background-color: #f0f4f8;
          height: 100vh;
        }
          .hero-section button{
          border-radius:20px;
          padding:4px 20px
        
          }
        .logo{
        gap:0.4rem;
        }  

        /* Booking Widget */
        .booking-widget {
          width: 100%;
          max-width: 400px;
          right:0;
        }

        .image{
           width:300px;
           height:300px;
           margin-left:30px;

        }
        .time-slot {
          background-color: #f0f0f0;
        }
        .closed {
          background-color: #f8d7da !important;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
          .hero-section {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
}
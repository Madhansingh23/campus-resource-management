import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Login() {
  return (
    <div className="login-container d-flex justify-content-center align-items-center vh-100">
      <div className="row shadow-lg bg-white" style={{ width: '800px', borderRadius: '10px', overflow: 'hidden' }}>
        {/* Left Column - Image */}
        <div className="col-md-6 d-none d-md-block p-0">
          <img
            src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg?t=st=1727603592~exp=1727607192~hmac=9dda58183960b3839cbdb1546d530b1ea944b14c25aca032eff524e7d94b037f&w=740"
            alt="Booking illustration"
            className="img-fluid h-100"
            style={{ objectFit: 'cover' }}
          />
        </div>

        {/* Right Column - Form */}
        <div className="col-md-6 p-4">
          <h2 className="text-center mb-4 text-primary fw-bold">Login</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Enter your email" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" id="password" placeholder="Enter your password" />
            </div>
            <button type="submit" className="btn btn-primary w-100"><a href='/resource' style={{textDecoration:'none',color:'white'}}>Login</a></button>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <a href="/resourceform" className="text-primary">Sign up</a>
          </p>
        </div>
      </div>

      <style jsx>{`
        .login-container {
          background-color: #f0f4f8;
        }
        .card {
          background-color: rgba(255, 255, 255, 0.9);
        }
        .btn-primary {
          background-color: #6c63ff;
          border-color: #6c63ff;
        }
        .text-primary {
          color: #6c63ff !important;
        }
      `}</style>
    </div>
  );
}
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'; // Next.js optimized Image component

export default function Register() {
  return (
    <div className="register-container vh-100 d-flex justify-content-center align-items-center bg-light">
      <div className="card shadow-lg" style={{ borderRadius: '10px', overflow: 'hidden', maxWidth: '900px', width: '100%', backgroundColor: '#fff' }}>
        <div className="row g-0">
          {/* Left side - Image */}
          <div className="col-md-6 d-none d-md-block">
            <img
              src="https://img.freepik.com/free-vector/appointment-booking-with-calendar_23-2148553008.jpg?t=st=1727603592~exp=1727607192~hmac=9dda58183960b3839cbdb1546d530b1ea944b14c25aca032eff524e7d94b037f&w=740"
              alt="Register Image"
              className="img-fluid h-100"
              style={{ objectFit: 'cover', height: '100%' }}
            />
          </div>

          {/* Right side - Form */}
          <div className="col-md-6 p-5">
            <h2 className="mb-4 text-primary">Create an account</h2>
            <p>
              Already have an account? <a href="/login1" className="text-primary">Log in</a>
            </p>

            {/* Form */}
            <form>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="First name" />
              </div>
              <div className="mb-3">
                <input type="text" className="form-control" placeholder="Last name" />
              </div>
              <div className="mb-3">
                <input type="email" className="form-control" placeholder="Email" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Enter your password" />
              </div>
              <div className="mb-3">
                <input type="password" className="form-control" placeholder="Confirm password" />
              </div>
              <div className="form-check mb-4">
                <input type="checkbox" className="form-check-input" id="terms" />
                <label className="form-check-label" htmlFor="terms">
                  I agree to the <a href="#" className="text-primary">Terms & Conditions</a>
                </label>
              </div>
              <button type="submit" className="btn btn-primary w-100 mb-3">Create account</button>
            </form>

            {/* Social Buttons */}
            {/* <button className="btn btn-light w-100 mb-2">Google</button>
            <button className="btn btn-light w-100">Apple</button> */}
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        .register-container {
          background-color: #f8f9fa;
        }
        .card {
          max-width: 900px;
          width: 100%;
          background-color: #fff;
        }
        .text-primary {
          color: #7367f0 !important;
        }
        .btn-primary {
          background-color: #7367f0;
          border-color: #7367f0;
        }
        .img-fluid {
          height: 100%; /* Ensures the image takes full height of the form */
        }
      `}</style>
    </div>
  );
}
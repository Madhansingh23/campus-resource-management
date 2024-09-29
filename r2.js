// pages/hallDetails.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const HallDetails = () => {
  const [date, setDate] = useState(new Date());
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="d-flex flex-column flex-lg-row">
      {/* Left Sidebar */}
      <div className={`bg-light p-3 vh-100 ${sidebarOpen ? 'd-block' : 'd-none d-lg-block'}`} style={{ width: '80px' }}>
        <ul className="nav flex-column text-center">
          <li className="nav-item mb-4">
            <HomeIcon style={{ fontSize: '36px' }} />
          </li>
          <li className="nav-item mb-4">
            <PeopleIcon style={{ fontSize: '36px' }} />
          </li>
          <li className="nav-item mb-4">
            <BusinessIcon style={{ fontSize: '36px' }} />
          </li>
          <li className="nav-item mb-4">
            <CalendarTodayIcon style={{ fontSize: '36px' }} />
          </li>
          <li className="nav-item mb-4">
            <InsertDriveFileIcon style={{ fontSize: '36px' }} />
          </li>
          <li className="nav-item">
            <SettingsIcon style={{ fontSize: '36px' }} />
          </li>
        </ul>
      </div>

      {/* Toggle Sidebar Button for Small Screens */}
      <button
        className="btn btn-primary d-lg-none m-2"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? 'Close Menu' : 'Open Menu'}
      </button>

      {/* Main Content */}
      <div className="container-fluid p-4" style={{ flex: 1 }}>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <button className="btn btn-primary mb-3" style={{fontSize:'15px'}}>Today</button>
          <h5 className="mb-3">Sunday, September 29, 2023</h5>
        </div>

        <div className="mt-4 p-4 bg-light shadow-sm rounded">
          <h3>Seminar Hall Details:</h3>
          <div className="mt-3 p-3 fw-3 rounded" style={{fontSize: '1.5rem'}}>
            <p><strong>Name:</strong> Seminar Hall</p>
            <p><strong>Location:</strong> Civil Block Left Gate</p>
            <p><strong>Capacity:</strong> 60 seats + 6 separate seats</p>
            <p><strong>Seating Arrangement:</strong> Rectangular 3*20</p>
            <p><strong>Facilities:</strong></p>
            <ul>
              <li>Wifi Access (4 no’s)</li>
              <li>Visual Support: Projector</li>
              <li>Audio Support: 5 mics (4 + 1 fixed)</li>
            </ul>
          </div>
          <div className="text-center" style={{width:'100%'}}>
        <button className="btn btn-primary fw-bold" style={{width:'150px',fontSize:'20px',width:'100%'}}><a href='/brandoform' style={{textDecoration:'none',color:'white'}}>Book this resource now</a></button>
        </div>
        </div>

        {/* Photos Section */}
        <div className="mt-4">
          <h1>Photos</h1>
          <div className="row g-3">
           
            <div className="col-6 col-md-3">
              <img src="https://www.psnacet.edu.in/images/significance2.JPG" className="img-fluid rounded" alt="Hall 2" />
            </div>
            <div className="col-6 col-md-3">
              <img src="https://www.psnacet.edu.in/old/psnaimage/infra/1.jpg" className="img-fluid rounded" alt="Hall 3" />
            </div>
            <div className="col-6 col-md-3">
              <img src="https://www.psnacet.edu.in/old/psnaimage/infra/2.jpg" className="img-fluid rounded" alt="Hall 4" />
            </div>
            <div className="col-6 col-md-3">
              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR8b5esh9DJYBsJMFNZdt3e06OViB2JJQeGA&s" className="img-fluid rounded" alt="Hall 1"/>
            </div>

          </div>
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="bg-light p-4 vh-100 d-none d-lg-block" style={{ width: '250px' }}>
        <div className="mb-4">
          <Calendar value={date} onChange={setDate} />
        </div>
        
      </div>
    </div>
  );
};

export default HallDetails;

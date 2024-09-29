import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Dropdown, ButtonGroup, DropdownButton, Row, Col } from 'react-bootstrap';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import BusinessIcon from '@mui/icons-material/Business';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import SettingsIcon from '@mui/icons-material/Settings';
import { useRouter } from 'next/router';

import TimelinePage from './timeline'; // Assuming TimelinePage is in the same folder

const ResourceBooking = () => {
  const [selectedResource, setSelectedResource] = useState('');
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const router = useRouter();

  const auditoriums = [
    { name: 'KCG Hall', count: 60, floor: 2, link: '/r2' },
    { name: 'SriRangaLatchmi', count: 120, floor: 1, link: '/halldetails' },
    { name: 'Shannon Hall', count: 120, floor: 1, link: '/r2' },
  ];

  const labs = [
    { name: 'IBM lab', count: 67, floor: 1, link: '/r2' },
    { name: 'UG lab', count: 75, floor: 2, link: '/r2' },
    { name: 'PG lab', count: 75, floor: 2, link: '/halldetails' },
    { name: 'CLOUD lab', count: 75, floor: 2, link: '/r2' },
    { name: 'INNOVATIVE lab', count: 75, floor: 2, link: '/r2' },
  ];

  const handleSelect = (resource) => {
    setSelectedResource(resource);
  };

  const handleDateChange = (date) => {
    setDate(date);
  };

  const fetchEvents = async () => {
    try {
      const response = await fetch('/api/calendarEvents');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const events = await response.json();
      setEvents(events);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="d-flex flex-column flex-lg-row">
      {/* Left Sidebar */}
      <div className="bg-light p-3 vh-450 d-none d-lg-block" style={{ width: '80px' }}>
        <ul className="nav flex-column text-center">
          <li className="nav-item mb-4"><HomeIcon style={{ fontSize: '36px' }} /></li>
          <li className="nav-item mb-4"><PeopleIcon style={{ fontSize: '36px' }} /></li>
          <li className="nav-item mb-4">
      <a href="/BookingsPage" title="Business" style={{color:'black'}}>
        <BusinessIcon style={{ fontSize: '36px' }} />
      </a>
    </li>
          <li className="nav-item mb-4"><CalendarTodayIcon style={{ fontSize: '36px' }} /></li>
          <li className="nav-item mb-4"><InsertDriveFileIcon style={{ fontSize: '36px' }} /></li>
          <li className="nav-item"><SettingsIcon style={{ fontSize: '36px' }} /></li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container-fluid p-4" style={{ backgroundColor: '#e9f0f5', height: '100vh' }}>
        <div className="d-flex flex-column flex-md-row justify-content-between mb-3">
          <button className="btn btn-primary mb-2 mb-md-0">Today</button>
          <div className="d-flex align-items-center">
            <button className="btn btn-light mr-2">&lt;</button>
            <button className="btn btn-light mr-2">&gt;</button>
            <span>{date.toLocaleDateString()}</span>
          </div>
        </div>

        {/* Customized Dropdown */}
        <div className="mb-4">
          <DropdownButton
            as={ButtonGroup}
            id="dropdown-basic-button"
            variant="outline-secondary"
            title={selectedResource ? `Selected: ${selectedResource}` : 'Select a Resource'}
            onSelect={handleSelect}
          >
            <Dropdown.Item eventKey="Auditoriums">Auditoriums</Dropdown.Item>
            <Dropdown.Item eventKey="Labs">Labs</Dropdown.Item>
          </DropdownButton>
        </div>

        {/* Table for Auditoriums */}
        {selectedResource === 'Auditoriums' && (
          <Table striped bordered hover className="resource-table mb-4">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Floor</th>
              </tr>
            </thead>
            <tbody>
              {auditoriums.map((auditorium, index) => (
                <tr key={index} onClick={() => router.push(auditorium.link)} style={{ cursor: 'pointer' }}>
                  <td>{auditorium.name}</td>
                  <td>{auditorium.count}</td>
                  <td>{auditorium.floor}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {/* Table for Labs */}
        {selectedResource === 'Labs' && (
          <Table striped bordered hover className="resource-table mb-4">
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Floor</th>
              </tr>
            </thead>
            <tbody>
              {labs.map((lab, index) => (
                <tr key={index} onClick={() => router.push(lab.link)} style={{ cursor: 'pointer' }}>
                  <td>{lab.name}</td>
                  <td>{lab.count}</td>
                  <td>{lab.floor}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}

        {/* Layout for Calendar and Upcoming Events */}
        <Row className="mt-4">
          {/* Calendar for Resource Schedule */}
          <Col md={6}>
            <div className="calendar-container p-3">
              <h5>Resource Schedule</h5>
              <Calendar onChange={handleDateChange} value={date} />
            </div>
          </Col>

          {/* Upcoming Events */}
          <Col md={6}>
            <div className="event-timeline p-3">
              <h5>Upcoming Events</h5>
              <ul>
                {events.map((event, index) => (
                  <li key={index}>
                    <strong>{event.summary}</strong><br />
                    {new Date(event.start.dateTime || event.start.date).toLocaleString()}<br />
                    {event.description}
                  </li>
                ))}
              </ul>
            </div>
          </Col>
        </Row>

        {/* Timeline for Hall Booking */}
        <Row className="mg-6" style={{ marginTop: '250px', width: '100%' }}>
          <Col style={{ width: '100%' }}>
            <TimelinePage />
          </Col>
        </Row>

        {/* Internal CSS */}
        <style jsx>{`
          .calendar-container {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .event-timeline {
            background-color: #fff;
            border-radius: 5px;
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
          }

          .resource-table {
            cursor: pointer;
          }

          .resource-table tbody tr:hover {
            background-color: #f1f1f1;
          }
        `}</style>
      </div>
    </div>
  );
};

export default ResourceBooking;

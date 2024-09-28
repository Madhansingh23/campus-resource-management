import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Table, Dropdown, ButtonGroup, DropdownButton } from 'react-bootstrap';

const ResourceBooking = () => {
  const [selectedResource, setSelectedResource] = useState('');

  const auditoriums = [
    { name: 'KCG Hall', count: 60, floor: 2 },
    { name: 'SriRangaLatchmi', count: 120, floor: 1 },
  ];

  const handleSelect = (resource) => {
    setSelectedResource(resource);
  };

  return (
    <div className="d-flex">
      {/* Sidebar */}
      <div className="bg-light" style={{ width: '80px', height: '100vh', borderRight: '1px solid #ccc' }}>
        <div className="text-center py-3">
          <img src="/icons/logo.svg" alt="Logo" width="40" height="40" />
        </div>
        <ul className="nav flex-column mt-4">
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/icons/home.svg" alt="Home" width="30" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/icons/settings.svg" alt="Settings" width="30" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/icons/buildings.svg" alt="Buildings" width="30" />
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <img src="/icons/calendar.svg" alt="Calendar" width="30" />
            </a>
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="container-fluid p-4" style={{ backgroundColor: '#e9f0f5', height: '100vh' }}>
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary">Today</button>
          <div className="d-flex align-items-center">
            <button className="btn btn-light mr-2">&lt;</button>
            <button className="btn btn-light mr-2">&gt;</button>
            <span>Wednesday, April 26, 2023</span>
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
            <Dropdown.Item eventKey="Conference Halls">Conference Halls</Dropdown.Item>
            <Dropdown.Item eventKey="Auditoriums">Auditoriums</Dropdown.Item>
            <Dropdown.Item eventKey="Labs">Labs</Dropdown.Item>
          </DropdownButton>
        </div>

        {/* Table for Conference Halls */}
        {selectedResource === 'Conference Halls' && (
          <Table striped bordered hover>
            <thead className="bg-light">
              <tr>
                <th>Name</th>
                <th>Count</th>
                <th>Floor</th>
              </tr>
            </thead>
            <tbody>
              {auditoriums.map((auditorium, index) => (
                <tr key={index}>
                  <td>{auditorium.name}</td>
                  <td>{auditorium.count}</td>
                  <td>{auditorium.floor}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default ResourceBooking;

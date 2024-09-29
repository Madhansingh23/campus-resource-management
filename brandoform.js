import React, { useState } from 'react';
import axios from 'axios';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        eventName: '',
        organiserName: '',
        contact: '',
        email: '',
        facultyOverhead: '',
        // studentOrganiser: '',
        hallName: '',
        fromDate: '',
        toDate: '',
        startTime: '',
        endTime: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/bookings', formData);
            alert('Booking Successful!'); 
            console.log('Booking Successful:', response.data);
        } catch (error) {
            if (error.response && error.response.status === 400) {
                alert('Error: ' + error.response.data.message); 
            } else {
                alert('Error booking resource: ' + error.message); 
            }
            console.error('Error booking resource:', error.response ? error.response.data.message : error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit} style={styles.form}>
            <h2 style={styles.heading}>Booking Form</h2>
            <label>
                Event Name:
                <input type="text" name="eventName" placeholder="Event Name" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                Organiser Name:
                <input type="text" name="organiserName" placeholder="Organiser Name" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                Contact:
                <input type="text" name="contact" placeholder="Contact" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                Email:
                <input type="email" name="email" placeholder="Email" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                Faculty Overhead:
                <input type="text" name="facultyOverhead" placeholder="Faculty Overhead" onChange={handleChange} required style={styles.input} />
            </label>
            {/* <label>
                Student Organiser:
                <input type="text" name="studentOrganiser" placeholder="Student Organiser" onChange={handleChange} required style={styles.input} />
            </label> */}
            <label>
                Hall Name:
                <input type="text" name="hallName" placeholder="Hall Name" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                From Date:
                <input type="date" name="fromDate" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                To Date:
                <input type="date" name="toDate" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                Start Time:
                <input type="time" name="startTime" onChange={handleChange} required style={styles.input} />
            </label>
            <label>
                End Time:
                <input type="time" name="endTime" onChange={handleChange} required style={styles.input} />
            </label>
            <button type="submit" style={styles.button}>Book Resource</button>
        </form>
    );
};

const styles = {
    form: {
        backgroundColor: 'white',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        padding: '20px',
        maxWidth: '500px',
        margin: '50px auto'
    },
    heading: {
        textAlign: 'center',
        color: '#333'
    },
    input: {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        border: '1px solid #ccc',
        borderRadius: '4px',
        transition: 'border-color 0.3s',
    },
    button: {
        backgroundColor: '#4CAF50', 
        color: 'white',
        padding: '10px',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
        width: '100%',
        fontSize: '16px',
        marginTop: '10px'
    }
};

export default BookingForm;

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BookingsPage = () => {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchBookings = async () => {
            try {
                const response = await axios.get('http://localhost:5000/api/bookings');
                setBookings(response.data);
                setLoading(false);
            } catch (error) {
                setError(error.message || 'Error fetching bookings');
                setLoading(false);
            }
        };
        fetchBookings();
    }, []);

    const handleDelete = async (bookingId) => {
        const confirmDelete = window.confirm('Are you sure you want to delete this booking?');
        if (!confirmDelete) return;

        try {
            await axios.delete(`http://localhost:5000/api/bookings/${bookingId}`);
            // Remove the deleted booking from the state
            setBookings(bookings.filter((booking) => booking._id !== bookingId));
        } catch (error) {
            setError(error.message || 'Error deleting booking');
        }
    };

    if (loading) {
        return <p>Loading bookings...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <div style={styles.container}>
            <h2 style={styles.heading}>All Bookings</h2>
            <div style={styles.cardContainer}>
                {bookings.map((booking) => (
                    <div key={booking._id} style={styles.card}>
                        <h3>{booking.eventName}</h3>
                        <p><strong>Organiser:</strong> {booking.organiserName}</p>
                        <p><strong>Contact:</strong> {booking.contact}</p>
                        <p><strong>Email:</strong> {booking.email}</p>
                        <p><strong>Faculty Overhead:</strong> {booking.facultyOverhead}</p>
                        <p><strong>Hall:</strong> {booking.hallName}</p>
                        <p><strong>From:</strong> {new Date(booking.fromDate).toLocaleDateString()}</p>
                        <p><strong>To:</strong> {new Date(booking.toDate).toLocaleDateString()}</p>
                        <p><strong>Time:</strong> {booking.startTime} - {booking.endTime}</p>
                        <button 
                            style={styles.deleteButton} 
                            onClick={() => handleDelete(booking._id)}
                        >
                            CANCEL
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '20px',
        maxWidth: '1200px',
        margin: '0 auto',
       
    },
    heading: {
        textAlign: 'center',
        color: '#333',
        marginBottom: '20px'
    },
    cardContainer: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
        gap: '20px',
    },
    card: {
        backgroundColor: '#fff',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0, 85, 170, 0.6)',

        padding: '20px',
        textAlign: 'left',
    },
    deleteButton: {
        marginTop: '10px',
        padding: '10px 20px',
        backgroundColor: '#d9534f',
        color: '#fff',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer',
    }
};

export default BookingsPage;

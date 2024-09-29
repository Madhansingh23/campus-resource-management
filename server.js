const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');  // Import nodemailer

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/booking', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

// Booking Schema
const bookingSchema = new mongoose.Schema({
    eventName: String,
    organiserName: String,
    contact: String,
    email: String,
    facultyOverhead: String,
    hallName: String,
    fromDate: Date,
    toDate: Date,
    startTime: String,
    endTime: String
});

const Booking = mongoose.model('Booking', bookingSchema);

// Check for overlapping bookings
const isOverlapping = async (fromDate, toDate, startTime, endTime, hallName) => {
    const bookings = await Booking.find({
        hallName,
        fromDate,
        toDate,
        $or: [
            { startTime: { $gte: startTime, $lt: endTime } },
            { endTime: { $gt: startTime, $lte: endTime } },
            { startTime: startTime, endTime: endTime }
        ]
    });
    return bookings.length > 0;
};

// Set up Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',  // e.g. 'gmail', 'hotmail'
    auth: {
        user: 'joffinrenold2005@gmail.com', // Your email
        pass: 'gvvt baua pzoa yeao' // Your email password or App Password if 2FA is enabled
    }
});

// API endpoint to create a booking
app.post('/api/bookings', async (req, res) => {
    const { eventName, organiserName, contact, email, facultyOverhead, studentOrganiser, hallName, fromDate, toDate, startTime, endTime } = req.body;

    const overlapping = await isOverlapping(fromDate, toDate, startTime, endTime, hallName);
    if (overlapping) {
        return res.status(400).json({ message: "This hall is already booked for the selected time." });
    }

    const newBooking = new Booking(req.body);
    await newBooking.save();

    // Email options
    const mailOptions = {
        from: 'joffinrenold2005@gmail.com',
        to: 'marlanbrando1975@gmail.com', // Sends to the user-provided email
        subject: 'Booking Confirmation',
        text: `Booking Details:
        Event Name: ${eventName}
        Organiser Name: ${organiserName}
        Contact: ${contact}
        Email: ${email}
        Faculty Overhead: ${facultyOverhead}
        Hall Name: ${hallName}
        From Date: ${fromDate}
        To Date: ${toDate}
        Start Time: ${startTime}
        End Time: ${endTime}
        `
    };

    // Send email
    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent:', info.response); // Log email sent confirmation
        res.status(201).json(newBooking);  // Respond with the new booking
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(201).json({
            message: 'Booking successful but failed to send confirmation email.',
            booking: newBooking
        });
    }
});

// API endpoint to get all bookings (optional)
app.get('/api/bookings', async (req, res) => {
    try {
        const bookings = await Booking.find();
        res.status(200).json(bookings);
    } catch (error) {
        res.status(500).json({ message: "Error retrieving bookings." });
    }
});

// API endpoint to delete a booking (optional)
app.delete('/api/bookings/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const deletedBooking = await Booking.findByIdAndDelete(id);
        if (!deletedBooking) {
            return res.status(404).json({ message: "Booking not found." });
        }
        res.status(200).json({ message: "Booking deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Error deleting booking." });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

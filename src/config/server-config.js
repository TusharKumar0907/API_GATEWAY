const dotenv = require('dotenv');

dotenv.config();

module.exports = {
    PORT: process.env.PORT,
    JWT_EXPIRY: process.env.JWT_EXPIRY,
    JWT_SECRET: process.env.JWT_SECRET,
    // FLIGHT_SERVICE: process.env.FLIGHT_SERVICE,
    // BOOKING_SERVICE: process.env.BOOKING_SERVICE
};
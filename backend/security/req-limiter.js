const rateLimit = require('express-rate-limit');

const employeeLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 10, // Limit each IP to 10 requests
})

const userLimiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100, // Limit each IP to 10 requests
})

module.exports = {
    employeeLimiter,
    userLimiter
}
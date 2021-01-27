const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    port: 2525,
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});


function sendEmail(userEmail, subject) {
    const mailOptions = {
        from: 'Employee Management System MEAN crud',
        to: userEmail,
        subject: subject,
        text: 'Here is the link'
    };

    return new Promise((resolve, reject) => {
        transporter.sendMail(mailOptions, (err, info) => {
            if (err) {
                reject(err);
            } else {
                resolve(info);
            }
        });
    })
}


module.exports = {
    sendEmail
};
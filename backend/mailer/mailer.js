const nodemailer = require('nodemailer');

let mailerDebug = require('debug')('worker:debugMailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.SENDER_EMAIL_ADDRESS,
        pass: process.env.SENDER_EMAIL_PASSWORD
    }
});


function resetPasswordEmail(userEmail, subject, token) {
    mailerDebug('Resetting password');
    const mailOptions = {
        from: 'Employee Management System MEAN crud',
        to: userEmail,
        subject: subject,
        html: `
            <html>
            <style>
                .link{
                    color: blue;
                    text-decoration: underline;
                }
            </style>
            <body>
                <h3> Hi there, </h3> 
                <p> You request to reset your password for Employee Management System (MEAN). </p>
                <p> You can reset your password by clicking the link below: </p>
                <a href="https://employee-management-mean.herokuapp.com/account/resetPassword/` + token + `" class="link"> localhost:4200/account/resetPassword/` + token + `</a>
                <p> This link will be valid for the next 30 minutes. </p>
                <br>

                <p> If you did not request a new password, please let us know by replying to this email. </p>
                    <p> Yours,</p>
                    <p>Alaa Ahmed Afifi </p>
                </body>
            </html>
            `
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

/* Send email when guest logs in */
function guestLoginEmail() {
    mailerDebug('Guest login email');
    const mailOptions = {
        from: 'Employee Management System MEAN crud',
        to: process.env.RECIEVER_EMAIL_ADDRESS,
        subject: 'Guest Logged in',
        html: `
            <html>
                <body>
                    <h3> A guest just logged in. </h3> 
                    <p> Yours,</p>
                    <p>Alaa Ahmed Afifi </p>
                </body>
            </html>
            `
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
    resetPasswordEmail,
    guestLoginEmail
};
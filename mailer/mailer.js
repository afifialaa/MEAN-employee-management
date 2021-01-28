const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD
    }
});

const resetPasswordHtml = `
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
            <a href="https://www.google.com" class="link"> www.google.com </a>
            <p> This link will be valid for the next 30 minutes. </p>
            <br>

            <p> If you did not request a new password, please let us know by replying to this email. </p>
            <p> Yours,</p>
            <p>Alaa Ahmed Afifi </p>
        </body>
    </html>
    
`


function sendEmail(userEmail, subject, token) {
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
                <a href="https://employee-management-mean.herokuapp.com/account/resetPassword/` + token + `" class="link"> employee-management-mean </a>
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


module.exports = {
    sendEmail
};
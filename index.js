/**
 * Created by alfonso on 27/12/17.
 */
var nodemailer = require('nodemailer');

module.exports.createEmail=function(filepath)
{
    var configMail = require(filepath);
    var transporter = nodemailer.createTransport(configMail);
    return transporter;
}

module.exports.sendEMail= function(transporter,mailOptions)
{
    return transporter.sendMail(mailOptions);
}

module.exports.createMailOption=function()
{
    var mailOptions = {
        from: 'itsapp.it@gmail.com', // sender address
        to: 'itsapp.it@gmail.com',
        subject: 'Test invio email', // Subject line
        text: 'Test invio email', // plain text body
        html: '<b>Test invio email</b>' // html body
    };
    return mailOptions
}

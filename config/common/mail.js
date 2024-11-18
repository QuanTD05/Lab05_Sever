var nodemailer = require("nodemailer");
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "trandinhquan66@gmail.com",
        pass: "gtaz orwz owvr qhgm"
    }
});
module.exports = transporter 
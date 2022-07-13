import nodemailer from "nodemailer";

const main = async (recipient) =>{

    const transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true,
        auth: {
            user: process.env.EMAIL_ID,
            pass: process.env.EMAIL_PASSWORD
        }
    })
    
const info = await transporter.sendMail({
    from: '"Ather Ahmad 👻" <atherdci@gmail.com>',
    to: recipient,
    subject: "confirm email",
    text: "my text",
    html: "<b>Html Text</b>"
});

console.log("message sent", info.messageId)

}

const emailSender = (recipient) => main(recipient).catch(console.error);

export default emailSender;

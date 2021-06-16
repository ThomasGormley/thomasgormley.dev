import { createTransport } from 'nodemailer';
import config from './config';

const transporter = createTransport(config.email.smtp);

export const sendEmail = async ({ from, subject, text }) => {
    const message = {
        from,
        to: config.email.address,
        subject,
        text,
    };
    return await transporter.sendMail(message);
};

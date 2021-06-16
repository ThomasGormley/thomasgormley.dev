import { sendEmail } from '../../lib/email';

export default async function handler(req, res) {
    const { name, email, message } = req.body;

    if (!name || !email || !message)
        return res.status(400).json({
            error: 'Payload incomplete',
        });

    try {
        await sendEmail({
            from: email,
            subject: `Email from ${name} via thomasgormley.dev`,
            text: message,
        });

        return res.status(200).json({ message: 'Message sent' });
    } catch (err) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
}

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",

  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

const sendMail = async (contact) => {
  await transporter.sendMail({
    from: `"LearnHub" <${process.env.EMAIL}>`,
    to: process.env.EMAIL,

    subject: `📩 New Contact Message: ${contact.subject}`,

    html: `
      <h2>New Contact Message</h2>

      <p><strong>Name:</strong> ${contact.name}</p>

      <p><strong>Email:</strong> ${contact.email}</p>

      <p><strong>Subject:</strong> ${contact.subject}</p>

      <hr/>

      <p>${contact.message}</p>
    `,
  });
};

module.exports = sendMail;

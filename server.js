const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Route to handle email sending
app.post("/send-email", async (req, res) => {
  const { name, email, company, message } = req.body;

  // Create a transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com", // Your mail server
    port: 465, // Common SMTP port
    secure: true, // Use true if port is 465
    auth: {
      user: "walkittalkit.001@gmail.com", // Your email address
      pass: "ciwn ohdu ctmz qtrg", // Your email password
    },
    logger: true,  // Enable logging
    debug: true,   // Enable debugging
  });

  // Email options
  const mailOptions = {
    from: `${name} <walkittalkit.001@gmail.com>`,
    to: "ondari@hokela.co.ke", // Replace with the recipient's email
    subject: `Inquiry via kazan.africa by ${name}`,
    text: `Company: ${company}\n\nSenders Email: ${email}\n\n${message}`, // Message content
    replyTo: email, // This is the sender's email from the form
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).send("Email sent successfully!");
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).send("Error sending email.");
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

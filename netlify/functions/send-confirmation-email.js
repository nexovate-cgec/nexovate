const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  // Handle preflight
  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: JSON.stringify({ message: 'CORS preflight' }) };
  }

  // Local development check
  if (process.env.NODE_ENV === 'development') {
    console.log('📧 [DEV] Email would be sent with data:', JSON.parse(event.body));
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Email sent (local development)',
        debug: JSON.parse(event.body)
      })
    };
  }

  // Production code (your existing code)
  try {
    const { to, name, year, college, department, submissionDate } = JSON.parse(event.body);

    if (!to || !name) {
      return { statusCode: 400, headers, body: JSON.stringify({ error: 'Missing required fields' }) };
    }

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: to,
      subject: 'Application Received - CGEC E-Cell',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #bd9f67;">Welcome to CGEC E-Cell!</h2>
          <p>Dear <strong>${name}</strong>,</p>
          <p>Thank you for your application. We will contact you soon.</p>
          <p>Best regards,<br>CGEC E-Cell Team</p>
        </div>
      `
    };

    await transporter.sendMail(mailOptions);
    return { statusCode: 200, headers, body: JSON.stringify({ success: true }) };
  } catch (error) {
    return { statusCode: 500, headers, body: JSON.stringify({ error: 'Failed to send email' }) };
  }
};
// netlify/functions/send-confirmation-email.js
const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Allow-Methods': 'POST, OPTIONS'
  };

  if (event.httpMethod === 'OPTIONS') {
    return { statusCode: 200, headers, body: '' };
  }

  if (event.httpMethod !== 'POST') {
    return { 
      statusCode: 405, 
      headers, 
      body: JSON.stringify({ error: 'Method Not Allowed' }) 
    };
  }

  try {
    const { to, name, year, college, department } = JSON.parse(event.body);
    
    // Validate required fields
    if (!to || !name) {
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields' })
      };
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Email configuration missing'
        })
      };
    }

    // Create transporter
    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email content
    const mailOptions = {
      from: `"CGEC E-Cell" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: 'Application Received - CGEC E-Cell',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #bd9f67, #a67c52); color: white; padding: 30px; text-align: center;">
            <h1>Welcome to CGEC E-Cell!</h1>
          </div>
          <div style="background: #f9f9f9; padding: 30px;">
            <h2>Hello ${name}! 👋</h2>
            <p>Thank you for submitting your application to join CGEC E-Cell.</p>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <h3>📋 Application Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>College:</strong> ${college}</p>
              <p><strong>Year:</strong> ${year}</p>
              <p><strong>Department:</strong> ${department}</p>
            </div>

            <p>We will review your application and contact you soon.</p>
          </div>
        </div>
      `
    };

    // Send email
    const result = await transporter.sendMail(mailOptions);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Confirmation email sent successfully'
      })
    };

  } catch (error) {
    console.error('Error sending email:', error);
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send confirmation email'
      })
    };
  }
};

const nodemailer = require('nodemailer');

exports.handler = async (event) => {
  console.log('🔵 Function triggered at:', new Date().toISOString());
  
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
    
    console.log('📧 Attempting to send email to:', to);
    console.log('👤 Name:', name);
    console.log('🏫 College:', college);

    if (!to || !name) {
      console.error('❌ Missing required fields');
      return {
        statusCode: 400,
        headers,
        body: JSON.stringify({ error: 'Missing required fields: to and name' })
      };
    }

    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('❌ Environment variables missing');
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Email configuration missing',
          details: 'EMAIL_USER or EMAIL_PASS not set'
        })
      };
    }

    console.log('✅ Environment variables found');

    const transporter = nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      },
      debug: true,
      logger: true
    });

    try {
      await transporter.verify();
      console.log('✅ Transporter verified successfully');
    } catch (verifyError) {
      console.error('❌ Transporter verification failed:', verifyError);
      return {
        statusCode: 500,
        headers,
        body: JSON.stringify({ 
          error: 'Email configuration invalid',
          details: verifyError.message
        })
      };
    }


    const mailOptions = {
      from: `"CGEC E-Cell" <${process.env.EMAIL_USER}>`,
      to: to,
      subject: 'Application Received - CGEC E-Cell',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #bd9f67, #a67c52); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0;">
            <h1>Welcome to CGEC E-Cell!</h1>
            <p>Entrepreneurship Cell</p>
          </div>
          <div style="background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px;">
            <h2>Hello ${name}! 👋</h2>
            <p>Thank you for submitting your application to join CGEC E-Cell. We're excited to have you on board!</p>
            
            <div style="background: #fff3cd; padding: 15px; border-radius: 5px; margin: 15px 0;">
              <h3>📋 Application Details:</h3>
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>College:</strong> ${college}</p>
              <p><strong>Year:</strong> ${year}</p>
              <p><strong>Department:</strong> ${department}</p>
              <p><strong>Submission Date:</strong> ${new Date().toLocaleString('en-IN')}</p>
            </div>

            <h3>📅 What's Next?</h3>
            <ul>
              <li>We will review your application</li>
              <li>You'll receive further instructions via email</li>
              <li>Follow us on social media for updates</li>
            </ul>

            <p>If you have any questions, feel free to reply to this email.</p>
          </div>
          <div style="text-align: center; margin-top: 20px; padding: 20px; color: #666;">
            <p><strong>CGEC Entrepreneurship Cell</strong></p>
            <p>Cooch Behar Government Engineering College</p>
            <p>Email: ${process.env.EMAIL_USER}</p>
          </div>
        </div>
      `
    };


    console.log('📤 Sending email...');
    const result = await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully:', result.messageId);
    console.log('✅ Response:', result.response);
    
    return {
      statusCode: 200,
      headers,
      body: JSON.stringify({ 
        success: true, 
        message: 'Confirmation email sent successfully',
        messageId: result.messageId
      })
    };

  } catch (error) {
    console.error('❌ Error in send-confirmation-email:', error);
    console.error('❌ Error stack:', error.stack);
    
    return {
      statusCode: 500,
      headers,
      body: JSON.stringify({ 
        error: 'Failed to send confirmation email',
        details: error.message
      })
    };
  }
};
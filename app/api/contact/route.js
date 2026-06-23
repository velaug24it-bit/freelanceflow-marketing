// app/api/contact/route.js
import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, subject, message } = await request.json()

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    // Create transporter with your email settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.SMTP_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })

    // Email to you (admin) - Professional display name
    const adminMailOptions = {
      from: `"FreelanceFlow Support" <${process.env.SMTP_USER}>`,
      to: process.env.ADMIN_EMAIL || process.env.SMTP_USER,
      subject: `📩 New Contact Form: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #1e293b; }
            .value { color: #334155; margin-top: 5px; padding: 10px; background: white; border-radius: 5px; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>📩 New Contact Form Submission</h2>
              <p>From FreelanceFlow Marketing Site</p>
            </div>
            <div class="content">
              <div class="field">
                <p class="label">👤 Name</p>
                <p class="value">${name}</p>
              </div>
              <div class="field">
                <p class="label">📧 Email</p>
                <p class="value">${email}</p>
              </div>
              <div class="field">
                <p class="label">📝 Subject</p>
                <p class="value">${subject}</p>
              </div>
              <div class="field">
                <p class="label">💬 Message</p>
                <div class="value">${message.replace(/\n/g, '<br>')}</div>
              </div>
              <div class="footer">
                <p>Sent from FreelanceFlow Contact Form</p>
                <p>Time: ${new Date().toLocaleString()}</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Auto-reply to the user - Professional display name
    const userMailOptions = {
      from: `"FreelanceFlow Support" <${process.env.SMTP_USER}>`,
      to: email,
      subject: 'Thank you for contacting FreelanceFlow',
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #2563eb, #7c3aed); color: white; padding: 20px; border-radius: 10px 10px 0 0; }
            .content { background: #f8fafc; padding: 20px; border-radius: 0 0 10px 10px; }
            .message-box { background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #2563eb; margin: 15px 0; }
            .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #e2e8f0; color: #64748b; font-size: 14px; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>Thank You for Contacting Us! 🙏</h2>
              <p>FreelanceFlow Support Team</p>
            </div>
            <div class="content">
              <p>Hi <strong>${name}</strong>,</p>
              <p>Thank you for reaching out to FreelanceFlow. We have received your message and our team will get back to you within <strong>24 hours</strong>.</p>
              <p><strong>Your message:</strong></p>
              <div class="message-box">
                <p><strong>Subject:</strong> ${subject}</p>
                <p><strong>Message:</strong></p>
                <p>${message.replace(/\n/g, '<br>')}</p>
              </div>
              <div class="footer">
                <p>This is an automated response. Please do not reply to this email.</p>
                <p>For urgent inquiries, contact us at support@freelanceflow.com</p>
              </div>
            </div>
          </div>
        </body>
        </html>
      `,
    }

    // Send both emails
    await Promise.all([
      transporter.sendMail(adminMailOptions),
      transporter.sendMail(userMailOptions)
    ])

    return NextResponse.json(
      { 
        success: true, 
        message: '✅ Message sent successfully! We\'ll get back to you soon.' 
      },
      { status: 200 }
    )

  } catch (error) {
    console.error('❌ Email error:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again.' },
      { status: 500 }
    )
  }
}
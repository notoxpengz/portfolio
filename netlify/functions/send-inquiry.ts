import { Handler } from '@netlify/functions'

const handler: Handler = async (event, context) => {
  // Only allow POST requests
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' })
    }
  }

  try {
    const { name, email, company, message, budget, timeline, to } = JSON.parse(event.body || '{}')

    // Basic validation
    if (!name || !email || !message) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Missing required fields: name, email, message' })
      }
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Invalid email format' })
      }
    }

    // TODO: Implement email sending logic
    // For now, this is a placeholder that would integrate with:
    // 1. Netlify Forms
    // 2. SendGrid
    // 3. Mailgun
    // 4. AWS SES
    // 5. EmailJS
    
    // Simulate email sending
    console.log('New inquiry received:', {
      name,
      email,
      company: company || 'Not provided',
      budget: budget || 'Not specified',
      timeline: timeline || 'Not specified',
      message,
      timestamp: new Date().toISOString(),
      to: to || 'hello@aishwaryajain.com'
    })

    // Example webhook integration (placeholder)
    const webhookPayload = {
      text: `New Portfolio Inquiry\n\n` +
            `**Name:** ${name}\n` +
            `**Email:** ${email}\n` +
            `**Company:** ${company || 'Not provided'}\n` +
            `**Budget:** ${budget || 'Not specified'}\n` +
            `**Timeline:** ${timeline || 'Not specified'}\n` +
            `**Message:** ${message}\n\n` +
            `**Timestamp:** ${new Date().toISOString()}`
    }

    // This would be replaced with actual email service integration
    // await sendEmail({
    //   to: 'hello@aishwaryajain.com',
    //   subject: `New Portfolio Inquiry from ${name}`,
    //   html: generateEmailHTML(webhookPayload)
    // })

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS'
      },
      body: JSON.stringify({
        success: true,
        message: 'Inquiry received successfully!'
      })
    }

  } catch (error) {
    console.error('Error processing inquiry:', error)
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: 'Internal server error',
        message: 'Failed to process inquiry'
      })
    }
  }
}

export { handler }

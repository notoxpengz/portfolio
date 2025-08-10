import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, company, message, budget, timeline } = body

    // Log the inquiry for debugging
    console.log('New inquiry received:', {
      name,
      email,
      company,
      message: message?.substring(0, 50) + '...',
      budget,
      timeline,
      timestamp: new Date().toISOString()
    })

    // Simulate email sending to hello@aishwaryajain.com
    // In a production environment, you would integrate with an email service
    // like SendGrid, Nodemailer, or similar
    console.log(`Simulated email sent to hello@aishwaryajain.com`)
    console.log(`Subject: New Portfolio Inquiry from ${name}`)
    console.log(`From: ${email}`)
    console.log(`Company: ${company || 'N/A'}`)
    console.log(`Budget: ${budget || 'Not specified'}`)
    console.log(`Timeline: ${timeline || 'Not specified'}`)
    console.log(`Message: ${message}`)

    // Return success response
    return NextResponse.json(
      { 
        message: 'Inquiry received successfully',
        timestamp: new Date().toISOString()
      },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error processing inquiry:', error)
    return NextResponse.json(
      { error: 'Failed to process inquiry' },
      { status: 500 }
    )
  }
}

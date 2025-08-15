import { NextResponse } from "next/server"

export const dynamic = "force-dynamic"

export async function POST(request: Request) {
  try {
    const { plan, email, name, company } = await request.json()

    // Mock payment processing - in production, integrate with Stripe
    const mockPaymentSession = {
      id: `cs_${Date.now()}`,
      url: `/dashboard?payment=success&plan=${plan}`,
      plan,
      amount: plan === "starter" ? 50000 : plan === "professional" ? 200000 : 1000000, // cents
      customer: {
        email,
        name,
        company,
      },
      status: "open",
      created: new Date().toISOString(),
    }

    console.log("Payment session created:", mockPaymentSession)

    return NextResponse.json({
      sessionId: mockPaymentSession.id,
      url: mockPaymentSession.url,
      message: "Payment session created successfully",
    })
  } catch (error) {
    console.error("Checkout error:", error)
    const errorMessage = error instanceof Error ? error.message : "Unknown error occurred"
    return NextResponse.json({ error: "Failed to create checkout session", message: errorMessage }, { status: 500 })
  }
}

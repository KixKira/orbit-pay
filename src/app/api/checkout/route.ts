import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

// Inicializa Stripe con tu clave secreta
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "", {
  apiVersion: "2025-09-30.clover",
});

export async function POST(request: NextRequest) {
  try {
    const { amount, fullName, email, phone } = await request.json();

    // Validaciones
    if (!amount || amount < 50) {
      // Mínimo 50 centavos ($0.50)
      return NextResponse.json(
        { error: "El monto mínimo es $0.50 USD" },
        { status: 400 }
      );
    }

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { error: "Todos los campos son requeridos" },
        { status: 400 }
      );
    }

    // Crea la sesión de checkout de Stripe
    const session = await stripe.checkout.sessions.create({
      mode: "payment", // Pago único (no suscripción)
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Pago de Servicio",
              description: `Pago realizado por ${fullName}`,
              metadata: {
                customer_name: fullName,
                customer_phone: phone,
              },
            },
            unit_amount: amount, // El monto ya viene en centavos
          },
          quantity: 1,
        },
      ],
      // Metadata adicional para tracking
      metadata: {
        customer_name: fullName,
        customer_phone: phone,
        customer_email: email,
      },
      // URLs de redirección
      success_url: `${request.headers.get(
        "origin"
      )}/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${request.headers.get("origin")}/canceled`,
      // Configuración adicional
      billing_address_collection: "auto",
      phone_number_collection: {
        enabled: true,
      },
    });

    // Devuelve el id y la url (la url permite redirigir directamente desde el cliente
    // sin depender de `stripe.redirectToCheckout`, que fue removido de Stripe.js)
    return NextResponse.json({ sessionId: session.id, url: session.url });
  } catch (error) {
    console.error("Error creating checkout session:", error);
    return NextResponse.json(
      { error: "Error creating checkout session" },
      { status: 500 }
    );
  }
}

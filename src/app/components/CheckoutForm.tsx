"use client";

import { useState } from "react";
import { CreditCard, Lock, DollarSign } from "lucide-react";

export default function CheckoutForm() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    amount: "",
    fullName: "",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    // Si es el campo de monto, solo permitir números y punto decimal
    if (name === "amount") {
      const numericValue = value.replaceAll(/[^\d.]/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else if (name === "phone") {
      // Solo permitir números en teléfono
      const numericValue = value.replaceAll(/\D/g, "");
      setFormData((prev) => ({ ...prev, [name]: numericValue }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar que el monto sea mayor a 0
      const amount = Number.parseFloat(formData.amount);
      if (Number.isNaN(amount) || amount <= 0) {
        alert("Por favor ingresa un monto válido mayor a $0");
        setLoading(false);
        return;
      }

      // Validar monto mínimo de Stripe (generalmente $0.50)
      if (amount < 0.5) {
        alert("El monto mínimo es $0.50");
        setLoading(false);
        return;
      }

      // Llamada a tu API de Next.js para crear el checkout session
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: Math.round(amount * 100), // Stripe usa centavos
          fullName: formData.fullName,
          email: formData.email,
          phone: formData.phone,
        }),
      });

      if (!response.ok) {
        throw new Error("Error al crear la sesión de pago");
      }

      // La API ahora devuelve `url` para redirigir directamente a Checkout.
      // Stripe.js eliminó `redirectToCheckout`, así que redirigimos con window.location.
      const data = await response.json();
      const sessionUrl = data?.url;

      if (sessionUrl) {
        // Redirección servidor-proveeada (recomendado)
        globalThis.location.href = sessionUrl;
        return;
      }

      // Si no hay URL en la respuesta, avisamos al usuario
      alert(
        "No se pudo iniciar el flujo de pago. Por favor inténtalo nuevamente."
      );
    } catch (error) {
      console.error("Error:", error);
      alert("Hubo un error al procesar el pago. Por favor intenta de nuevo.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="text-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Realiza tu Pago
        </h2>
        <p className="text-gray-600">
          Completa el formulario y procede al pago seguro
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Monto */}
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Monto a Enviar *
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <DollarSign className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="amount"
              name="amount"
              value={formData.amount}
              onChange={handleChange}
              required
              placeholder="0.00"
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0050d4] focus:border-transparent outline-none text-lg font-semibold text-black/50"
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Monto mínimo: $0.50 USD</p>
        </div>

        {/* Nombre Completo */}
        <div>
          <label
            htmlFor="fullName"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Nombre Completo *
          </label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            placeholder="Juan Pérez"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0050d4] focus:border-transparent outline-none text-black/50"
          />
        </div>

        {/* Correo */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Correo Electrónico *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="tu@email.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0050d4] focus:border-transparent outline-none text-black/50"
          />
        </div>

        {/* Teléfono */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Teléfono *
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="1234567890"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#0050d4] focus:border-transparent outline-none text-black/50"
          />
          <p className="text-xs text-gray-500 mt-1">
            Solo números, sin espacios ni guiones
          </p>
        </div>

        {/* Resumen */}
        {formData.amount && Number.parseFloat(formData.amount) > 0 && (
          <div className="bg-[#00abff] border border-purple-200 rounded-lg p-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-gray-700 font-medium">Monto a pagar:</span>
              <span className="text-2xl font-bold text-[#00003e]">
                ${Number.parseFloat(formData.amount).toFixed(2)}
              </span>
            </div>
            <p className="text-xs text-gray-600">
              Se procesará el pago a través de Stripe
            </p>
          </div>
        )}

        {/* Botón */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-gradient-to-r from-[#00003e] to-[#00abff] text-white py-3 rounded-lg font-semibold hover:from-[#00108b] hover:to-[#008dff] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 hover:scale-105"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              Procesando...
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              Continuar al Pago
            </>
          )}
        </button>

        <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mt-4">
          <Lock className="w-4 h-4" />
          <span>Pago 100% seguro con Stripe</span>
        </div>

        <div className="pt-4 border-t border-gray-200">
          <p className="text-xs text-gray-500 text-center">
            Al continuar, aceptas nuestros términos de servicio y política de
            privacidad. Procesado de forma segura por Stripe.
          </p>
        </div>
      </form>
    </div>
  );
}

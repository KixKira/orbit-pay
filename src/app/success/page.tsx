"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  // Avoid Next.js prerender-time useSearchParams hook issues by
  // reading search params from window.location inside a client effect.
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Read the search params on the client only (use globalThis to satisfy linters)
    const sp =
      typeof globalThis !== "undefined" && globalThis.location
        ? new URLSearchParams(globalThis.location.search)
        : null;
    const id = sp?.get("session_id") ?? null;
    setSessionId(id);

    if (id) {
      // Obtener detalles de la sesión
      fetch(`/api/session?session_id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          setSessionData(data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching session:", error);
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6">
      <div className="bg-white/95 rounded-2xl shadow-glow-brand p-8 md:p-12 max-w-md w-full backdrop-blur-lg">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fadeIn">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>

          <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            ¡Pago Exitoso!
          </h1>

          <p className="text-gray-600 mb-6 animate-fadeInUp animation-delay-200">
            Tu pago ha sido procesado correctamente. Recibirás un email de
            confirmación en breve.
          </p>

          {loading ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#008DFF' }}></div>
            </div>
          ) : sessionData ? (
            <div className="bg-gradient-brand rounded-xl p-6 mb-6 animate-fadeInUp animation-delay-400 shadow-glow">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                Detalles del Pago
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monto:</span>
                  <span className="font-bold text-purple-600 text-xl">
                    ${(sessionData.amount_total / 100).toFixed(2)} USD
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Email:</span>
                  <span className="font-medium text-gray-900">
                    {sessionData.customer_details?.email || "N/A"}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Estado:</span>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    {sessionData.payment_status === "paid"
                      ? "Pagado"
                      : sessionData.payment_status}
                  </span>
                </div>
                {sessionId && (
                  <div className="pt-3 border-t border-gray-200">
                    <p className="text-xs text-gray-500">
                      ID de transacción:{" "}
                      <span className="font-mono">
                        {sessionId.substring(0, 20)}...
                      </span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          <div className="space-y-4 animate-fadeInUp animation-delay-600">
            <Link href="/" className="block w-full bg-gradient-to-r from-brand-500 to-brand-400 text-white py-3 rounded-lg font-semibold transition-all hover:scale-105">
              Volver al Inicio
            </Link>

            <a
              href="mailto:soporte@tudominio.com"
              className="block w-full border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition"
            >
              Contactar Soporte
            </a>
          </div>

          <p className="text-sm text-gray-500 mt-6 animate-fadeInUp animation-delay-800">
            Revisa tu bandeja de entrada para los detalles completos de tu
            transacción
          </p>
        </div>
      </div>
    </div>
  );
}

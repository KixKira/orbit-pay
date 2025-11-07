"use client";

import { CheckCircle } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function SuccessPage() {
  const [sessionId, setSessionId] = useState<string | null>(null);
  const [sessionData, setSessionData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const sp =
      typeof window !== "undefined" && window.location
        ? new URLSearchParams(window.location.search)
        : null;
    const id = sp?.get("session_id") ?? null;
    setSessionId(id);

    if (id) {
      fetch(`/api/session?session_id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            setError(data.error);
          } else {
            setSessionData(data);
          }
          setLoading(false);
        })
        .catch((error) => {
          setError("No se pudo obtener la información del pago.");
          setLoading(false);
        });
    } else {
      setLoading(false);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
      <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full backdrop-blur-lg">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fadeIn">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            ¡Pago Exitoso!
          </h1>
          <p className="text-gray-600 mb-6 animate-fadeInUp animation-delay-200">
            Tu pago fue procesado correctamente. Recibirás un email de
            confirmación en breve.
          </p>

          {loading ? (
            <div className="flex justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-400"></div>
            </div>
          ) : error ? (
            <div className="bg-red-100 text-red-700 rounded-lg p-4 mb-6 animate-fadeInUp">
              {error}
            </div>
          ) : sessionData ? (
            <div className="bg-blue-50 rounded-xl p-6 mb-6 animate-fadeInUp animation-delay-400 shadow">
              <h3 className="font-semibold text-gray-900 mb-4 text-lg">
                Detalles del Pago
              </h3>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monto:</span>
                  <span className="font-bold text-blue-600 text-xl">
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
                      <span className="font-mono">{sessionId}</span>
                    </p>
                  </div>
                )}
              </div>
            </div>
          ) : null}

          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-600">
            <Link
              href="/"
              className="flex-1 bg-[#00003e] text-white py-3 rounded-lg font-semibold transition-all hover:scale-105 text-center"
            >
              Volver al Inicio
            </Link>
            <a
              href="mailto:soporte@tudominio.com"
              className="flex-1 border-2 border-gray-300 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-50 transition text-center"
            >
              Contactar Soporte
            </a>
          </div>
          <p className="text-sm text-gray-500 mt-6 animate-fadeInUp animation-delay-800">
            Revisa tu bandeja de entrada para los detalles completos de tu
            transacción.
          </p>
        </div>
      </div>
    </div>
  );
}

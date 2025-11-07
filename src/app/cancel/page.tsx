"use client";

import { XCircle } from "lucide-react";
import Link from "next/link";

export default function CancelPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white flex items-center justify-center px-6">
      <div className="bg-white/95 rounded-2xl shadow-2xl p-8 md:p-12 max-w-md w-full backdrop-blur-lg">
        <div className="text-center">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-fadeIn">
            <XCircle className="w-12 h-12 text-red-600" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4 animate-fadeInUp">
            Pago Cancelado
          </h1>
          <p className="text-gray-600 mb-6 animate-fadeInUp animation-delay-200">
            El proceso de pago fue cancelado o no se completó. Si necesitas
            ayuda, puedes intentarlo de nuevo o contactar soporte.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-fadeInUp animation-delay-400">
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
          <p className="text-sm text-gray-500 mt-6 animate-fadeInUp animation-delay-600">
            Si tienes dudas o problemas, no dudes en escribirnos.
          </p>
        </div>
      </div>
    </div>
  );
}

"use client";

import {
  CheckCircle,
  Shield,
  Zap,
  CreditCard,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import CheckoutForm from "./components/CheckoutForm";

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div
            className={`text-2xl font-bold transition-colors ${
              scrolled ? "text-[#00003E]" : "text-white"
            }`}
          >
            OrbitPay
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {[
              "inicio",
              "acerca",
              "servicios",
              "preguntas",
              "agente",
              "contacto",
            ].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`font-medium transition-colors hover:text-[#0050d4] ${
                  scrolled ? "text-gray-700" : "text-white"
                }`}
              >
                {item === "inicio"
                  ? "Inicio"
                  : item === "acerca"
                  ? "Acerca de"
                  : item === "servicios"
                  ? "Servicios"
                  : item === "preguntas"
                  ? "Preguntas"
                  : item === "agente"
                  ? "Sé un Agente"
                  : "Contacto"}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`md:hidden ${scrolled ? "text-gray-700" : "text-white"}`}
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg py-4 animate-fadeIn">
            <div className="container mx-auto px-6 flex flex-col gap-4">
              {[
                "inicio",
                "acerca",
                "servicios",
                "preguntas",
                "agente",
                "contacto",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="text-gray-700 font-medium hover:text-[#0050d4] transition-colors text-left"
                >
                  {item === "inicio"
                    ? "Inicio"
                    : item === "acerca"
                    ? "Acerca de"
                    : item === "servicios"
                    ? "Servicios"
                    : item === "preguntas"
                    ? "Preguntas"
                    : item === "agente"
                    ? "Sé un Agente"
                    : "Contacto"}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="inicio"
        className="relative overflow-hidden bg-gradient-to-br from-[#00003e] via-[#0050d4] to-[#00abff] pt-32 pb-20"
      >
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>

        {/* Floating elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#008dff] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#0050d4] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-[#00108d] rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="relative container mx-auto px-6 py-20">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-white space-y-6 animate-slideInLeft">
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Bienvenido a Orbit
              </h1>
              <p className="text-xl text-white/90">
                Brinda ayuda financiera y afecto para tu hogar.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <CheckCircle className="w-5 h-5 text-green-400" />
                  <span>Sin comisiones ocultas</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Shield className="w-5 h-5 text-blue-400" />
                  <span>100% Seguro</span>
                </div>
              </div>
              <button
                onClick={() => scrollToSection("servicios")}
                className="flex items-center gap-2 text-white hover:text-[#00abff] transition-colors pt-4"
              >
                <span>Ver más</span>
                <ChevronDown className="w-5 h-5 animate-bounce" />
              </button>
            </div>

            {/* Checkout Form Card */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 animate-slideInRight">
              <CheckoutForm />
              {/* Formulario */}
            </div>
          </div>
        </div>
      </section>

      {/* Acerca de Section */}
      <section
        id="acerca"
        className="py-20 bg-gradient-to-br from-blue-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 animate-fadeInUp">
              Acerca de OrbitPay
            </h2>
            <p className="text-center text-gray-600 mb-12 text-lg animate-fadeInUp animation-delay-200">
              9 años de trayectoria, miles de clientes asistidos,
              <br /> y un equipo de expertos dedicado a brindarle el mejor apoyo
              <br /> financiero y el servicio que usted merece.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp animation-delay-400">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-[#00003e] mb-2">
                  10,000+
                </h3>
                <p className="text-gray-600">Clientes Satisfechos</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp animation-delay-600">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-blue-600 mb-2">98%</h3>
                <p className="text-gray-600">Tasa de Éxito</p>
              </div>

              <div className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp animation-delay-800">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-cyan-600 mb-2">9+</h3>
                <p className="text-gray-600">Años de Experiencia</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg animate-fadeInUp animation-delay-1000">
              <p className="text-gray-700 text-lg leading-relaxed mb-4">
                Desde nuestros inicios, nos hemos dedicado a proporcionar
                soluciones tecnológicas de vanguardia que impulsan el
                crecimiento de empresas de todos los tamaños.
              </p>
              <p className="text-gray-700 text-lg leading-relaxed">
                Nuestro equipo de expertos trabaja incansablemente para asegurar
                que cada cliente reciba el servicio personalizado que merece,
                con la calidad y seguridad que esperan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 animate-fadeInUp">
            Nuestros Servicios
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg animate-fadeInUp animation-delay-200">
            OrBit Soluciones de Apoyo y Gestión de Valor
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="group p-8 rounded-2xl bg-gradient-to-br from-[#00003e] to-blue-500 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp animation-delay-400 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform">
                <Zap className="w-8 h-8 text-[#00003e]" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Procesamiento Rápido</h3>
              <p className="text-white/90 leading-relaxed">
                Automatiza tus procesos de negocio con nuestra tecnología de
                última generación. Reduce tiempos de espera y aumenta la
                eficiencia hasta en un 300%.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-blue-600 to-cyan-500 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp animation-delay-600 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform">
                <Shield className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Seguridad Máxima</h3>
              <p className="text-white/90 leading-relaxed">
                Protección de nivel bancario con encriptación end-to-end.
                Certificaciones ISO 27001 y cumplimiento total con GDPR para tu
                tranquilidad.
              </p>
            </div>

            <div className="group p-8 rounded-2xl bg-gradient-to-br from-emerald-400 to-green-300 text-white hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-fadeInUp animation-delay-800 text-center">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-6 mx-auto shadow-md group-hover:scale-110 transition-transform">
                <CreditCard className="w-8 h-8 text-emerald-600" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Pagos Integrados</h3>
              <p className="text-white/90 leading-relaxed">
                Acepta pagos de todo el mundo con Stripe. Soporte para más de
                135 monedas y métodos de pago locales e internacionales.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Preguntas Frecuentes Section */}
      <section
        id="preguntas"
        className="py-20 bg-gradient-to-br from-slate-50 to-blue-50"
      >
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 animate-fadeInUp">
            Preguntas Frecuentes
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg animate-fadeInUp animation-delay-200">
            Respuestas a las dudas más comunes
          </p>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                q: "¿Cómo funciona el proceso de pago?",
                a: "Nuestro proceso de pago es simple y seguro. Seleccionas el plan que mejor se adapte a tus necesidades, ingresas tu información y Stripe procesa el pago de forma segura. Recibirás acceso inmediato a tu cuenta.",
              },
              {
                q: "¿Puedo cambiar mi plan más adelante?",
                a: "Sí, puedes actualizar o cambiar tu plan en cualquier momento desde tu panel de control. Los cambios se aplican inmediatamente y se ajusta el cobro de forma proporcional.",
              },
              {
                q: "¿Ofrecen garantía de devolución?",
                a: "Sí, ofrecemos una garantía de devolución de 30 días sin preguntas. Si no estás satisfecho con nuestro servicio, te reembolsamos el 100% de tu inversión.",
              },
              {
                q: "¿Qué métodos de pago aceptan?",
                a: "Aceptamos todas las tarjetas de crédito y débito principales (Visa, Mastercard, American Express), transferencias bancarias y métodos de pago locales según tu región.",
              },
              {
                q: "¿Mis datos están seguros?",
                a: "Absolutamente. Utilizamos encriptación de nivel bancario y nunca almacenamos información sensible de tarjetas. Stripe maneja todos los datos de pago de forma segura y cumple con PCI DSS.",
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fadeInUp"
                style={{ animationDelay: `${(index + 1) * 200}ms` }}
              >
                <summary className="p-6 cursor-pointer list-none flex justify-between items-center">
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.q}
                  </h3>
                  <ChevronDown className="w-5 h-5 text-[#00003e] transition-transform group-open:rotate-180" />
                </summary>
                <div className="px-6 pb-6 text-gray-700 leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Conviértete en Agente Section */}
      <section
        id="agente"
        className="py-20 bg-gradient-to-br from-[#00003e] via-[#0050d4] to-[#00abff] text-white"
      >
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fadeInUp">
              Conviértete en Agente
            </h2>
            <p className="text-xl mb-12 text-blue-100 animate-fadeInUp animation-delay-200">
              Únete a nuestro equipo de agentes y genera ingresos ayudando a
              otros a crecer
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl animate-fadeInUp animation-delay-400">
                <div className="text-4xl font-bold mb-2">30%</div>
                <p className="text-blue-100">Comisión por venta</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl animate-fadeInUp animation-delay-600">
                <div className="text-4xl font-bold mb-2">24/7</div>
                <p className="text-blue-100">Soporte dedicado</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl animate-fadeInUp animation-delay-800">
                <div className="text-4xl font-bold mb-2">∞</div>
                <p className="text-blue-100">Potencial ilimitado</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8 text-left animate-fadeInUp animation-delay-1000">
              <h3 className="text-2xl font-bold mb-4">
                Beneficios de ser Agente:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Comisiones competitivas por cada venta realizada</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Material de marketing y capacitación gratuita</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Dashboard personalizado para tracking de ventas</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 mt-1 flex-shrink-0" />
                  <span>Bonos adicionales por metas alcanzadas</span>
                </li>
              </ul>
            </div>

            <button
              onClick={() => scrollToSection("contacto")}
              className="bg-white text-[#00003e] px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all hover:scale-105 flex items-center gap-2 mx-auto animate-fadeInUp animation-delay-1200"
            >
              Quiero ser Agente
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-gray-900 animate-fadeInUp">
            Contáctanos
          </h2>
          <p className="text-center text-gray-600 mb-16 text-lg animate-fadeInUp animation-delay-200">
            Estamos aquí para ayudarte. Escríbenos y te responderemos pronto
          </p>

          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Info */}
            <div className="space-y-8 animate-fadeInUp animation-delay-400">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-gray-900">
                  Información de Contacto
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Mail className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700">Email</div>
                      <a
                        href="mailto:soporte@tudominio.com"
                        className="text-blue-600 hover:underline"
                      >
                        soporte@tudominio.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <Phone className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700">
                        Teléfono
                      </div>
                      <a
                        href="tel:+1234567890"
                        className="text-blue-600 hover:underline"
                      >
                        +1 (234) 567-890
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors">
                    <MapPin className="w-6 h-6 text-blue-600 mt-1" />
                    <div>
                      <div className="font-semibold text-blue-700">
                        Dirección
                      </div>
                      <p className="text-black">
                        123 Calle Principal
                        <br />
                        Ciudad, País 12345
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl">
                <h4 className="font-bold text-blue-700 mb-2">
                  Horario de Atención
                </h4>
                <p className="text-black">
                  Lunes a Viernes: 9:00 AM - 6:00 PM
                  <br />
                  Sábados: 10:00 AM - 2:00 PM
                  <br />
                  Domingos: Cerrado
                </p>
              </div>
            </div>

            {/* Contact Form - Getform.io integration */}
            <form
              action="https://getform.io/f/644195b9-0fd5-4884-b44d-32ef56268ace"
              method="POST"
              encType="multipart/form-data"
              className="space-y-4 animate-fadeInUp animation-delay-600"
            >
              {/* Redirect after submit (optional) */}
              <input type="hidden" name="_redirect" value="/gracias" />
              {/* Anti-spam honeypot */}
              <input
                type="text"
                name="_gotcha"
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00003e] focus:border-transparent outline-none transition"
                  placeholder="Tu nombre"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00003e] focus:border-transparent outline-none transition"
                  placeholder="tu@email.com"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Asunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00003e] focus:border-transparent outline-none transition"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00003e] focus:border-transparent outline-none transition resize-none"
                  placeholder="Escribe tu mensaje aquí..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#00003e] text-white py-2 sm:py-3 rounded-lg font-semibold hover:bg-[#008dff] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 sm:gap-2 text-sm sm:text-base hover:scale-105"
              >
                Enviar Mensaje
                <ArrowRight className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#00003e] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">OrbitPay</h3>
              <p className="text-gray-400">
                Impulsando negocios hacia el futuro con tecnología de
                vanguardia.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Enlaces Rápidos</h4>
              <div className="space-y-2">
                <button
                  onClick={() => scrollToSection("acerca")}
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  Acerca de
                </button>
                <button
                  onClick={() => scrollToSection("servicios")}
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  Servicios
                </button>
                <button
                  onClick={() => scrollToSection("preguntas")}
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  FAQ
                </button>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <div className="space-y-2">
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  Términos de Servicio
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  Política de Privacidad
                </a>
                <a
                  href="#"
                  className="block text-gray-400 hover:text-blue-400 transition"
                >
                  Política de Cookies
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold mb-4">Síguenos</h4>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00003e] transition"
                >
                  <span className="sr-only">Facebook</span>f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00003e] transition"
                >
                  <span className="sr-only">Twitter</span>𝕏
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#00003e] transition"
                >
                  <span className="sr-only">Instagram</span>📷
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>© 2025 OrbitPay. Todos los derechos reservados.</p>
            <p className="mt-2 text-sm text-gray-400">
              Diseñado por{" "}
              <a href="#" className="text-[#008dff] hover:underline">
                Takariwa Studio
              </a>
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}

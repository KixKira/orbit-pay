# 🚀 Landing Page con Stripe - Guía Completa

Landing page moderna con animaciones, navegación suave y pagos integrados con Stripe.

## ✨ Características

- ✅ **6 Secciones completas**: Inicio, Acerca de, Servicios, Preguntas Frecuentes, Conviértete en Agente, Contacto
- ✅ **Navegación con scroll suave** entre secciones
- ✅ **Animaciones modernas** en todos los elementos
- ✅ **Integración con Stripe** para pagos
- ✅ **Diseño responsive** para móvil y desktop
- ✅ **Menú fijo** que cambia de color al hacer scroll
- ✅ **Efectos hover** y transiciones fluidas
- ✅ **Formulario de contacto** incluido

## 📦 Instalación

### 1. Crear el proyecto

```bash
npx create-next-app@latest landing-stripe --typescript --tailwind --app
cd landing-stripe
npm install @stripe/stripe-js stripe lucide-react
```

### 2. Estructura de archivos

Crea la siguiente estructura:

```
landing-stripe/
├── app/
│   ├── api/
│   │   └── checkout/
│   │       └── route.ts
│   ├── success/
│   │   └── page.tsx
│   ├── canceled/
│   │   └── page.tsx
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   └── CheckoutForm.tsx
├── .env.local
└── tailwind.config.ts
```

### 3. Configurar Stripe

1. Ve a [https://dashboard.stripe.com/](https://dashboard.stripe.com/)
2. En **Productos** → **Crear producto**, crea tus planes:
   - Básico: $29/mes
   - Pro: $79/mes
   - Enterprise: Precio personalizado
3. Copia los **Price IDs** (comienzan con `price_`)
4. Ve a **Desarrolladores** → **Claves API** y copia:
   - Publishable key (pk*test*...)
   - Secret key (sk*test*...)

### 4. Variables de entorno

Crea el archivo `.env.local`:

```env
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_tu_clave_aqui
STRIPE_SECRET_KEY=sk_test_tu_clave_aqui
```

### 5. Actualizar Price IDs

En `components/CheckoutForm.tsx`, línea ~12, reemplaza con tus Price IDs:

```typescript
const plans = {
  basic: { name: "Básico", price: 29, priceId: "price_TU_ID_BASICO" },
  pro: { name: "Pro", price: 79, priceId: "price_TU_ID_PRO" },
  enterprise: {
    name: "Enterprise",
    price: 199,
    priceId: "price_TU_ID_ENTERPRISE",
  },
};
```

### 6. Ejecutar el proyecto

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

## 🎨 Personalización

### Cambiar colores

En `app/page.tsx` y `components/CheckoutForm.tsx`, busca las clases de Tailwind:

- `blue-600` → Color principal
- `blue-600` → Color secundario
- `slate-900` → Color oscuro

### Modificar textos

Todos los textos están directamente en los componentes para fácil edición:

- **Título**: Línea ~61 de `app/page.tsx`
- **Secciones**: Cada sección tiene su propio bloque HTML
- **Footer**: Línea ~500+

### Agregar más preguntas FAQ

En la sección de Preguntas (línea ~280), agrega más objetos al array:

```typescript
{
  q: "¿Tu pregunta aquí?",
  a: "Tu respuesta aquí..."
}
```

## 🔧 Configuración Avanzada

### Webhooks de Stripe (Producción)

1. En Stripe Dashboard → **Desarrolladores** → **Webhooks**
2. Agrega endpoint: `https://tudominio.com/api/webhook`
3. Selecciona eventos: `checkout.session.completed`, `customer.subscription.created`
4. Crea `app/api/webhook/route.ts` para manejar eventos

### Modo de prueba vs Producción

**Pruebas** (actual):

- Usa tarjetas de prueba: `4242 4242 4242 4242`
- Fecha: cualquier fecha futura
- CVC: cualquier 3 dígitos

**Producción**:

1. Reemplaza las claves en `.env.local` con las de producción (`pk_live_...` y `sk_live_...`)
2. Crea productos con precios reales en Stripe
3. Activa tu cuenta de Stripe

## 🚢 Despliegue en Vercel

```bash
# Instala Vercel CLI
npm i -g vercel

# Despliega
vercel

# Agrega variables de entorno en Vercel Dashboard
# Settings → Environment Variables
```

## 📱 Secciones del Landing

1. **Inicio (Hero)**: Título llamativo + Formulario de Stripe
2. **Acerca de**: Estadísticas y descripción de la empresa
3. **Servicios**: 3 servicios principales con íconos
4. **Preguntas Frecuentes**: 5 preguntas con respuestas expandibles
5. **Conviértete en Agente**: Call-to-action para programa de afiliados
6. **Contacto**: Formulario e información de contacto

## 🎯 Funcionalidades Clave

### Navegación suave

```typescript
const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};
```

### Animaciones

- `animate-fadeInUp`: Aparece desde abajo
- `animate-slideInLeft/Right`: Desliza desde los lados
- `animate-blob`: Burbujas flotantes de fondo
- `animation-delay-X`: Escalonar animaciones

## 💡 Tips

- **Personaliza los planes**: Modifica precios y características en cada sección
- **Agrega tu logo**: Reemplaza "TuMarca" con tu logo en el nav
- **Conecta el formulario de contacto**: Usa servicios como EmailJS, SendGrid o tu backend
- **Optimiza imágenes**: Agrega imágenes reales de tu producto/servicio
- **SEO**: Actualiza meta tags en `app/layout.tsx`

## 🐛 Solución de Problemas

### Error: "Invalid API key"

- Verifica que las claves en `.env.local` sean correctas
- Reinicia el servidor de desarrollo

### Las animaciones no funcionan

- Asegúrate de tener `globals.css` y `tailwind.config.ts` actualizados
- Limpia caché: `rm -rf .next && npm run dev`

### Stripe no redirige

- Verifica que los Price IDs sean correctos
- Revisa la consola del navegador para errores

## 📞 Soporte

¿Necesitas ayuda? Contáctame con tus dudas específicas.

## 📄 Licencia

Este proyecto es de código abierto para uso personal y comercial.

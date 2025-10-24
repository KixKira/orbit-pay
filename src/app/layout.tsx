
import "../style/index.scss";

import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Finbest - Banking and Finance React Next js Template',
  description: 'Finbest - Banking and Finance React Next js Template designed for mobile banking, business consulting, bank loans, credit cards, finance, insurance, broker business, forex trading and many more..',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="description" content="Finbest - Banking and Finance React Next js Template" />
        <link rel="icon" href="favicon.ico" sizes="any" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Jost:wght@400;500;600;700;800;900&family=Kumbh+Sans:wght@400;500;600;700;800&display=swap"
        />
      </head>

      <body>{children}</body>
    </html>
  )
}

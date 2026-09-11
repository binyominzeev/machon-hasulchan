import type { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  themeColor: '#1C2B1A',
};

export const metadata: Metadata = {
  title: 'Máchon Hásulchán – Sulchán Áruch összefoglalók',
  description:
    'Szimánok áttekinthető gyűjteménye. Minden szimánhoz tömör magyar, héber és angol összefoglaló PDF, egységes szerkezetben.',
  manifest: '/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu" dir="ltr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Frank+Ruhl+Libre:wght@400;500;700&family=Inter:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="mask-icon" href="/favicon.svg" color="#1C2B1A" />
      </head>
      <body>{children}</body>
    </html>
  );
}

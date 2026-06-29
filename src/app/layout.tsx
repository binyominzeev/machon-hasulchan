import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Máchon Hásulchán – Sulchán Áruch összefoglalók',
  description:
    'Szimánok áttekinthető gyűjteménye. Minden szimánhoz tömör magyar, héber és angol összefoglaló PDF, egységes szerkezetben.',
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
      </head>
      <body>{children}</body>
    </html>
  );
}

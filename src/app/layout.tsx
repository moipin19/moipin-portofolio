import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohamad Nur Arifin — Software Engineer",
  description:
    "Senior Software Engineer specializing in React, Next.js, React Native, LitElement, accessibility, and performance.",
  icons: { 
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg"
  },
  metadataBase: new URL("https://example.com"),
  openGraph: {
    title: "Mohamad Nur Arifin — Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, React Native, LitElement, accessibility, and performance.",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Mohamad Nur Arifin — Software Engineer",
    description: "Senior Software Engineer specializing in React, Next.js, React Native, LitElement, accessibility, and performance.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-[#0a0a0a] text-[#fafafa] font-sans">
        {children}
      </body>
    </html>
  );
}

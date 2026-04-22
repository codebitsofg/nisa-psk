import type { Metadata } from "next";
import { Geist, Geist_Mono, Domine, Figtree, Playfair_Display } from "next/font/google";
import "../globals.css";
import Navigation from "../comps/Navigation";
import Footer from "../comps/Footer";
import {NextIntlClientProvider} from 'next-intl';
import {getMessages, setRequestLocale} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const domine = Domine({
  variable: "--font-domine",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "NA Psikolojik Danışmanlık ve Eğitim | Online ve Yüz Yüze Psikolojik Danışmanlık",
  description: "Online ve yüz yüze psikolojik danışmanlık hizmetleri. Türkiye ve Almanya'da psikolojik destek. Bilişsel Davranışçı Terapi (BDT) ile profesyonel psikolojik danışmanlık hizmeti.",
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
  children,
  params
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body
        className={` ${domine.variable} ${figtree.variable} ${playfairDisplay.variable} antialiased`}
      >
        <NextIntlClientProvider messages={messages} locale={locale}>
          <Navigation />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

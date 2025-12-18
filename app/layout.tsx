import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HydrationFix } from "@/components/HydrationFix";
import { NewsTicker } from "@/components/NewsTicker";
import { LanguageProvider } from "@/lib/i18n";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pan-African Educational Hub",
  description: "Learn about Pan-Africanism, History, and the Alliance of Sahel States.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col`}
        suppressHydrationWarning
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          storageKey="pan-african-theme"
        >
          <LanguageProvider>
            <HydrationFix />
            <ScrollToTop />
            <Navigation />
            {/* News Ticker - Fixed below navbar */}
            <div className="fixed top-[72px] left-0 right-0 z-40">
              <NewsTicker />
            </div>
            {/* Main content */}
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

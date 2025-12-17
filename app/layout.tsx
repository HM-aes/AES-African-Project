import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HydrationFix } from "@/components/HydrationFix";
import { NewsTicker } from "@/components/NewsTicker";

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
          <HydrationFix />
          <ScrollToTop />
          <Navigation />
          {/* News Ticker - Fixed below navbar */}
          <div className="fixed top-[72px] left-0 right-0 z-40">
            <NewsTicker />
          </div>
          {/* Main content with extra padding for both navbar and ticker */}
          <main className="flex-grow pt-10">
            {children}
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

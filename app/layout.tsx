import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navigation } from "@/components/Navigation";
import { NewsSourceBanner } from "@/components/NewsSourceBanner";
import { ConditionalFooter } from "@/components/ConditionalFooter";
import { ThemeProvider } from "@/components/theme-provider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { HydrationFix } from "@/components/HydrationFix";
import { LanguageProvider } from "@/lib/i18n";
import { SmoothScroll } from "@/components/SmoothScroll";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AES Intelligence Hub | AI-Powered News & Education Platform",
  description: "First AI Agent & LLM powered platform for news and education about the Alliance of Sahel States, from an African for Africans.",
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
            <SmoothScroll>
              <HydrationFix />
              <ScrollToTop />
              <Navigation />
              {/* News Source Banner - positioned between navbar and content */}
              <div className="pt-20">
                <NewsSourceBanner />
              </div>
              {/* Main content */}
              <main className="flex-grow">
                {children}
              </main>
              <ConditionalFooter />
            </SmoothScroll>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}

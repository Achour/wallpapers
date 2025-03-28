import "./globals.css";
import { Inter } from "next/font/google";
import Header from "../components/layout/header";
import { Suspense } from "react";
import Hero from "@/components/layout/hero";

import { ThemeProvider } from "@/components/theme-provider";

export const metadata = {
  title: "Wallpapers Web App",
  description: "Created by Achour Meguenni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense>
            <Header />
            <Hero />

            <div className="container my-12">{children}</div>
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}

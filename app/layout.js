import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Image Gallery",
  description: "Created by Achour Meguenni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Navbar />
        <div className="container-wrapper">
          <div className="container mx-auto max-w-[1000px]">{children}</div>
        </div>
      </body>
    </html>
  );
}

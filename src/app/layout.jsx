import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
export const metadata = {
  title: "Chronicle - By Hrushi",
  description: "Figr.design Frontend Assignment.",
  image: "/og.png",
  icons: "/favicon.ico",
  noIndex: false,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}

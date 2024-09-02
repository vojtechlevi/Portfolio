import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "vl.codes",
  description: "Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.className} bg-[#eeeeee] dark:bg-background-dark text-black dark:text-white transition-color
            duration-400
            ease-in-out`}
      >
        {children}
      </body>
    </html>
  );
}

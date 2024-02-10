import { Inter } from "next/font/google";
import "./globals.css";
import Header from './Layouts/Header';
import Footer from './Layouts/Footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Yellow Kitchen",
  description: "Build with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ inter.className }>
        <Header />
        <main>
          { children }
        </main>
        <Footer />
      </body>
    </html>
  );
}

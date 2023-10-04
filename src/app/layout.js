import NavBar from "@/components/NavBar";
import "./globals.css";
import { Roboto } from "next/font/google";
import Footer from "@/components/Footer";
import { CartProvider } from "@/context/cart-contex";

const inter = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata = {
  title: "Order Your Snacks",
  description: "Food Ordering app for our college canteen.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[90vw] relative mx-auto">
        <CartProvider>
          <NavBar />
          {children}
          <Footer />
          </CartProvider>
        </div>
      </body>
    </html>
  );
}

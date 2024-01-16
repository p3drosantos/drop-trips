import { NextAuthProvider } from "@/providers/auth";
import "./globals.css";
import { Poppins } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ToastProvider from "@/providers/toast";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "Drop Trips",
  description: "Sistema de reservas de viagens",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="flex flex-col h-screen">
          <NextAuthProvider>
            <ToastProvider>
              <div className="h-[94px]">
                <Header />
              </div>
              <div className="flex-1"> {children}</div>
              <Footer />
            </ToastProvider>
          </NextAuthProvider>
        </div>
      </body>
    </html>
  );
}

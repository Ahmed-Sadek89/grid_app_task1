import { Metadata } from "next";
import Header from "@/components/Header/Header";
import Pagination from "@/components/Pagination/Pagination";
import "./globals.css";

export const metadata: Metadata = {
  title: "GRID APPS | Task1",
  description: "GRID APPS Task1 using next14, tailwindCSS, Drag&Drop(@hello-pangea/dnd)",
  icons: [
    {
      url: "/logo.png",
      href: "/logo.png"
    }
  ]
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar">
      <body dir="rtl">
        <Header />
        <main className="min-h-[calc(100vh-6rem)]">
          {children}
        </main>
        <Pagination />
      </body>
    </html>
  );
}

import { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/Layout/Layout";

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
      <body dir="rtl" className="bg-custom-gray">
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}

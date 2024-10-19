
import { Outfit } from "next/font/google";
import "./globals.css";
import Providers from "@/context/Providers";
import Header from "@/components/others/header/Header";
import BreadcrumbNav from "@/components/others/common/BreadcrumbNav";
const outfit = Outfit({
  subsets: ["latin"],
});

export const metadata = {
  title: "Grocify",
  description: "The Best eSHop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
   
    <html lang="en">
      <body className={`${outfit.className} antialiased`}>
        <Providers>
        <Header/>
        <BreadcrumbNav/>
        {children}
        </Providers>
      </body>
    </html>
  );
}

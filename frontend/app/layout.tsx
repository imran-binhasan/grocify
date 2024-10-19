import { Outfit } from "next/font/google";
import "./globals.css";
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
        {children}
      </body>
    </html>
  );
}

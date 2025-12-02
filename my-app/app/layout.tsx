import type { Metadata } from "next";
import { Poppins} from "next/font/google";
import "./globals.css";
import ResponsiveNav from "@/components/Home/Navbar/ResponsiveNav";
import Provider from "@/components/Hoc/Provider";
import Footer from "@/components/Home/Footer/Footer";

const font = Poppins({
  weight:['100','200','300','400','500','600','700','800','900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Landing Page",
  description: "Landing Page using Next.js and Tailwind ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${font.className} antialiased`}>
          <Provider>
            <ResponsiveNav />
            {children}
            <Footer />
          </Provider>
      </body>
    </html>
  );
}

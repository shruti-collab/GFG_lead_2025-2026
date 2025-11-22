import { Analytics } from "@vercel/analytics/next"
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/theme-provider";
import { Poppins } from "next/font/google";
import type { Metadata } from "next";


const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "GFG Campus Body GCET",
  description:
    "Meet the team — GFG Campus Body GCET. Innovation • Collaboration • Growth",
  keywords: [
    "GFG",
    "GeeksforGeeks",
    "GCET",
    "Campus Body",
    "Technology",
    "Students",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${poppins.variable}`}
      suppressHydrationWarning
    >
      <body className="poppins">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}

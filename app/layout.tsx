import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@radix-ui/themes/styles.css";
import { Theme, Container } from "@radix-ui/themes";
import NavBar from "./components/NavBar";
import "./globals.css";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"] });

export const metadata: Metadata = {
  title: "Matthew Young",
  description: "Matthew Young's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme appearance="dark">
          <Container className="pl-5 pt-10" size="2">
            <NavBar />
            {children}
            <Footer />
          </Container>
        </Theme>
      </body>
    </html>
  );
}

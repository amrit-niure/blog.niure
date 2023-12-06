import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Public_Sans } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "@/components/mode-toggle";
import NavItem from "@/components/nav-item";

const inter = Inter({ subsets: ["latin"], weight: ['400','500','600'] });
const public_sans = Public_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amrit Niure ",
  description: "Portfolio and blog posts.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen bg-background text-foreground ${public_sans.className}`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <div className="max-w-2xl mx-auto py-10 px-4">
            <header>
              <div className="flex items-center justify-between pb-8">
              <ModeToggle />
                <nav className="ml-auto text-md flex font-medium space-x-4 ">
                  {/* <Link href="/">Home</Link>
                  <Link href="/posts">Posts</Link> */}
                  <NavItem name={'Home'} path={'/'} />
                  <NavItem name={'Posts'} path={'/posts'} />
                </nav> 
              </div>
            </header>
            <main>{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import Navbar from "@/components/ui/navbar";
 
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
  return (
    <>
      <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`} suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </>
  )
}
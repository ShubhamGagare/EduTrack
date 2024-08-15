import "./globals.css";
import type { Metadata } from "next";
//import { Inter } from "next/font/google";
import { Providers } from "../providers";
import AppbarClient from "../components/clients/AppbarClient";
import RecoidContextProvider from "./recoilContextProvider";
import { Open_Sans } from "next/font/google"
//const inter = Inter({  subsets: ['latin'], display: 'swap', adjustFontFallback: false });
const openSans = Open_Sans({
  subsets:['latin'],
  weight:'400'
})
export const metadata: Metadata = {
  title: "EduTrack",
  description: "School information system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en" className="violet">
      <Providers>
      <RecoidContextProvider>
        <body className={openSans.className} >
    

          {children}</body>
        </RecoidContextProvider>
      </Providers>
    </html>
  );
}
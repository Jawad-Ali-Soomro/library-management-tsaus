import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import ReduxProvider from "@/store/reduxProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Library Management System",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ReduxProvider>
          <Toaster
            containerStyle={{ textTransform: "capitalize", fontWeight: 600 }}
            position="top-right"
          />
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}

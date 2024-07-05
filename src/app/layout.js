import { Inter, Saira } from "next/font/google";
import "./globals.css";
import LayoutComps from "@/components/layoutComps";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });
const saira = Saira({ subsets: ["latin"], weights: ["400", "700"] });

export const metadata = {
  title: "Radiant Assistance",
  description: "Generated by Kognitiv Technologies",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        </Head>
      <body className={saira.className}>
        <LayoutComps>
          {children}
        </LayoutComps>
      </body>
    </html>
  );
}

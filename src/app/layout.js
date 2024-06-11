import { DM_Sans, Poppins } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dmSans.className}>
        <div className="min-h-[100vh] flex flex-col justify-between">
         <div className="pt-[10vh] py-7 my-9">{children}</div>        </div>
      </body>
    </html>
  );
}
import "./globals.css";
import Navbar from "./components/Navbar";
import WhatsAppButton from "./components/WhatsApp";

export const metadata = {
  title: "JSoft Technologies",
  description: "IT, Security & Creative Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <WhatsAppButton />
        <div className="pt20">{children}</div>
      </body>
    </html>
  );
}
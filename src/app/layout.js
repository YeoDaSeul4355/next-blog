import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Create Next App Blog",
  description: "Let's create a blog with next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className="pink">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}

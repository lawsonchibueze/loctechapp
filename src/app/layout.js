import Header from "../components/Header";
import "./globals.css";
import Providers from "./Providers";

export const metadata = {
  title: "Loctech Training Institute",
  description:
    "Web development training for beginners and professionals Cisco Training and Certification Excel Training and Certification Data Science Training and Certification Python Training and Certification Java Training and Certification Web Development Training and Certification Digital Marketing Training and Certification",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}

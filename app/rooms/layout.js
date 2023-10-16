import Footer from "../components/Footer";
import Header from "../components/Navbar/Header";

export default function RoomLayout({
    children, // will be a page or nested layout
  }) {
    return (
      <section>
        {children}
      </section>
    )
  }
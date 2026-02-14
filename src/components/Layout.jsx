import Navbar from "./Navbar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main className="section">{children}</main>
      <Footer />
    </>
  );
}

export default Layout;

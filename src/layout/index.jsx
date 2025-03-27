import Navigation from "./Navigation";
import Footer from "./Layout";

const Layout = ({ children, setCurrentPage }) => {
  return (
    <div>
      <Navigation setCurrentPage={setCurrentPage} />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;

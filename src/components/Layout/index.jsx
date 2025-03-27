import Footer from "./Footer.jsx";
import Navigation from './Navigation.jsx';

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

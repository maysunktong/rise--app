import TrainerModal from "../Modals/TrainerModal";
import UserModal from "../Modals/UserModal";
import Banner from "./Banner";
import Footer from "./Footer";
import Navigation from "./Navigation";
import styles from "./layout.module.css";

const Layout = ({ children, setCurrentPage }) => {
  return (
    <div>
      <Banner />
      <div className={styles.layout}>
        <div>
          <UserModal />
          <Navigation setCurrentPage={setCurrentPage} />
          <TrainerModal />
        </div>
        <div>{children}</div>
      </div>
      <Footer />
    </div>
  );
};
export default Layout;

import Subscription from "../../pages/Subscription";
import TrainerModal from "../Modals/TrainerModal";
import UserModal from "../Modals/UserModal";
import Banner from "./Banner";
import Footer from "./Footer";
import styles from "./layout.module.css";
import Navigation from "./Navigation";

const Layout = ({ children, setCurrentPage }) => {
  return (
    <div className={styles.dashboard}>
      <Banner />
      <div className={styles.dashboardWrapper}>
        <div className={styles.dashboardContent}>
          <div className={styles.dashboardMenu}>
            <UserModal />
            <Navigation setCurrentPage={setCurrentPage} />
            <TrainerModal />
            <Subscription />
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

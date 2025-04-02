import SubscriptionWidget from "../SubscriptionWidget";
import TrainerWidget from "../TrainerWidget";
import UserPanel from "../UserPanel";
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
            <UserPanel />
            <Navigation setCurrentPage={setCurrentPage} />
            <TrainerWidget />
          </div>
          <div className={styles.content}>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

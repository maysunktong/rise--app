import Subscription from "../../pages/Subscription";
import Banner from "./Banner";
import Footer from "./Footer";
import styles from "./layout.module.css";
import Navigation from "./Navigation";
import UserPanel from '../UI/UserPanel';
import TrainerWidget from '../UI/TrainerWidget';
import SubscriptionWidget from '../UI/SubscriptionWidget';

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
            <SubscriptionWidget />
          </div>
          <div>{children}</div>
        </div>
        <Footer />
      </div>
    </div>
  );
};
export default Layout;

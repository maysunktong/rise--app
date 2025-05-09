import UserPanel from "../UserPanel";
import Banner from "./Banner";
import Footer from "./Footer";
import styles from "./layout.module.css";
import Navigation from "./Navigation";

const Layout = ({ children, setCurrentPage }) => {
  return (
    <div>
      <div className={styles.dashboard}>
        <div className={styles.dashboardWrapper}>
          <div className={styles.dashboardContent}>
            <div className={styles.dashboardMenu}>
              <Banner />
              <UserPanel />
              <Navigation setCurrentPage={setCurrentPage} />
            </div>
            <div className={styles.content}>{children}</div>
          </div>
          <Footer />
        </div>
      </div>
      <div className={styles.dashboardMobile}>
        {children}
        <Navigation setCurrentPage={setCurrentPage} />
      </div>
    </div>
  );
};
export default Layout;

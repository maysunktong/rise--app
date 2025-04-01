import Logo from "../../../../public/assets/logo/logo.svg";
import styles from "./banner.module.css";

const Banner = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={Logo} alt="" width={100} />
    </div>
  );
};
export default Banner;

import styles from "./banner.module.css"
import Logo from "../../../assets/logo.svg"

const Banner = () => {
  return (
    <div className={styles.bannerImg}>
      <img src={Logo} alt="" width={100} />
    </div>
  );
};
export default Banner;

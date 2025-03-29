import UserImg from "../../../assets/user.svg";
import styles from "./userModal.module.css";

const UserPanel = () => {
  return (
    <div className={styles.userModal}>
      <div className={styles.userImgContainer}>
        <img src={UserImg} alt="user image" width={80} />
      </div>
      <p className={styles.userName}>Jane Donut</p>
      <p>Membership</p>
    </div>
  );
};
export default UserPanel;

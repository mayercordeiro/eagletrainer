// CSS
import styles from "./ContainerApp.module.css";

const ContainerApp = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default ContainerApp;

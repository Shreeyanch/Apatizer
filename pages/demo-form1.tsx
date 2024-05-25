import type { NextPage } from "next";
import FrameComponent from "../components/frame-component";
import styles from "./demo-form1.module.css";

const DemoForm1: NextPage = () => {
  return (
    <div className={styles.demoForm2}>
      <FrameComponent />
      <div className={styles.poweredByParent}>
        <div className={styles.poweredBy}>powered by</div>
        <img
          className={styles.letterLogo2}
          alt=""
          src="/letter-logo-2@2x.png"
        />
      </div>
    </div>
  );
};

export default DemoForm1;

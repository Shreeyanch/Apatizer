import type { NextPage } from "next";
import styles from "./frame-component.module.css";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div className={[styles.newcalloutWrapper, className].join(" ")}>
      <div className={styles.newcallout}>
        <div className={styles.newcalloutChild} />
        <div className={styles.newcalloutItem} />
        <img className={styles.vectorIcon} alt="" src="/vector1.svg" />
        <div className={styles.youWillReceive}>
          You will receive a code via SMS. Kindly show it to the staff to
          receive your free appetizer.
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;

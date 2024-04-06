import Link from "next/link";
import styles from "./Slide.module.css";
import { NextButton } from "./NextButton";

interface Props {
  current: string;
  prev?: string;
  next?: string;
}

export function Slide(props: Props) {
  return (
    <div className={styles.component}>
      <div className={styles.layout}>
        <div className={styles.step}>{props.current}</div>
      </div>
      {props.prev && (
        <Link className={styles.prev} href={"?step=" + props.prev}>
          PREV
        </Link>
      )}
      {props.next && <NextButton next={props.next} />}
    </div>
  );
}

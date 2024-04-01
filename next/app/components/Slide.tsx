import Link from "next/link";
import styles from "./Slide.module.css";

interface Props {
  current: string;
  prev?: string;
  next?: string;
}

export function Slide(props: Props) {
  console.log(props);
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
      {props.next && (
        <Link className={styles.next} href={"?step=" + props.next}>
          NEXT
        </Link>
      )}
    </div>
  );
}

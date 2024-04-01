import styles from "./Slide.module.css";

interface Props {
  step: string;
}

export function Slide(props: Props) {
  return (
    <div className={styles.component}>
      <div>{props.step}</div>
    </div>
  );
}

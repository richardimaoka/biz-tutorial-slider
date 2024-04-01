import { Slide } from "./components/Slide";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.component}>
      <Slide step="1a" />
    </main>
  );
}

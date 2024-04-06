import { Slide } from "./components/Slide";
import { SlideServerContainer } from "./components/SlideServerContainer";
import styles from "./page.module.css";

type Step = {
  current: string;
  next?: string;
  prev?: string;
};

interface Props {
  searchParams: {
    step?: string;
  };
}

export default function Page(props: Props) {
  return (
    <main className={styles.component}>
      <SlideServerContainer />
    </main>
  );
}

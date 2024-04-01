import { Slide } from "./components/Slide";
import styles from "./page.module.css";

type Step = {
  current: string;
  next?: string;
  prev?: string;
};

const steps: Step[] = [
  { current: "1a", next: "1b" },
  { current: "1b", next: "1c", prev: "1a" },
  { current: "1c", /*       */ prev: "1b" },
];

interface Props {
  searchParams: {
    step?: string;
  };
}

export default function Page(props: Props) {
  const step =
    steps.find((s) => s.current === props.searchParams.step) || steps[0];

  return (
    <main className={styles.component}>
      <Slide current={step.current} next={step.next} prev={step.prev} />
    </main>
  );
}

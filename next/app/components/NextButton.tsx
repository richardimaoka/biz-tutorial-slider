"use client";
import Link from "next/link";
import styles from "./NextButton.module.css";
import { useEffect, useState } from "react";

interface Props {
  next: string;
}

export function NextButton(props: Props) {
  const [link, setLink] = useState(true);

  useEffect(() => {
    // after first render, swap the link with the animation button
    setLink(false);
  }, [link]);

  return link ? (
    <Link className={styles.next} href={"?step=" + props.next}>
      NEXT
    </Link>
  ) : (
    <button className={`${styles.next} ${styles.button}`}>NEXT</button>
  );
}

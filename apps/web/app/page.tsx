"use client"
import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {

  const handleClick = async () => {
    window.location.href = 'http://localhost:3001/api/v1/auth/google';
  }

  return (
    <div className={styles.main}>
      <button
      onClick={() => handleClick()}
      >Sign in with Google</button>
      <Link href="/auth/signin">Sign in</Link>
    </div>
  )
}

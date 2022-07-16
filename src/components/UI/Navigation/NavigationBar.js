import React from "react";

import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";
import SignIn from "../../Authentication/SignIn/SignIn";
import SignOut from "../../Authentication/SignOut/SignOut";

const NavigationBar = () => {
  const authStore = useSelector((state) => state.authStore);
  const isUserSignedIn = authStore.isUserSignedIn;

  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.logo}>CinemaVerse</h2>

        <div className={styles.nav}>
          {isUserSignedIn === false && <SignIn />}
          {isUserSignedIn === true && <SignOut />}
        </div>
      </header>
    </section>
  );
};

export default NavigationBar;

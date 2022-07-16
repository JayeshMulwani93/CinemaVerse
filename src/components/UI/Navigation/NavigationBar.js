import React from "react";
import SignIn from "../../SignIn/SignIn";
import Signout from "../../SignOut/SignOut";
import styles from "./Navigation.module.css";
import { useSelector } from "react-redux";

const NavigationBar = () => {
  const authStore = useSelector((state) => state.authStore);
  const isUserSignedIn = authStore.isUserSignedIn;

  return (
    <section>
      <header className={styles.header}>
        <h2 className={styles.logo}>CinemaVerse</h2>

        <div className={styles.nav}>
          {isUserSignedIn === false && <SignIn />}
          {isUserSignedIn === true && <Signout />}
        </div>
      </header>
    </section>
  );
};

export default NavigationBar;

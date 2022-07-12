import React from "react";
import { useContext } from "react";
import UserContext from "../../../store/user-context";
import SignIn from "../../SignIn/SignIn";
import Signout from "../../SignOut/SignOut";
import styles from "./Navigation.module.css";

const NavigationBar = () => {
  const context = useContext(UserContext);
  const isUserSignedIn = context.isUserSignedIn;

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

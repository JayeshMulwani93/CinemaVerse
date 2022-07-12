import React, { useContext } from "react";
import { authentication } from "../../api/FirebaseSignInConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import UserContext from "../../store/user-context";
import Button from "../UI/Button/Button";

const SignIn = () => {
  const context = useContext(UserContext);

  const signInHandler = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(authentication, googleProvider)
      .then((result) => {
        context.updateUserId(result.user.email);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Button onClick={signInHandler}>SignIn With Google</Button>
    </div>
  );
};

export default SignIn;

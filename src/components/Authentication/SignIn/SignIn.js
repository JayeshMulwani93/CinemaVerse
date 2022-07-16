import React from "react";
import { authentication } from "../../../api/FirebaseSignInConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { signInActionThunk } from "../../../store/auth/user-actions";

const SignIn = () => {
  const dispatch = useDispatch();

  const signInHandler = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(authentication, googleProvider)
      .then((result) => {
        dispatch(signInActionThunk(result.user.email));
      })
      .catch((error) => {});
  };
  return (
    <div>
      <Button onClick={signInHandler}>Sign-In With Google</Button>
    </div>
  );
};

export default SignIn;

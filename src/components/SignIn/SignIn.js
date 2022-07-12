import React, { useContext } from "react";
import { authentication } from "../../api/FirebaseSignInConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import UserContext from "../../store/user-context";

const SignIn = () => {
  const context = useContext(UserContext);

  const signInHandler = () => {
    const googleProvider = new GoogleAuthProvider();

    signInWithPopup(authentication, googleProvider)
      .then((result) => {
        console.log(result.user.email);
        console.log("Updating context now!");
        console.log("Is User Signed In frm handler", context.isUserSignedIn);
        context.updateUserId(result.user.email);
      })
      .catch((error) => {});
  };
  return (
    <div>
      <button onClick={signInHandler}>Signin With Google</button>
    </div>
  );
};

export default SignIn;

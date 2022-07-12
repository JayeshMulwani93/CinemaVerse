import React, { useContext } from "react";
import UserContext from "../../store/user-context";
import Button from "../UI/Button/Button";

const SignOut = () => {
  const context = useContext(UserContext);

  const signoutHandler = () => {
    context.updateUserId("");
  };
  return (
    <div>
      <Button onClick={signoutHandler}>Sign Out</Button>
    </div>
  );
};

export default SignOut;

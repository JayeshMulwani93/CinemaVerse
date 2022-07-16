import React from "react";
import Button from "../UI/Button/Button";
import { useDispatch } from "react-redux";
import { authSliceActions } from "../../store/user-slice";

const SignOut = () => {
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(authSliceActions.signOut());
  };
  return (
    <div>
      <Button onClick={signoutHandler}>Sign Out</Button>
    </div>
  );
};

export default SignOut;

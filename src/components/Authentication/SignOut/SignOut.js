import React from "react";
import Button from "../../UI/Button/Button";
import { useDispatch } from "react-redux";
import { signOutActionThunk } from "../../../store/auth/user-actions";

const SignOut = () => {
  const dispatch = useDispatch();

  const signoutHandler = () => {
    dispatch(signOutActionThunk());
  };
  return (
    <div>
      <Button onClick={signoutHandler}>Sign Out</Button>
    </div>
  );
};

export default SignOut;

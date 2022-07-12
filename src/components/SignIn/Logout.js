import React, { useContext } from "react";
import UserContext from "../../store/user-context";

const Logout = () => {
  const context = useContext(UserContext);

  const logoutHandler = () => {
    context.updateUserId("");
  };
  return (
    <div>
      <button onClick={logoutHandler}>Logout!</button>
    </div>
  );
};

export default Logout;

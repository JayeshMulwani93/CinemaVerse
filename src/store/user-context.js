import React, { useState } from "react";

const defaultValue = {
  userId: "",
  setUserId: () => {},
};

const UserContext = React.createContext(defaultValue);

export const UserContextProvider = (props) => {
  const [userId, setUserId] = useState("jayeshmulwani93");
  return (
    <UserContext.Provider
      value={{
        userId: userId,
        setUserId: setUserId,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

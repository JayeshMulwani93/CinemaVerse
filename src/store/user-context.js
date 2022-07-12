import React, { useState } from "react";

const defaultValue = {
  userId: "",
  updateUserId: () => {},
  isUserSignedIn: () => false,
};

const getPlainUserIdWithoutSpecialChars = (inputUserId) => {
  return inputUserId.replace(/[^a-zA-Z0-9 ]/g, "");
};

const UserContext = React.createContext(defaultValue);

export const UserContextProvider = (props) => {
  const storedUserId = localStorage.getItem("userId");
  const [userId, setUserId] = useState(storedUserId);

  let isSignedIn = false;
  if (userId && userId != null && userId.length > 0) {
    isSignedIn = true;
  }

  const updateUserId = (inputUserId) => {
    const updatedUserId = getPlainUserIdWithoutSpecialChars(inputUserId);
    setUserId(updatedUserId);
    localStorage.setItem("userId", updatedUserId);
  };

  return (
    <UserContext.Provider
      value={{
        userId: userId,
        updateUserId: updateUserId,
        isUserSignedIn: isSignedIn,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;

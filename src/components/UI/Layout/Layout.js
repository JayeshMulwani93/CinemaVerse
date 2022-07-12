import React from "react";
import NavigationBar from "../Navigation/NavigationBar";

const Layout = (props) => {
  return (
    <React.Fragment>
      <NavigationBar />
      {props.children}
    </React.Fragment>
  );
};

export default Layout;

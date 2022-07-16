import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import HomePage from "./pages/Home/HomePage";
import Layout from "./components/UI/Layout/Layout";
import { useDispatch } from "react-redux";
import { signInActionThunk } from "./store/auth/user-actions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const localUserId = localStorage.getItem("userId");
    if (localUserId && localUserId !== null && localUserId.length > 0) {
      dispatch(signInActionThunk(localUserId));
    }
  });

  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}

export default App;

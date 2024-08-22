import React, { useEffect } from "react";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { useDispatch, useSelector } from "react-redux";
import { login, logout, selectUser } from "./features/userSlice";
import ProfileScreen from "./screens/ProfileScreen";

function App() {
  const user = useSelector(selectUser);

  // dispatch object
  const dispatch = useDispatch();

  useEffect(() => {
    // setting up listener, if we unmount, we dont need to duplicate a listen, just detatch old one and attatch new one
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        // Logged in
        dispatch(
          login({
            uid: userAuth.uid,
            email: userAuth?.email,
          })
        );
      } else {
        // Logged out
        dispatch(logout());
      }
    });

    return unsubscribe;
  }, [dispatch]); // dependency

  return (
    <div className="app">
      <Router>
        <Routes>
          <Route path="/" element={!user ? <LoginScreen /> : <HomeScreen />} />
          <Route
            path="/profile"
            element={user ? <ProfileScreen /> : <Navigate to="/" />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

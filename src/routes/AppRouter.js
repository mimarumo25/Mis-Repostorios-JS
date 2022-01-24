import { getAuth, onAuthStateChanged } from "@firebase/auth";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { login } from "../actions/loginAction";
import Login from "../components/user/Login";
import Register from "../components/user/Register";
import { PrivateRoute } from "./PrivateRoutes";
import { PublicRoute } from "./PublicRoutes";
import {DashboardRoutes} from './DashboardRoutes'
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";


const AppRouter = () => {
  const dispatch = useDispatch();

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, async(user) => {
      if (user?.uid) {
        const querySnapshot = await getDocs(collection(db, "user"));       
        const users = [];
         querySnapshot.forEach((doc) => {
            users.push({
                ...doc.data()
            })
           
        });
        const userGit = users.find(u => u.id === user.uid);
        dispatch(login(user.uid, user.displayName,userGit.usergithub));
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });
  }, [dispatch,isLoggedIn]);
  return (
    <Router>
      <Routes>
      
        <Route
          path="/login"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Login isAuthenticated={isLoggedIn}/>
            </PublicRoute>
          }
        />

        <Route
          path="/register"
          element={
            <PublicRoute isAuthenticated={isLoggedIn}>
              <Register />
            </PublicRoute>
          }
        /> 
                
        <Route
          path="/*"
          element={
            <PrivateRoute isAuthenticated={isLoggedIn}>
              <DashboardRoutes/>
            </PrivateRoute>
          }
        />
      </Routes>
     
    </Router>
  );
};

export default AppRouter;

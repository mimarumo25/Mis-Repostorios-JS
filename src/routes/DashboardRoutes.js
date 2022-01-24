import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from '../components/Home';


export const DashboardRoutes = () => {
  
  return (
    <div>
      <Routes>
      <Route exact path="/*" element={<Home/>}/>        
      </Routes>
    </div>
  );
};



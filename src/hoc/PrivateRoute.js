import React, { useState } from 'react';
import { Outlet, Navigate } from 'react-router-dom';
const PrivateRoute = () => {
  const [user] = useState(JSON.parse(localStorage.getItem('isLogin') || '{}'));

  return <>{user.isLogin ? <Outlet /> : <Navigate to="/login" />}</>;
};

export default PrivateRoute;

import React, { useContext } from 'react';
import { Navigate, useLoaderData, useLocation } from 'react-router-dom';
import { AuthContext } from '../Context/AuthProvider';
import { CircularProgress } from '@mui/material';

const PrivateRoute = ({children}) => {
  const {user, loading} = useContext(AuthContext);
  const location = useLocation();
  const users = useLoaderData();
  const {role} = users;
  if(loading){
      return  <CircularProgress variant="determinate" value={100} />
  }

  if(!user){
      return <Navigate to="/login" state={{from: location}} replace></Navigate>
  }
  return children;
  };

export default PrivateRoute;
import React from 'react';
import { useGetExpertQuery } from '../API/ExpertApi';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';



export default function AllExperts() {
    
const {data ,isError  , isSuccess , isLoading , error} = useGetExpertQuery();
const activeClass = "text-white bg-indigo border-white";
// console.log(data)
  if (isLoading){
    return <p>Loading...</p>
  }
  if (isError){
    return <p>Error...</p>
  }
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
      <TableCell ><Typography  fontWeight="bold"
        fontSize="35px"
        textAlign={'center'}> All Expertise List</Typography></TableCell>
        <TableRow>
          <TableCell >ID</TableCell>
          <TableCell align="right">User Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">User Role</TableCell>
     
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((user) => (
          <TableRow
            key={user._id}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {user?.role === 'Expertise' && user._id}
            </TableCell>
            <TableCell align="right">{user?.role === 'Expertise' && user.user}</TableCell>
            <TableCell align="right">{user?.role === 'Expertise' && user.email}</TableCell>
            <TableCell align="right">{user?.role === 'Expertise' &&  user.role}</TableCell>
           
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}
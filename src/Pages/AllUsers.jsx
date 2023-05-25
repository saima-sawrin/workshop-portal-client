import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useGetExpertQuery } from '../API/ExpertApi';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';



export default function AllUsers() {
    
const {data ,isError  , isSuccess , isLoading , error} = useGetExpertQuery();
const [users , setUsers] = React.useState([])

const activeClass = "text-white bg-indigo border-white";
// console.log(data)
  if (isLoading){
    return <p>Loading...</p>
  }
  if (isError){
    return <p>Error...</p>
  }


  const handleDelete = id => {
    const proceed = window.confirm('Are you sure ,you want to cancel this order')
    if (proceed) {
        fetch(`https://server-eight-delta.vercel.app/users/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert(' successfully deleted')
                    const remaining = users.filter(user => user._id !== id)
                    setUsers(remaining);
                  
                }
            })
            .catch( e => {
              alert(e)
            
          });
    }
  }
  
  return (
    <TableContainer component={Paper}>
    <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
      <TableHead>
      <TableCell ><Typography  fontWeight="bold"
        fontSize="35px"
        textAlign={'center'}> All Users List</Typography></TableCell>
        <TableRow>
          <TableCell >ID</TableCell>
          <TableCell align="right">User Name</TableCell>
          <TableCell align="right">Email</TableCell>
          <TableCell align="right">User Role</TableCell>
          <TableCell align="right">Delete</TableCell>
     
        </TableRow>
      </TableHead>
      <TableBody>
        {data.map((user ) => (
          <TableRow
            key={user._id}
            handleDelete={ handleDelete}
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
          >
            <TableCell component="th" scope="row">
              {user._id}
            </TableCell>
            <TableCell align="right">{user.user}</TableCell>
            <TableCell align="right">{user.email}</TableCell>
            <TableCell align="right">{user.role}</TableCell>
            <TableCell align="right"><Button   onClick={() => handleDelete(user._id)} >Delete</Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </TableContainer>
);
}
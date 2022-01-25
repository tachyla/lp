import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Data from "./students-data";

const studentArray = Data.data;

// const rows = [];
//  const getValues = function(arr){
//     for(let i = 0; i < arr.length; i++){
//         let studentValues = (Object.values(arr[i]));
//         //console.log(studentValues);
//         rows.push([studentValues]);
//     }
//         return rows;
// }
// getValues(studentArray); //returns rows with student props in an array

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow >
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Application Status</TableCell>
            <TableCell align="right">Payment Id</TableCell>
            <TableCell align="right">Document Ids</TableCell>
            <TableCell align="right">Application Created</TableCell>
          </TableRow>
        </TableHead>

              <TableBody>
                  {studentArray.map((student) => (
                    <TableRow
                      key={student.name}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row"> {student.name} </TableCell>
                      <TableCell align="right">{student.document_ids}</TableCell>
                      <TableCell align="right">{student.application_status}</TableCell>
                      <TableCell align="right">{student.payment_id}</TableCell>
                      <TableCell align="right">{student.created_at}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>

      </Table>
    </TableContainer>
  );
}

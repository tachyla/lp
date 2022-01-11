import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//createData takes column names args & return column name args in table
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}
const student_data = {
    "data": [
      {
      "name": "Ted Lasso",
      "application_status": "completed",
      "payment_id": null,
      "document_ids": ["4528834"],
      "created_at": "1606972785"
      },
      {
      "name": "Keeley Jones",
      "application_status": "completed",
      "payment_id": "17847834",
      "document_ids": ["3259611", "5926431"],
      "created_at": "1606968683"
      }
    ]
};

// this function will take the obj student_data & return data[].propertyName in each column
const students = student_data.data;
const student = students.forEach(student => console.log(student));

const myRows = [];


const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];



export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Student Name</TableCell>
            <TableCell align="right">Application Status</TableCell>
            <TableCell align="right">Payment Id</TableCell>
            <TableCell align="right">Document Ids</TableCell>
            <TableCell align="right">Application Created</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

import * as React from 'react';
// import Students-data from "./students-data";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

//import data to react
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
      "application_status": "",
      "payment_id": "17847834",
      "document_ids": ["3259611", "5926431"],
      "created_at": "1606968683"
      }
    ]
};

const students = student_data.data;

const getStudent = function(students){
    //Iterate over students array
    for(let i = 0; i < students.length; i++){
        let student = students[i];
        console.log(student);

        // get property values for each student
        let studentValues = (Object.values(student));
        //console.log(studentValues); // [ ted, 1, completed]

        //push each value into createData
        console.log(studentValues);
        return(studentValues + " studentValues");
    }
}
console.log(getStudent(students));

//takes values array as argument
//iterate over array
// put values[index] in an object


function createData(name, application_status, payment_id, document_ids, created_at) {
    return { name, application_status, payment_id, document_ids, created_at };
}


const rows = [
  createData('Example Name', 159, 6.0, 24, 4.0),
  createData(getStudent(students)),

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
        <TableBody>{rows.map((row, index) => (
            <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row"> {row.name}</TableCell>
              <TableCell align="right">{row.application_status}</TableCell>
              <TableCell align="right">{row.payment_id}</TableCell>
              <TableCell align="right">{row.document_ids}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

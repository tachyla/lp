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
//map keys for each student
const getStudentName = students.map(student => (student.name));
const getAppStatus = students.map(student => (student.application_status));
const getPaymentId = students.map(student => (student.payment_id));
const getDocsIds = students.map(student => (student.document_ids));
const getCreatedAt_date = students.map(student => (student.created_at));

const createData = function( name, application_status, payment_id, document_ids, created_at ){
    return { name, application_status, payment_id, document_ids, created_at };
};

const rows = [
  createData('Example Name', 159, 6.0, 24, 4.0),
  createData( getStudentName, getAppStatus, getPaymentId, getDocsIds, getCreatedAt_date ),
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

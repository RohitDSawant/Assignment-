import React, { useEffect, useState } from "react";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import axios from "axios";
import TableBody from "@mui/material/TableBody";

const UsersTable = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    try {
      axios.get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
      });
    } catch (error) {
      return error.message;
    }
  }, []);
  return (
    <>
      <TableContainer
        sx={{
          backgroundColor: "#EEF1FF",
          boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
          borderRadius: "5px",
        }}
      >
        <Table
          sx={{
            minWidth: 650,
            height: 500,
          }}
        >
          <TableHead sx={{ backgroundColor: "#9EB8D9" }}>
            <TableRow>
              <TableCell sx={{ fontWeight: "bold" }}>ID</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Name</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Username</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>City</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Email</TableCell>
              <TableCell sx={{ fontWeight: "bold" }}>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((ele) => (
              <TableRow key={ele.id}>
                <TableCell sx={{ fontSize: "small", fontWeight: 500 }}>
                  {ele.id}
                </TableCell>
                <TableCell sx={{ fontSize: "small", fontWeight: 500 }}>
                  {ele.name}
                </TableCell>
                <TableCell sx={{ fontSize: "small", fontWeight: 500 }}>
                  {ele.username}
                </TableCell>
                <TableCell sx={{ fontSize: "small", fontWeight: 500 }}>
                  {ele.address.city}
                </TableCell>
                <TableCell sx={{ fontSize: "small", fontWeight: 500 }}>
                  {ele.email}
                </TableCell>
                <TableCell sx={{ fontSize: "small", fontWeight: 500 }}>
                  {ele.website}{" "}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default UsersTable;

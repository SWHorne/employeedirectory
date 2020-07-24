// import React, { useEffect } from 'react';
import React from "react";
import { TableHead } from "./TableHead";
import { useEffect } from "react";
import API from "../utils/API";
import { TableRow } from "./TableBody";

export const Table = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    API.getUsers().then((data) => {
      setUsers(data.results);
    });
  }, []);

  useEffect(() => console.log(users), [users]);

  const { TableHead } = require("./Tablehead");

  return (
    <table>
      <thead>
        <TableHead />
      </thead>
      <tbody>
        {users.map(user => <TableRow key={user.id.value} {...user} />)}
      </tbody>
    </table>
  )
}

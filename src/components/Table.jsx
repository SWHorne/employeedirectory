import React from "react";
import { HeadTable } from "./HeadTable";
import { useEffect } from "react";
import API from "../utils/API";
import { TableRow } from "./BodyTable";

export const Table = () => {
  const [users, setUsers] = React.useState([]);

  useEffect(() => {
    API.getUsers().then((data) => {
      setUsers(data.results);
    });
  }, []);

  useEffect(() => console.log(users), [users]);

  return (
    <table>
      <thead>
        <HeadTable />
      </thead>
      <tbody>
        {users.map(user => <TableRow key={user.id.value} {...user} />)}
      </tbody>
    </table>
  )
}
import React from "react";

export const TableRow = (props) => {
  return (
    <table className="table">
      <tbody>
        <tr>
          <td>props.name.first</td>
          <td>props.name.last</td>
          <td>props.phone</td>
          <td>props.email</td>
          <td>
            <img
              id="Picture"
              src={props.picture.thumbnail}
              alt={props.name.last + ", " + props.name.first}
            />
          </td>
        </tr>
      </tbody>
    </table>
  );
};

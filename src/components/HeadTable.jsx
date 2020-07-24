import React from "react";

export const HeadTable = () => {

  return (
    <table className="table">
      <thead>
      <tr>
        <th onClick={() => URLSearchParams.sort()}>First Name</th>
        <th onClick={() => URLSearchParams.sort()}>Last Name</th>
        <th onClick={() => URLSearchParams.sort()}>Phone Number</th>
        <th onClick={() => URLSearchParams.sort()}>Email</th>
        <th>Picture</th>
      </tr>
      </thead>
    </table>
  );
}

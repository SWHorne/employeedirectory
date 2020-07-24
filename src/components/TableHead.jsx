import React from 'react'

export const TableHead = () => {

    return (
        <tr>
            <td onClick={() => URLSearchParams.sort()}>First Name</td>
            <td>Last Name</td>
            <td>Phone Number</td>
            <td>Email</td>
            <td>Picture</td>
        </tr>
    )
}
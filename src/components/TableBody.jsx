import React from  'react';

export const TableRow = (props) => {
    return (
        <tr>
            <td>props.name.first</td>
            <td>props.name.last</td>
            <td>props.phone</td>
            <td>props.email</td>
            <td><img src={props.picture.thumbnail} alt={props.name.last + ", " + props.name.first} /></td>
        </tr>
    )
}
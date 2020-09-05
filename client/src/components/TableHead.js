import React from "react";
import SortButton from "./SortButton.js";

function TableHead({setSort, sortHandler})
{
    return (
        <tr>
            <th scope="col">
                First Name
                <SortButton sortName="firstname" icon="alpha" setSort={setSort} sortHandler={sortHandler}/>
            </th>
            <th scope="col">
                Last Name
                <SortButton sortName="lastname" icon="alpha"  setSort={setSort} />
            </th>
            <th scope="col">
                Pay 
                <SortButton sortName="pay" icon="numeric" setSort={setSort} />
            </th>
            <th scope="col">
                Department
                <SortButton sortName="department" icon="alpha" setSort={setSort} />
            </th>
            <th scope="col">
                Department
                <SortButton sortName="title" icon="alpha" setSort={setSort} />
            </th>
            <th scope="col">
                Manager
            </th>
        </tr>
    )
};

export default TableHead;
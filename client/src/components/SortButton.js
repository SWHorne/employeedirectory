import React from "react";

function SortButton({sortName, icon, setSort})
{
    return (
        <button 
            type="button" 
            name={sortName}
            aria-label={sortName + "Button"} 
            onClick={setSort}
            className={`fa fa-sort-${icon}-asc`}
        >
        </button>
            
    );
};

export default SortButton;
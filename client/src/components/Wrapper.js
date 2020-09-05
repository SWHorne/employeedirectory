import React from "react";

function Wrapper({children})
{
    return(
        <div className="container" style={{marginTop:15, minWidth: "490px"}}>
            {children}
        </div>
    )
};

export default Wrapper;
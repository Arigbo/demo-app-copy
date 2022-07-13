import React from "react";
import AsideComp from "./aside";
import MainComp from "./mainComp";

function BodyComp() {
    return (
        <div>
           <AsideComp/>
           <MainComp/>
        </div>
    )
}

export default BodyComp
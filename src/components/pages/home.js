import React from "react";
import { Link } from "react-router-dom";
import AsideComp from "../aside";
import Photo from "../../Rectangle.png";
function Home (){
    return(
        <div >
        <div className="homepage">
        <h1>
            Welcome to <span>Spencer</span>
        </h1>
        <div>
        <h3>Hi, i'm Jesse</h3>
        <p>See our services</p>
        <Link to="/services" ><button className="btn" >See more</button></Link>
        </div>
        </div>
        <img className="image" src={Photo} alt="yoda" />
        <AsideComp/>
        </div>
    )
}
export default Home
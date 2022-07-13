// import LogoComp from "./logComp";
// import NavComp from "./nav";

// function HeaderComp (){
//     return( 
//         <div>
//         <LogoComp/>
//         <NavComp/>
//         </div>
//     )
// }re
// export default HeaderComp

import React, { useState } from "react";
import { Link, NavLink,} from "react-router-dom";
import Contacts from "./pages/contact";
import Home from "./pages/home";
import Services from "./pages/services";
import Product from "./pages/product";

function NavBar(props) {
    const [toogle, setToogle] = useState(false)
    function toggleMenu() {
        // console.log("clicked")
        setToogle(!toogle)
    }
// state={
//     NavBars:[
// 'Home','Services','Products','Contacts'
//     ]
// }
    return (
        <div className="NavBar">
            <span>
            <Link to="/">Spencer</Link>
            </span>
            <div className="hamburger">
                <button className="hamburger" onClick={toggleMenu}> 
                <svg viewBox="0 0 100 80" width="40" height="40">
                    <rect width="100" height="20"></rect>
                    <rect y="30" width="100" height="20"></rect>
                    <rect y="60" width="100" height="20"></rect>
                </svg>
                </button>
            </div>
            <nav className="nav-display">
                <ul  className={toogle ? 'nav-display' : "null"}>
                {/* {this.state.NavBars.map(NavBar=>*/}
                <li> 
                    <NavLink to="/" className={({isActive})=>(isActive ? 'link active':'link') }  onChange={<Home/>} onMouseOver={<Home/>}>Home</NavLink>
                    </li>
                    
                     <li>
                    <NavLink  to="/contacts" className={({isActive})=>(isActive ? 'link active':'link')}  onChange={<Contacts/>} onMouseOver={<Contacts/>}>Contacts</NavLink>
                    </li>
                    <li>
                    <NavLink  to="/services" className={({isActive})=>(isActive ? 'link active':'link')}  onChange={<Services/>} onMouseOver={<Services/>}>Services</NavLink>
                    </li>
                    <li>
                    <NavLink  to="/product" className={({isActive})=>(isActive ? 'link active':'link')}  onChange={<Product/>} onMouseOver={<Product/>}>Product</NavLink>
                    </li>
                    <NavLink  to="/login" className={({isActive})=>(isActive ? 'link active':'link')}><li> <button>{props.text}</button></li></NavLink>
                    <NavLink  to="/signup" className={({isActive})=>(isActive ? 'link active':'link')}><li> <button>SignUp</button></li></NavLink>
                   

                </ul>
            </nav>
        </div>
 
    )
}
export default NavBar
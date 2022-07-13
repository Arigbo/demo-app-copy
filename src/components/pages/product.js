import React from "react";
import { Link } from "react-router-dom";

import { Products } from "./Data";
// import './grid.scss';npm start


function Product() {

    return (
        <div className="product-container">
            {
                Products.map((item) => {
                    return (
                        <div className="product-item">
                            <div key={item.id}>
                                <div><img src={item.img_url} alt="ourimages" /></div>
                                <div ><span>nam</span><p>{item.name}</p></div>
                                <div>{item.Description}</div>
                                <div>{item.Category} </div>
                                <div>{item.Price}</div>

                                <div className="img"><Link to="/" >{item.button}</Link></div>
                            </div>
                        </div>
                    )
                }
                )
            }
        </div>
    )

}


export default Product
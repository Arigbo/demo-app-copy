import React from "react";
import { Link } from "react-router-dom";
import { services } from "./Data";
function Services() {
  return (
    <div className="service-container">
      {
        services.map((item) => {
          return (
            <div key={item.id} className="containee">
              <p>
                {item.serviceType}
              </p>
              <p>
                {item.serviceDescription}
              </p>
              <Link to="/product"><button>More info</button></Link>
            </div>
          )
        }

        )
      }
    </div>
  )
}

export default Services
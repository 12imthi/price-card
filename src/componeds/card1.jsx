import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Card1({ data,btnColorClass }) {
  console.log(btnColorClass);
    console.log(data.features);
  return (
    <div className="card col-3 d-flex justify-content-between">
      <div className="card-body">
        <p className="card-title text-center">{data.plan}</p>
        <h1 className="card-title text-center">{data.price}</h1>
        <p className="card-title text-center border-bottom mt-4"></p>

        <ul>
          {data.features.map((feature, index) => (
            <li key={index}>
             <div className={feature.included ? "included" : "not-included"}>
             {feature.included ? (
                <FontAwesomeIcon icon={faCheck} className="custom-icon" />
              ) : (
                <FontAwesomeIcon icon={faTimes} className="custom-icon" />
              )}
              {feature.name}
             </div>
            </li>
          ))}
        </ul>

        <div className="text-center d-flex justify-content-center" >
          <button
          style={{padding: '10px 90px '}}
            href="#"
            className={`btn text-center ${btnColorClass}`} // Dynamically set button color
          >
           
          
            {data.btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;

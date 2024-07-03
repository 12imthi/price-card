import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function Card1({ data }) {
    console.log(data.features);
  return (
    <div className="card col-4 d-flex justify-content-between">
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

        <div className="text-center d-flex justify-content-center">
          <button
            href="#"
            className="btn btn-primary text-center"
            style={{ padding: "10px 130px" }}
          >
            {data.btn}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card1;

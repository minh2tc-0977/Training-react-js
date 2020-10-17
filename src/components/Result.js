import React from "react";
import "./../css/style.css";

function Result(props) {
  return (
    props.isSubmit && (
      <div className="container">
        <div className="card">
          <div className="card-body">
            <p className="card-text">Full name: {props.user.name}</p>
            <p className="card-text">Date of birth: {props.user.birthday}</p>
            <p className="card-text">Gender: {props.user.gender}</p>
            <p className="card-text">Self intro: {props.user.selfIntro}</p>
            <p className="card-text">Languages: {props.user.language}</p>
            <p className="card-text">Interests:
              {props.user.interests.map(interest => {
                return (
                  <label>{interest.name}</label>
                )
              })}
            </p>
          </div>
        </div>
      </div>
    )
  );
}

export default Result;

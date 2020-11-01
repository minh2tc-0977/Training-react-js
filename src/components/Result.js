import React from "react";
import { useHistory } from "react-router-dom";
import "./../css/style.css";

function Result() {
  const history = useHistory();
  const {
    location: { state }
  } = history;

  const defaultUser = {
    fullName: '',
    gender: '',
    birthday: '',
    self_intro: '',
    interests: [],
  };
  const user = (state && state.user) || defaultUser;

  function Back(e) {
    history.push('/', {user});
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          <p className="card-text">Full name: {user.fullName}</p>
          <p className="card-text">Date of birth: {user.birthday}</p>
          <p className="card-text">Gender: {user.gender}</p>
          <p className="card-text">Self intro: {user.selfIntro}</p>
          <p className="card-text">Languages: {user.language}</p>
          <p className="card-text">Interests:
            {user.interests.map(interest => {
              return (
                <label className="m-3" key={interest.id}>{interest.name}</label>
              )
            })}
          </p>
        </div>
        <button className="btn btn-primary btn-block" type="button" onClick={Back}>Back</button>
      </div>
    </div>
  );
}

export default Result;

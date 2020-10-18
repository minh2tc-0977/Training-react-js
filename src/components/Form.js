import React from "react";
import "./../css/style.css";

function Form(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header">User info</div>
        <div className="card-body">
          <form onSubmit={props.handleSubmit}>
            <div className="form-group row">
              <label className="col-sm-4">Full name</label>
              <input
                onChange={props.handleChange}
                type="text"
                name="fullName"
                className="form-control col-sm-8"
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-4">Date of birth</label>
              <input
                onChange={props.handleChange}
                type="date"
                name="birtday"
                className="form-control col-sm-8"
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-4">Gender</label>
              {
                props.gender.map((gender) => {
                  return (
                    <div className="custom-control custom-radio col-sm-4" key={gender.id}>
                      <input
                        onChange={props.handleChange}
                        value={gender.name}
                        type="radio"
                        name="gender"
                        id={gender.name}
                        className="custom-control-input"
                      />
                      <label className="custom-control-label" htmlFor={gender.name}>
                        {gender.name}
                      </label>
                    </div>
                  );
                })
              }
            </div>
            <div className="form-group row">
              <label className="col-sm-4">Self intro</label>
              <textarea
                onChange={props.handleChange}
                name="selfIntro"
                className="form-control col-sm-8"
                rows="6"
              />
            </div>
            <div className="form-group row">
              <label className="col-sm-4">Languages</label>
              <select
                onChange={props.handleChange}
                className="custom-select col-sm-8"
                name="language"
              >
                <option>Choose...</option>
                {props.languages.map((language) => {
                  return (
                    <option
                      key={language.id}
                      value={language.name}
                    >
                      {language.name}
                    </option>
                  )
                })}
              </select>
            </div>
            <div className="form-group row">
              <label className="col-sm-4">Interests</label>
              <div clas="col-sm-8 row">
                {props.interests.map((interest) => {
                  return (
                    <div
                      className="custom-control custom-checkbox"
                      key={interest.id}
                    >
                      <input
                        onChange={props.handleChange}
                        value={JSON.stringify(interest)}
                        name="interests"
                        type="checkbox"
                        className="custom-control-input"
                        id={interest.name}
                      />
                      <label
                        className="custom-control-label"
                        htmlFor={interest.name}
                      >
                        {interest.name}
                      </label>
                    </div>
                  );
                })}
              </div>
            </div>
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

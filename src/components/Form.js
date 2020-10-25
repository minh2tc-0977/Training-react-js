import React, { useState } from "react";
import "./../css/style.css";
import Input from './Input/index';
import Textarea from './Textarea/index';
import Select from './Select/index';
import Checkbox from './CheckBox/index';
import Radio from './Radio/index';
import languages from './../config/languages.json';
import gender from './../config/gender.json';
import interest from './../config/interests.json';
import { useHistory } from "react-router-dom";

function Form() {
  const history = useHistory();
  const {
    location: { state }
  } = history;

  const initUser = (state && state.user) || {
    fullName: '',
    gender: '',
    birthday: '',
    self_intro: '',
    interests: [],
  };

  const [user, setUser] = useState(initUser);

  function handleChange(e) {
    const {name, value, type, checked} = e.target;
    let prevUser = user;
    setUser({
      ...prevUser,
      [name]:
        type === "checkbox"
          ? checked
            ? [...prevUser.interests, JSON.parse(value)]
            : prevUser.interests.filter((interest) => {
                return interest.id !== JSON.parse(value).id;
              })
          : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    history.push("/result", {user});
  }

  return (
    <div className="container">
      <div className="card">
        <div className="card-header">User info</div>
        <div className="card-body">
          <form onSubmit={handleSubmit}>
            <Input
              labelClass="col-sm-4"
              label="Full name"
              handleChange={handleChange}
              type="text"
              name="fullName"
              className="form-control col-sm-8"
              value={user.fullName}
            ></Input>
            <Input
              labelClass="col-sm-4"
              label="Date of birth"
              handleChange={handleChange}
              type="date"
              name="birthday"
              className="form-control col-sm-8"
              value={user.birthday}
            ></Input>
            <Radio
              labelClass="col-sm-4"
              label="Gender"
              handleChange={handleChange}
              name="gender"
              inputClassName="custom-control-input"
              className="custom-control custom-radio col-sm-4"
              data={gender}
            ></Radio>
            <Textarea
              labelClass="col-sm-4"
              label="Self intro"
              handleChange={handleChange}
              name="selfIntro"
              className="form-control col-sm-8"
              rows="6"
              value={user.selfIntro}
            ></Textarea>
            <Select
              labelClass="col-sm-4"
              label="Languages"
              handleChange={handleChange}
              name="language"
              className="form-control col-sm-8"
              data={languages}
              value={user.language}
            ></Select>
            <Checkbox
              labelClass="col-sm-4"
              label="Interests"
              handleChange={handleChange}
              name="interests"
              inputClassName="custom-control-input"
              className="custom-control custom-checkbox"
              data={interest}
            ></Checkbox>
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

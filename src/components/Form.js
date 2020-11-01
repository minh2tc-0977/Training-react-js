import React, { useState } from "react";
import Input from './Input/index';
import Textarea from './Textarea/index';
import Select from './Select/index';
import Checkbox from './CheckBox/index';
import Radio from './Radio/index';
import languages from './../config/languages.json';
import gender from './../config/gender.json';
import interest from './../config/interests.json';
import { useHistory } from "react-router-dom";
import { createStore } from 'redux';
import { mainReducer } from './../reducers/index';
import { ON_CHANGE, ON_SUBMIT, onChange, onSubmit } from "./../actions/index";

function Form() {
  const history = useHistory();

  const {
    location: { state }
  } = history;

  const initUser = {
    fullName: '',
    gender: '',
    birthday: '',
    self_intro: '',
    interests: [],
  };
  const oldUser = (state && state.user) ? state.user : initUser;
  const store = createStore(mainReducer, {user: initUser});

  const getUser = (state) => state.user;
  const getIsSubmit = (state) => state.isSubmit;

  function handleChange(e) {
    const prevUser = getUser(store.getState());
    const {name, value, type, checked} = e.target;
    const valueCustom = type === "checkbox"
      ? checked
        ? [...prevUser.interests, JSON.parse(value)]
        : prevUser.interests.filter((interest) => {
            return interest.id !== JSON.parse(value).id;
          })
      : value;

    store.dispatch(onChange({
      [name]: valueCustom
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    store.dispatch(onSubmit({ isSubmit: true }));
    if (getIsSubmit(store.getState())) {
      history.push("/result", store.getState());
    }
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
              value={oldUser.fullname}
            ></Input>
            <Input
              labelClass="col-sm-4"
              label="Date of birth"
              handleChange={handleChange}
              type="date"
              name="birthday"
              className="form-control col-sm-8"
              value={oldUser.birthday}
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
              value={oldUser.selfIntro}
            ></Textarea>
            <Select
              labelClass="col-sm-4"
              label="Languages"
              handleChange={handleChange}
              name="language"
              className="form-control col-sm-8"
              data={languages}
              value={oldUser.language}
            ></Select>
            <Checkbox
              labelClass="col-sm-4"
              label="Interests"
              handleChange={handleChange}
              name="interests"
              inputClassName="custom-control-input"
              className="custom-control custom-checkbox"
              data={interest}
              value={oldUser.interests}
            ></Checkbox>
            <button className="btn btn-primary btn-block" type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Form;

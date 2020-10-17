import React, { Component } from 'react';
import Form from './components/Form';
import Result from './components/Result';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: '',
        gender: '',
        birthday: '',
        self_intro: '',
        interests: [],
      },
      languages: [
        {
          id: 1,
          name: "VI"
        },
        {
          id: 2,
          name: "EN"
        },
        {
          id: 3,
          name: "JP"
        },
        { id: 4, name: "KR" }
      ],
      gender: [
        {
          id: 0,
          name: 'Male',
        },
        {
          id: 1,
          name: 'Famale',
        }
      ],
      interests: [
        {
          id: 1,
          name: 'Money',
        },
        {
          id: 2,
          name: 'Girl friend',
        },
        {
          id: 3,
          name: 'All of the above',
        }
      ],
      isSubmit: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const {name, value, type, checked} = e.target;
    const prevUser = this.state.user;
    this.setState({
      user: {
        ...prevUser,
        [name]:
          type === 'checkbox'
            ? checked
              ? [...prevUser.interests, JSON.parse(value)]
              : prevUser.interests.filter((interest) => {
                return interest.id !== JSON.parse(value).id;
              })
            : value
      }
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({
      isSubmit: true
    })
  }

  render() {
    return (
      <div className="App">
        <Form
          gender={this.state.gender}
          languages={this.state.languages}
          interests={this.state.interests}
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
        />
        <Result isSubmit={this.state.isSubmit} user={this.state.user}/>
      </div>
    );
  }
}

export default App;

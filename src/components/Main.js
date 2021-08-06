/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import axios from 'axios';

import Form from './Form';

require('dotenv').config();

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSend = this.handleSend.bind(this);
  }

  handleChange(event) {
    this.setState({
      selectedFile: event.target.files[0],
    });
  }

  handleSend(event) {
    event.preventDefault();
    const data = new FormData();
    data.append('file', this.state.selectedFile);

    const url = process.env.PORT || 3001;

    axios
      .post(`https://discord-bot-upload.herokuapp.com/${url}`, data, {})
      .then((res) => {
        console.log(res.statusText);
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Form handleChange={this.handleChange} handleSend={this.handleSend} />
    );
  }
}

/* const url = 'http://localhost:3001/';
axios(url, {
  method: 'POST',
  headers: {
    'content-type': 'application/json',
  },
  data,
})
  .then((response) => console.log(response.statusText))
  .catch((error) => {
    throw error;
  }); */
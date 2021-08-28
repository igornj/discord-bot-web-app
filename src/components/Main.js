/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable class-methods-use-this */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-console */
/* eslint-disable react/state-in-constructor */
import React, { Component } from 'react';
import { toast } from 'react-toastify';
import axios from '../services/axios';

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

  async handleSend(event) {
    event.preventDefault();

    if (this.state.selectedFile === null || this.state.selectedFile === '') {
      toast.warn('Você precisa selecionar um arquivo');
      return;
    }

    const data = new FormData();
    data.append('file', this.state.selectedFile);
    await axios
      .post('/', data, {})
      .then((res) => {
        toast.success('Sua imagem foi enviada com sucesso.');
      })
      .catch((err) => toast.error('Houve algum erro ao enviar a imagem.'));
  }

  render() {
    return (
      <Form handleChange={this.handleChange} handleSend={this.handleSend} />
    );
  }
}

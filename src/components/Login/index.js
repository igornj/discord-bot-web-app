/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Title, Paragraph, Form, Input, Label, Button } from './styled';
import { Container } from '../../styles/GlobalStyles';

async function loginUser(credentials) {
  return fetch('http://localhost:3000/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json());
}

export default function Login({ setToken }) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({ username, password });
    setToken(token);
    console.log(token);
  };

  return (
    <>
      <Title>Upper Moments</Title>
      <Paragraph>Faça seu login abaixo</Paragraph>
      <Container>
        <Form method="POST" onSubmit={handleSubmit}>
          <Label>Usuário</Label>
          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          <Label>Senha</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit">Entrar</Button>
        </Form>
      </Container>
    </>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};

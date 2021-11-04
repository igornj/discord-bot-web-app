/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';
import validator from 'validator';
import axios from 'axios';

import { Title, Paragraph, Form, Input, Label, Button } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../Loading';

export default function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 5 || username.value === '') {
      toast.warning('O usuário deve ter pelo menos 5 caracteres');
      return;
    }

    if (!validator.isEmail(email) || email.value === '') {
      toast.warning('O e-mail digitado é inválido');
      return;
    }

    if (password.length < 6 || password.value === '') {
      toast.warning('A senha deve ter pelo menos 6 digitos');
      return;
    }

    /* const salt = crypto.randomBytes(16).toString('hex');
    const hashPassword = crypto.pbkdf2(
      password,
      salt,
      10000,
      64,
      'sha512',
      (err, derivedKey) => {
        if (err) throw err;
        return derivedKey;
      }
    ); */

    const registerData = {
      username,
      email,
      password,
    };

    try {
      setIsLoading(true);
      await axios
        .post('http://localhost:3001/register', registerData)
        .then((res) => toast.success('Sua conta foi criada'));
      setIsLoading(false);
      history.push('/login');
    } catch (error) {
      toast.error('Ocorreu um erro na criação da sua conta');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Loading isLoading={isLoading} />
      <Title>Upper Moments</Title>
      <Paragraph>Crie sua conta abaixo</Paragraph>
      <Container>
        <Form method="POST" onSubmit={handleSubmit}>
          <Label>Usuário:</Label>
          <Input type="text" onChange={(e) => setUsername(e.target.value)} />
          <Label>Email:</Label>
          <Input type="text" onChange={(e) => setEmail(e.target.value)} />
          <Label>Senha:</Label>
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

/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState, useContext } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import axios from 'axios';
import jwt from 'jsonwebtoken';

import {
  Title,
  Paragraph,
  Paragraph2,
  Form,
  Input,
  Label,
  Button,
} from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../Loading';
import { Context } from '../../Context/AuthContext';

// require('dotenv').config({ path: path.resolve(__dirname, './.env') });
// D:\Documents\Cursos -Certificados - Faculdade\Programação\Projetos\Challenges\react01

export default function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const history = useHistory();

  // const { authenticated, handleLogin } = useContext(Context);
  // console.log('Login', authenticated);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (username.length < 5 || username === '') {
      toast.warning('O usuário deve ter pelo menos 5 caracteres');
      return;
    }

    if (password.length < 6 || password === '') {
      toast.warning('A senha deve ter pelo menos 6 digitos');
      return;
    }

    const loginData = {
      username,
      password,
    };

    try {
      setIsLoading(true);
      await axios.post('http://localhost:3001/login', loginData);
      setIsLoading(false);
      toast.success('Login efetuado com sucesso');
      history.push('/');
    } catch (error) {
      toast.error('Usuário ou senha incorretos');
      setIsLoading(false);
    }
  };

  return (
    <>
      <Loading isLoading={isLoading} />
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
          <Paragraph2>
            Não tem uma conta? <Link to="/register">Criar conta</Link>
          </Paragraph2>
        </Form>
      </Container>
    </>
  );
}

/* eslint-disable react/button-has-type */
/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */

import React, { useState } from 'react';
import { useHistory, Link, Redirect } from 'react-router-dom';
import { toast } from 'react-toastify';

import {
  Title,
  Paragraph,
  Paragraph2,
  Form,
  Input,
  Label,
  Button,
  Button2,
} from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../Loading';
import { useAuth } from '../../Context/AuthContext';

export default function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
      await login(email, password);
      toast.success('Login realizado com sucesso');
      setIsLoading(false);
      history.push('/');
    } catch (error) {
      toast.error('Ocorreu um erro ao tentar fazer login');
      setIsLoading(false);
    }
  };

  const { currentUser } = useAuth();
  if (currentUser) {
    return <Redirect to="/" />;
  }

  return (
    <>
      <Loading isLoading={isLoading} />

      <Title>Upper Moments</Title>
      <Paragraph>Faça seu login abaixo</Paragraph>

      <Container>
        <Form method="POST" onSubmit={handleSubmit}>
          <Label>Email:</Label>
          <Input
            type="text"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Digite seu e-mail"
          />
          <Label>Senha:</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Digite sua senha"
          />
          <Button type="submit">Entrar</Button>

          <Link
            style={{
              margin: '0 auto',
            }}
            to="/resetsenha"
          >
            <Button2 type="button">Esqueceu sua senha?</Button2>
          </Link>

          <Paragraph2>
            Não tem uma conta?
            <Link to="/register" style={{ color: 'blue' }}>
              {' '}
              Criar conta
            </Link>
          </Paragraph2>
        </Form>
      </Container>
    </>
  );
}

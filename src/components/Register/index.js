/* eslint-disable no-console */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { toast } from 'react-toastify';

import { useAuth } from '../../Context/AuthContext';

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

export default function Register() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [password2, setPassword2] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      toast.warning('As senhas digitadas não são iguais');
      return;
    }

    if (password < 6) {
      toast.warning('A senha precisa ter no minimo 6 digitos');
      return;
    }

    try {
      setIsLoading(true);
      await register(email, password);
      toast.success('Sua conta foi criada');
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
          <Label>Confirmar senha:</Label>
          <Input
            type="password"
            onChange={(e) => setPassword2(e.target.value)}
            placeholder="Repita sua senha"
          />
          <Button disable={isLoading} type="submit">
            Criar conta
          </Button>

          <Paragraph2>
            Você já tem uma conta?
            <Link to="/login" style={{ color: 'blue' }}>
              {' '}
              Faça o login
            </Link>
          </Paragraph2>
        </Form>
      </Container>
    </>
  );
}

/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { toast } from 'react-toastify';
import { FaSignOutAlt } from 'react-icons/fa';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../Context/AuthContext';
import { upperRed } from '../../config/color';
import { Button, Title, Paragraph, Container, Nav } from './styled';

import axios from '../../services/axios';
import Loading from '../Loading';

export default function Form() {
  const [image, setImage] = React.useState('');
  const [imageUrl, setImageUrl] = React.useState('');
  const [isLoading, setIsLoading] = React.useState(false);
  const { logout, currentUser } = useAuth();

  const history = useHistory();

  const handleChange = (event) => {
    const file = event.target.files[0];
    setImage(file);

    const fotoURL = URL.createObjectURL(file);
    setImageUrl(fotoURL);
  };

  const handleSend = async (event) => {
    event.preventDefault();

    if (image === null || image === '') {
      toast.warn('Você precisa selecionar um arquivo');
      return;
    }

    const data = new FormData();
    data.append('file', image);

    setIsLoading(true);
    await axios
      .post('/api/upload', data, {})
      .then((res) => {
        setIsLoading(false);
        toast.success('Sua imagem foi enviada com sucesso.');
        setImageUrl('');
      })
      .catch((err) => {
        setIsLoading(false);
        toast.error('Houve algum erro ao enviar a imagem.');
      });
  };

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      logout();
      toast.success('Logout feito com sucesso');
      setIsLoading(false);
      history.push('/login');
    } catch (err) {
      setIsLoading(false);
      toast.error('Ocorreu algum erro ao fazer logout');
    }
  };

  return (
    <>
      <Nav>
        <p>{currentUser.email}</p>
        <Link to="/login">
          <button style={{ background: 'none' }} onClick={handleLogout}>
            <FaSignOutAlt size={30} color={upperRed} />
          </button>
        </Link>
      </Nav>
      <Link to="/">
        <Title>Upper Moments</Title>
      </Link>
      <Paragraph>Envie seus rolês abaixo</Paragraph>

      <Container>
        <Loading isLoading={isLoading} />
        <form action="#" method="POST" encType="multipart/form-data">
          <label htmlFor="file">
            {imageUrl ? <img src={imageUrl} alt="file" /> : 'Selecionar'}
            <input type="file" name="image" id="file" onChange={handleChange} />
          </label>

          <h4>Regras</h4>
          <ul>
            <li>
              1 - Não seja babaquinha, envie somente fotos de rolês do clan 👌
            </li>
            <li>2 - Sua mãe é minha 👵</li>
          </ul>

          <Button
            type="submit"
            name="submit"
            onClick={handleSend}
            className="btn"
          >
            Enviar
          </Button>
        </form>
      </Container>
    </>
  );
}

// Após o envio, o bot já vai poder mostrar o seu rolê🤖.

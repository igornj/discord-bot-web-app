/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Link, useHistory } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { Container, Title, Paragraph, Button, Nav } from './styled';
import { upperRed } from '../../config/color';
import { useAuth } from '../../Context/AuthContext';

export default function HomePage() {
  const { logout, currentUser } = useAuth();
  const history = useHistory();

  const handleLogout = (e) => {
    e.preventDefault();
    try {
      logout();
      toast.success('Logout feito com sucesso');
      history.push('/login');
    } catch (err) {
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

      <Title>Upper Moments</Title>
      <Paragraph>O Bot que armazena nossos rolês</Paragraph>

      <Container>
        <Button>
          <Link
            to="/upload"
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'block',
              width: '100%',
              padding: '15px 80px',
            }}
          >
            Envie seu rolê
          </Link>
        </Button>

        <Button>
          <Link
            to="/galeria"
            style={{
              textDecoration: 'none',
              color: 'white',
              display: 'block',
              width: '100%',
              padding: '15px 80px',
            }}
          >
            Galeria de Rolês
          </Link>
        </Button>
      </Container>
    </>
  );
}

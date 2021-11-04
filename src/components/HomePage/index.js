/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import { FaSignOutAlt } from 'react-icons/fa';
import { Container, Title, Paragraph, Button } from './styled';
import { upperRed } from '../../config/color';

export default function HomePage() {
  // const [token, setToken] = React.useState();

  return (
    <>
      <Title>Upper Moments</Title>
      <Paragraph>O Bot que armazena nossos rolês</Paragraph>

      <Container>
        <Button>
          <Link to="/upload" style={{ textDecoration: 'none', color: 'white' }}>
            Envie seu rolê
          </Link>
        </Button>

        <Button type="submit" name="submit" className="btn">
          <Link
            to="/galeria"
            style={{ textDecoration: 'none', color: 'white' }}
          >
            Galeria de Rolês
          </Link>
        </Button>

        <Link to="/login">
          <FaSignOutAlt size={23} color={upperRed} />
        </Link>
      </Container>
    </>
  );
}

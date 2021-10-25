import React from 'react';
import { Link } from 'react-router-dom';
import { Container, Title, Paragraph, Button } from './styled';
import Login from '../Login';
import useToken from '../Login/useToken';

export default function HomePage() {
  // const [token, setToken] = React.useState();

  const { token, setToken } = useToken();

  if (!token) {
    return <Login setToken={setToken} />;
  }
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
      </Container>
    </>
  );
}

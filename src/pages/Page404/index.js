import React from 'react';

import GlobalStyles from '../../styles/GlobalStyles';
import { Title, Title2, Container } from './styled';

export default function Page404() {
  return (
    <>
      <Title2>404</Title2>
      <Container>
        <GlobalStyles />
        <Title>Essa página não existe</Title>
      </Container>
    </>
  );
}

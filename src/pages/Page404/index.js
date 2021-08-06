import React from 'react';

import GlobalStyles, { Container } from '../../styles/GlobalStyles';
import { Title } from './styled';

export default function Page404() {
  return (
    <Container>
      <GlobalStyles />
      <Title>Essa página não existe</Title>
    </Container>
  );
}

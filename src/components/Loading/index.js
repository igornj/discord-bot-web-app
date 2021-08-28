import React from 'react';
import ReactLoading from 'react-loading';

import PropTypes from 'prop-types';
import { Container, LoadingDiv } from './styled';

export default function Loading({ isLoading }) {
  if (!isLoading) return <> </>;

  return (
    <Container>
      <div />
      <LoadingDiv>
        <ReactLoading type="spin" color="red" height={200} width={200} />
      </LoadingDiv>
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};

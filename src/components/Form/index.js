/* eslint-disable react/require-default-props */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import PropTypes from 'prop-types';
import { Container } from '../../styles/GlobalStyles';
import { Button, Title } from './styled';

export default function Form({ handleChange, handleSend }) {
  return (
    <>
      <Title>Upper Moments</Title>
      <Container>
        <form action="#" method="POST" encType="multipart/form-data">
          <input type="file" name="image" onChange={handleChange} />
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

Form.propTypes = {
  handleChange: PropTypes.func,
  handleSend: PropTypes.func,
};

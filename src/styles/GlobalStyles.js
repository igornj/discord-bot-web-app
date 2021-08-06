// eslint-disable-next-line no-unused-vars
import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
  }

body{
  background-color: #fff;
  font-family: sans-serif;
}

a{
  text-decoration: none;
  cursor: pointer;
}

button{
  border: none;
  cursor: pointer;
}
`;

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

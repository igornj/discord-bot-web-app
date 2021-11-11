import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 400px;
  margin: 1.5rem 1rem;
  background-color: red;
  color: white;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d70000;
  }
`;

export const Title = styled.h1`
  text-align: center;
  margin-top: 1rem;
  color: red;
`;

export const Paragraph = styled.p`
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
`;

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 80%;
  background: #fff;
  margin: 15px auto;
  padding: 30px;
  border-radius: 4px;
`;

export const Nav = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin: 0.5rem auto;

  p {
    font-size: 12px;
    font-weight: bold;
  }

  button {
    display: block;
    margin: -6px 5px;
    padding: 0.5rem;
  }
`;

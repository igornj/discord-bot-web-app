import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  width: 800px;
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
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
`;

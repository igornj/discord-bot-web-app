import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: column;
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

export const Input = styled.input`
  padding: 0.5rem;
  border-radius: 5px;
  margin: 0 0 1rem 0;
  border: 1px solid black;
  :focus {
    border: 1px solid red;
  }
`;

export const Label = styled.label`
  margin-bottom: 0.2rem;
`;

export const Button = styled.button`
  padding: 10px 20px;
  margin: 1.5rem 1rem;
  background-color: red;
  color: white;
  border-radius: 4px;
  transition: all 0.2s ease;

  &:hover {
    background-color: #d70000;
  }
`;

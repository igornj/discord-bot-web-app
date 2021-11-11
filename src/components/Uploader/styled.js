import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  padding: 10px 20px;
  margin: 1.5rem auto;
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

export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  input {
    display: none;
  }

  label {
    width: 200px;
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #eee;
    border: 5px solid red;
    margin: 5px auto;
    cursor: pointer;
    border-radius: 50%;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      background: #d70000;
      border: 5px solid #d70000;
      color: white;
    }
  }

  img {
    width: 100%;
  }

  h4 {
    margin: 2.2rem 1rem 1rem 0;
  }

  li {
    list-style: none;
    margin: 1rem 1rem 1rem 0;
    font-size: 15px;
  }
`;

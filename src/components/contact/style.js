import styled from 'styled-components';

export const ContactContainerStyle = styled.div`
  height: 550px;
  color: white;
  text-align: center;
  padding: 70px;
  
  input {
    display: block;
    margin: 0 auto;
  }

  form {
    width: 450px;
    height: 310px;
    margin: 0 auto;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 2px 2px 15px white;
  }

  span {
    display: block;
    margin-bottom: 8px;
    font-size: 20px;
    color: #2e0;
  }
`;

export const InputStyle = styled.input`
    padding: 10px;
    margin-bottom: 5px;
    border-radius: 5px;
    width: 88%;
`;

export const TextAreaStyle = styled.textarea`
  width: 88%;
  height: 150px;
  padding: 10px;
  margin: 10px;
  grid-row-start: 5;
  column-span: 15;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
`;

export const ButtonStyle = styled.input`
  width: 50%;
  background-color: #a8f;
  margin: 10px;
  border-radius: 5px;
  height: 30px;
  font-weight: 600;
  font-size: 15px;

  :hover {
    width: 55%;
    height: 35px;
    font-size: 17px;
  }
`;

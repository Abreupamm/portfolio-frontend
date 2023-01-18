import styled from 'styled-components';

export const ContactContainerStyle = styled.div`
  height: 550px;
  color: white;
  text-align: center;
  padding: 70px;
  
  input {
    display: block;
    margin: 0 auto;
    width: 300px;
  }

  form {
    width: 340px;
    margin: 0 auto;
    padding: 5px 0;
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
`;

export const TextAreaStyle = styled.textarea`
  width: 300px;
  height: 150px;
  padding: 10px;
  margin: 10px;
  grid-row-start: 5;
  column-span: 15;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
`;

export const ButtonStyle = styled.input`
  background-color: #a8f;
  margin: 10px;
  border-radius: 5px;
  height: 30px;
  font-weight: 600;
  font-size: 15px;
`;

import styled from 'styled-components';

export const ContactContainerStyle = styled.div`
  height: 700px;
  color: white;
  text-align: center;
  padding: 30px;

  h1 {
    font-size: 70px;
    font-family: 'IBMPlexMonoItalic', monospace; 
  }
  
  input {
    display: block;
    margin: 0 auto;
  }

  form {
    width: 660px;
    height: 420px;
    margin: 25px auto;
    padding: 10px 0;
    border-radius: 10px;
    box-shadow: 2px 2px 15px white;
  }
`;

export const ResponseStyle = styled.span`
  display: block;
  margin-bottom: 8px;
  font-size: 30px;
  color: ${(props) => props.color};
`;

export const InputStyle = styled.input`
    padding: 10px 15px;
    border-radius: 5px;
    width: 85%;
    height: 30px;
    font-size: 20px;
`;

export const TextAreaStyle = styled.textarea`
  width: 85%;
  height: 210px;
  padding: 10px 15px;
  margin-top: 10px;
  margin-bottom: 12px;
  font-size: 23px;
  grid-row-start: 5;
  column-span: 15;
  border-radius: 5px;
  font-family: 'Rubik', sans-serif;
`;

export const ButtonStyle = styled.input`
  width: 220px;
  font-size: 22px;
  background-color: #a8f;
  border-radius: 15px;
  height: 42px;
  font-weight: 600;

  :hover {
    width: 225px;
    font-size: 25px;
  }
`;

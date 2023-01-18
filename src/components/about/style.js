import styled from 'styled-components';

export const TextHighlight = styled.span`
  color: ${(props) => props.color};
`;

export const AboutContainer = styled.div`
  color: white;
`;

export const Presentation = styled.div`
  width: 80%;
  margin: 0 auto;
  padding-top: 60px;
  height: 320px;
  color: white;
  padding-top: 100px;
 
  h1 {
    font-size: 90px;
    margin-left: 10%;
  }

  h2 {
    display: inline;
    font-size: 70px;
    margin-left: 15%;
  }

  h1, h2 {
    color: #a8f;
    font-family: 'Rubik', sans-serif;
  }
  
  span,
  h3 {
    display: inline;
    font-family: 'IBMPlexMonoItalic', monospace;
  }

  h3 {
    margin-left: 40%;
    font-size: 30px;
    font-weight: 300;
  }

  span {
    font-size: 25px;
  }
`;

export const Description = styled.div`
  background-color: #000;
  padding: 2%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 35%;
  }
`;

export const ParagraphContainer = styled.div`
  width: 60%;
  font-size: 18px;
  font-family: 'Rubik', sans-serif;
  line-height: 18pt;
`;

import styled from 'styled-components';

export const TextHighlight = styled.span`
  color: ${(props) => props.color};
`;

export const AboutContainer = styled.div`
  position: absolute;
  z-index: 1;
  color: white;
`;

export const Presentation = styled.div`
  width: 80%;
  margin: 0 auto;
  margin-top: 5%;
  margin-bottom: 20%;
  color: white;
 
  h1 {
    color: #a8f;
    font-family: 'Rubik', sans-serif;
    font-size: 90px;
    margin-left: 8%;
  }

  span,
  h3 {
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

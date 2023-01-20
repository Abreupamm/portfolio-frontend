import styled from 'styled-components';

export const TextHighlight = styled.span`
  color: ${(props) => props.color};
`;

export const AboutContainer = styled.div`
  color: white;
`;

export const Presentation = styled.div`
  width: 90%;
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
    margin-left: 10%;
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
    font-size: 35px;
    font-weight: 300;
  }

  span {
    font-size: 25px;
  }
`;

export const Description = styled.div`
  background-color: #000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 60px 0;

  img {
    width: 500px;
    margin: 0 auto;
  }
`;

export const ParagraphContainer = styled.div`
  width: 60%;
  font-size: 28px;
  font-family: 'Rubik', sans-serif;
  line-height: 30pt;
  opacity: 0.7;
  margin: 0 auto;

  p {
    margin: 25px 0;
  }
`;

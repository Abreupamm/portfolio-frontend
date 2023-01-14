import styled from 'styled-components';

export const PresentationContainer = styled.div `
  width: 100%;
  height: 450px;
  position: fixed;
  z-index: -1;
  background-color: #000;
  height: 450px;

  img {
    width: 100%;
    height: 450px;
    opacity: 0.5;
  }

  div {
    position: absolute;
    top: 40px;
    left: 10%;
    right: 10%;
    
    h1 {
      color: #a8f;
      font-family: "Rubik",sans-serif;
      font-size: 90px;
      margin-left: 5%;
    }

    span, h3 {
      color: white;
      font-family: "IBMPlexMonoItalic",monospace;
    }

    h3{
      margin-left: 40%;
      font-size: 30px;
      font-weight: 300;
      span {
        color: #2e0;
      }
    }

    span {
      font-size: 25px;
    }
  }
`;
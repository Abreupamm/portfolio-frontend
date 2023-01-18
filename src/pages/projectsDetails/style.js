import styled from 'styled-components';

export const ContainerProjectsDetails = styled.div`
  min-height: 100vh;
  background-color: #000;
  color: white;
  padding: 1px 20px;
  opacity: 0.9;

  p {
    display: inline-block;
    font-family: 'Rubik', sans-serif;
    width: 40%;
    font-size: 20px;
    line-height: 30px;
    margin-left: 25px;
  }
`;

export const Title = styled.h1`
   font-family: 'IBMPlexMonoItalic', monospace;
   font-size: 50px;
   font-weight: 500;
   background: ${(props) => props.color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GifContainer = styled.div`
  position: absolute;
  right: 20px;
  top: 20%;
  bottom: 20%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  img {
    width: 100%;
  }

  h3 {
    font-family: 'IBMPlexMonoItalic', monospace;
  }
`;

export const ButtonRedirect = styled.button`
  background: ${(props) => props.color};
  font-family: 'IBMPlexMonoItalic', monospace;
  font-weight: 900;
  width: 120px;
  height: 35px;
  padding: 5px;
  border-radius: 10px;
  margin: 40px;
  font-size: 15px;

  :hover {
    font-size: 18px;
  }
`;

export const StyleProgress = styled.div`
  display: flex;
  justify-content: space-between;
  width: 40%;
  margin: 10px;
`;

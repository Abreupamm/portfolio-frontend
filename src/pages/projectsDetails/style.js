import styled from 'styled-components';

export const ContainerProjectsDetails = styled.div`
  min-height: 1000px;
  background-color: #000;
  color: white;
  padding: 40px 30px;
  opacity: 0.9;

  p {
    font-family: 'Rubik', sans-serif;
    width: 80%;
    font-size: 35px;
    line-height: 45px;
    margin-left: 25px;
    margin-top: 45px;
  }
`;

export const Title = styled.h1`
  width: 50%;
  font-family: 'IBMPlexMonoItalic', monospace;
  margin-left: 20px;
  font-size: 60px;
  font-weight: 500;
  background: ${(props) => props.color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GifContainer = styled.div`
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;

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
  width: 220px;
  font-size: 22px;
  height: 45px;
  padding: 5px;
  border-radius: 10px;
  margin: 40px;

  :hover {
    font-size: 25px;
  }
`;

export const StyleProgress = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  position: absolute;
  top: 80px;
  left: 40%;
`;

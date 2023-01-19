import styled from 'styled-components';

export const BackgroundContainer = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -2;
  background-color: #000;
  /* opacity: 0.8; */

  img {
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
`;

export const ProjectsContainer = styled.div`
  width: 99%;
  color: white;
  background-color: #202020;
  opacity: 0.9;
  border: solid #202020 4px;
  padding: 60px 0;

  h2 {
    text-align: center;
    margin-top: 45px;
    font-size: 35px;
  }

  button {
    display: block;
    background-color: #2e0;
    width: 120px;
    box-shadow: 10px 10px 10px #000;
    margin: 25px auto;
    border-radius: 20px;
    font-weight: 600;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 68%;
  margin: 0 auto;
`;

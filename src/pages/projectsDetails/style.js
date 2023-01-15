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
    /* border: solid red 1px; */
    width: 40%;
    /* height: 25%; */
    font-size: 20px;
    line-height: 30px;
    margin-left: 25px;
  }
`;

export const Title = styled.h1`
   font-family: 'IBMPlexMonoItalic', monospace;
   font-size: 50px;
   /* font-family: 'Rubik', sans-serif; */
   font-weight: 500;
   background: ${(props) => props.color};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const GifContainer = styled.div`
  border: solid green 1px;
  position: absolute;
  right: 20px;
  top: 20%;
  bottom: 20%;
  width: 50%;
  display: flex;
  flex-wrap: wrap;
  align-content: stretch;
  justify-content: center;

  img {
    width: 100%;
  }
`;

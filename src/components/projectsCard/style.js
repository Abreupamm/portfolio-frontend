import styled from 'styled-components';

export const ProjectCardsContainer = styled.div`
  display: block;
  background-color: #000;
  color: white;
  width: 400px;
  height: 200px;
  font-family: 'IBMPlexMonoItalic', monospace;
  margin: 20px;
  box-shadow: 5px 10px 10px #000;

  :hover{
      span {
        padding-left: 65px;
        transition: all 0.5s ease;
      }
    }      

  p {
    display: block;
    margin: 25px auto;
    margin-bottom: 35px;
    font-size: 20px;
    font-family: 'Rubik', sans-serif;
    line-height: 20pt;
    width: 80%;
    height: 78px;
  }

  div {
    display: flex;
    justify-content: space-around;
    background-color: #181818;;
    opacity: 0.9;
    height: 18px;
    align-items: center;
  }
`;

export const ProjectsName = styled.span`
  display: inline-block;
  color: #000;
  border-radius: 0 15% 0 0;
  padding: 5px;
  font-weight: 600;
  font-size: 22px;
  background: ${(props) => props.color};
`;

export const Stacks = styled.div`
  font-size: 10px;
`;

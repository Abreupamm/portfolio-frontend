import styled from 'styled-components';

export const ProjectCardsContainer = styled.a`
  display: block;
  background-color: #000;
  color: white;
  width: 250px;
  font-family: 'IBMPlexMonoItalic', monospace;
  margin: 20px;
  box-shadow: 5px 10px 10px #000;
  :hover{
      span {
        padding-left: 60px;
        transition: all 0.5s ease;
      }
    }      

  p {
    display: block;
    margin: 15px auto;
    font-size: 12px;
    font-family: 'Rubik', sans-serif;
    line-height: 11pt;
    width: 80%;
    height: 60px;
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
  background: ${(props) => props.color};
`;

export const Stacks = styled.div`
  font-size: 10px;
`;

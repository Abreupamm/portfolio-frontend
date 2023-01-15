import styled from 'styled-components';

export const ProjectCardsContainer = styled.a`
  display: block;
  background-color: #000;
  color: white;
  width: 250px;
  font-family: 'IBMPlexMonoItalic', monospace;
  :hover{
    width: 280px;
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
    background-color: #202020;;
    opacity: 0.8;
    height: 18px;
    align-items: center;
  }
`;

export const ProjectsName = styled.span`
  display: inline-block;
  color: #000;
  border-radius: 0 15% 0 0;
  padding: 5px;
  /* font-family: 'Rubik', sans-serif; */
  font-weight: 600;
  background: ${(props) => props.color};
  /* background: linear-gradient(to bottom, #fa0, #f20); */
  /* background: linear-gradient(to right, #c1f, #70e); */
  /* background: linear-gradient(to bottom, #fd0, #f90); */
`;

export const Stacks = styled.span`
  font-size: 10px;
`;

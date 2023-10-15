import styled from 'styled-components';

export const HeaderStyle = styled.header`
  position: fixed;
  background-color: #000;
  width: 100%;
  height: 60px;
  opacity: 0,5;
  padding-left: 20px;
  padding-right: 100px;
  padding-top: 10px;
  
  div {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 96%;

  nav {
    display: flex;
    justify-content: space-between;
    width: 300px;
  }

  a {
    text-decoration: none;
    color: #00F0FF;
    font-size: 20px;
  }

  a:hover {
    color: #ffff;
    text-decoration: underline;
  }

  }

 
`;

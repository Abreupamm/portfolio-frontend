import styled from 'styled-components';

export const StyleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  font-family: 'IBMPlexMonoItalic', monospace;
  width: 100%;

  div {
    display: inline-block;
    text-align: center;
    width: 90px;
    margin: 20px;
  }

  img {
    width: 60px;
    margin-bottom: 5px;
  }
`;

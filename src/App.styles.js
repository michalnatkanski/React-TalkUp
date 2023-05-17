import styled from 'styled-components';

export const AppBody = styled.div`
display: flex;
height: 100vh;
`;

export const AppLoading = styled.div`
  background-color: #2a3039;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const AppLoadingContents = styled.div`
  background-color: #2a3039;
  display: flex;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding-bottom: 100px;
  
  > img {
    height: 100px;
    padding: 20px;
    margin-bottom: 40px;
  }
`;
import styled from 'styled-components';

export const LoginContainer = styled.div`
    background-color: white;
    height: 100vh;
    display: grid;
    place-items: center;
`;

export const LoginInnerContainer = styled.div`
    padding: 100px;
    text-align: center;
    background-color:  #2a3039;
    border-radius: 10px;
    box-shadow: 7px 3px 33px -2px rgba(66, 68, 90, 1);
    
    h1 {
        color: var(--white-color);
    }
    
    > img {
        object-fit: contain;
        height: 100px;
        margin-bottom: 40px;
    }

    > button {
        margin-top: 50px;
        text-transform: inherit;
        background-color: white;
        color: #2a3039;
        border-radius: 10px;

        :hover {
            background-color: var(--secondary-color);
        }
    }
`;
import styled from 'styled-components';
import Avatar from '@mui/material/Avatar';

export const HeaderContainer = styled.div`
   display: flex;
   position: fixed;
   width: 100%;
   align-items: center;
   justify-content: space-between;
   padding: 12.5px 0;
   background-color: var(--primary-color);
   color: white;
`;

export const HeaderLeft = styled.div`
    flex: 0.3;
    display: flex;
    align-items: center;
    margin-left: 20px;
  
    .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 30px;
    }
`;

export const HeaderAvatar = styled(Avatar)`
    cursor: pointer;
    
    :hover {
        opacity: 0.8;
    }

    > .MuiSvgIcon-root {
        margin: 0 auto;
    }
`;

export const HeaderSearch = styled.div`
    flex: 0.4;
    opacity: 1;
    border-radius: 6px;
    background-color: var(--dark-gray-color);
    text-align: center;
    display: flex;
    padding: 0 50px;
    color: gray;
    border: 1px solid gray;

    > input {
        background-color: transparent;
        border: none;
        text-align: center;
        min-width: 20vw;
        outline: 0;
        color: white;
    }
`;

export const HeaderRight = styled.div`
    flex: 0.3;
    display: flex;
    align-items: flex-end;

    > .MuiSvgIcon-root {
        margin-left: auto;
        margin-right: 20px;
    }
`;
import styled from 'styled-components';

export const ChatContainer = styled.div`
    flex: 0.7;
    flex-grow: 1;
    overflow-y: scroll;
    margin-top: 60px;
    background-color: var(--white-color);
    display: flex;
    flex-direction: column;
`;

export const Header = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px;
    border-bottom: 1px solid lightgray;
`;

export const HeaderLeft = styled.div`
    display: flex;
    align-items: center;

> h4 {
    display: flex;
    text-transform: lowercase;
}

> .MuiSvgIcon-root {
    margin-left: 10px;
}
`;

export const HeaderRight = styled.div`
> p {
    display: flex;
    align-items: center;
    font-size: 14px;
}

> p > .MuiSvgIcon-root {
    margin-right: 5px;
    font-size: 18px;
}
`;

export const ChatMesseges = styled.div`
    flex-grow: 1;
`;

export const ChatBottom = styled.div`
    padding-bottom: 200px;
`;
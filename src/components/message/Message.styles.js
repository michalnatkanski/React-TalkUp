import styled from 'styled-components';

export const MessageContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 20px;

    > img {
        height: 50px;
        border-radius: 8px;
    }
`;

export const MessageInfo = styled.div`
    padding-left: 10px;

    > h4 > span {
        color: gray;
        font-weight: 300;
        margin-left: 4px;
        font-size: 10px;
    }
`;

export const MessageLeft = styled.div`
    background-color: var(--secondary-color);
    color: var(--white-color);
    padding: 16px;
    border-radius: 16px 16px 16px 0;
    margin-top: 5px;
`;

export const MessageRight = styled.div`
    background-color: var(--accent2-color);
    color: var(--primary-color);
    padding: 16px;
    border-radius: 16px 16px 0 16px;
    margin-top: 5px;
`;
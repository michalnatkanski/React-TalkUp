import styled from 'styled-components';

export const SidebarContainer = styled.div`
    color: var(--white-color);
    background-color: var(--primary-color);
    flex: 0.3;
    border-top: 1px solid var(--accent-color);
    max-width: 260px;
    margin-top: 65px;

    > hr {
        margin: 10px 0;
        border: 1px solid var(--accent-color);
    }
`;

export const SidebarHeader = styled.div`
    display: flex;
    border-bottom: 1px solid var(--accent-color);
    padding: 13px;

    > .MuiSvgIcon-root {
        padding: 8px;
        color: #49274b;
        font-size: 18px;
        background-color: white;
        border-radius: 18px;
    }
`;

export const SidebarInfo = styled.div`
    flex: 1;

    > h2 {
        font-size: 15px;
        font-weight: 900;
        margin-bottom: 5px;
    }

    > h3 {
        display: flex;
        font-size: 13px;
        font-weight: 400;
        align-items: center;
    }

    > h3 > .MuiSvgIcon-root {
        font-size: 14px;
        margin-top: 1px;
        margin-right: 2px;
        color: green;
    }
`;

export const SpinnerContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
`;
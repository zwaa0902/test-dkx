import styled from 'styled-components';

export const Wrapper = styled.div`
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    form {
        width: 300px;
        display: grid;
        grid-row-gap: 1rem;
    }
`;
export const Title = styled.h1`
    a {
        color: #0070f3;
        text-decoration: none;
    }

    a:hover,
    a:focus,
    a:active {
        text-decoration: underline;
    }

    margin: 0;
    line-height: 1.15;
    font-size: 4rem;

    text-align: center;
`;
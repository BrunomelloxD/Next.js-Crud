import styled from "styled-components";

export const Nav = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    position: sticky;

    z-index: 999;

    background: ${(props) => props.theme.colors.secundaryBackground};

    top: 0px;
    padding: 1.2rem 4rem;

    font-size: 1rem;

    span {
        font-weight: 600;
        color: ${(props) => props.theme.colors.primary};
    }

    h1 {
        font-size: 1.2rem;
    }

    p {
        font-weight: 600;
    }
`;

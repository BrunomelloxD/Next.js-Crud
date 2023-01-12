import styled from "styled-components";

export const ButtonUI = styled.button`
    font: 600 18px Roboto, sans-ser;

    width: 100%;
    background-color: ${(props) => props.theme.colors.secundaryBackground};

    padding: 15px 0;
    border-radius: 5px;
    cursor: pointer;

    p {
        color: ${(props) => props.theme.colors.text};
    }
`;

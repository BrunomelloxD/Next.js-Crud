import styled from "styled-components";

export const LabelUI = styled.label`
    display: block;
    margin-top: 30px;
    font: 500 16px Roboto, sans-serif;
`;

export const InputUI = styled.input`
    display: block;
    height: 50px;
    width: 100%;
    background-color: ${(props) => props.theme.colors.primaryBackground};
    border-radius: 3px;
    padding: 0 10px;
    margin-top: 8px;

    font: 300 14px Roboto, sans-serif;
`;

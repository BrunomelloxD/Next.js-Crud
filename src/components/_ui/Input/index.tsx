import { LabelUI, InputUI } from "./style";

interface Props {
    titleLabel: string;
    placeholder: string;
    typeInput: string;
}

const Input = (props: Props) => {
    return (
        <>
            <LabelUI>{props.titleLabel}</LabelUI>
            <InputUI type={props.typeInput} placeholder={props.placeholder} />
        </>
    );
};

export default Input;

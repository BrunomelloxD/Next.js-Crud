import { ButtonUI } from "./style";

interface Props {
    title: string;
}

const Button = (props: Props) => {
    return (
        <>
            <ButtonUI className="buttonForm">
                <p>{props.title}</p>
            </ButtonUI>
        </>
    );
};

export default Button;

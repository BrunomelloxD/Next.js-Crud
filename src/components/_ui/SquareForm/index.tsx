import { Container } from "./style";

interface Props {
    title: string;
    children: React.ReactNode;
}

const SquareForm = (props: Props) => {
    return (
        <Container>
            <form>
                <h3>{props.title}</h3>
                {props.children}
            </form>
        </Container>
    );
};

export default SquareForm;

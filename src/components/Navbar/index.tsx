import { Nav } from "./styles";

interface Props {
    title: string;
}

const Header = (props: Props) => {
    return (
        <Nav>
            <section>
                Crud with <span>Next.js</span>
            </section>
            <h1>{props.title}</h1>
            <p>Bem vindo(a)!</p>
        </Nav>
    );
};

export default Header;

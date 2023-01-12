import Button from "../_ui/Button";
import Input from "../_ui/Input";
import SquareForm from "../_ui/SquareForm";

import { Container } from "./style";

const Signup = () => {
    return (
        <Container>
            <SquareForm title="Register Here">
                <Input
                    titleLabel="Username"
                    typeInput="text"
                    placeholder="Email"
                />

                <Input
                    titleLabel="Password"
                    typeInput="password"
                    placeholder="Password"
                />

                <Input
                    titleLabel="Repeat password"
                    typeInput="password"
                    placeholder="Password"
                />

                <Button title="Continue" />
            </SquareForm>
        </Container>
    );
};

export default Signup;

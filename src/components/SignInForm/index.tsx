import Link from "next/link";

import SquareForm from "../_ui/SquareForm";
import Button from "../_ui/Button";
import Input from "../_ui/Input";

import { Container } from "./style";

const SignIn = () => {
    return (
        <Container>
            <SquareForm title="Login Here">
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

                <Button title="Sign in" />
                <Link href="/register">
                    <Button title="Sign up" />
                </Link>
            </SquareForm>
        </Container>
    );
};

export default SignIn;

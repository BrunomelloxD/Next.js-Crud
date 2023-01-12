import Head from "../components/Head";
import Navbar from "../components/Navbar";
import SignUpForm from "../components/SignUpForm";

import { Container } from "../styles/pages/Signup";

const Signup = () => {
    return (
        <div>
            <Navbar title="Register page" />
            <Container>
                <Head title="Register" />
            </Container>

            <SignUpForm />
        </div>
    );
};

export default Signup;

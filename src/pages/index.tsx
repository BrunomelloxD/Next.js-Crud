import SignInForm from "../components/SignInForm";
import Head from "../components/Head";
import Navbar from "../components/Navbar";

import { Container } from "../styles/pages/Home";

const Home = () => {
    return (
        <div>
            <Navbar title="Home page" />
            <Container>
                <Head title="Home" />
            </Container>

            <SignInForm />
        </div>
    );
};

export default Home;

import NextHead from "next/head";

interface Props {
    title: string;
}

const Head = (props: Props) => {
    return (
        <NextHead>
            <title>{props.title}</title>
        </NextHead>
    );
};

export default Head;

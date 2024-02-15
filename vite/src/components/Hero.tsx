import styled from "styled-components";
import Letter from "./Letter";

export default function Hero(): JSX.Element {
    const string1 = "The";
    const string2 = "Bes";
    const string3 = "Test";
    const string4 = "Wallet";

    return (
        <Wrapper>
            <h1>
                <div>
                    {string1.split("").map((letter) => {
                        return <Letter startIndex={7}>{letter}</Letter>;
                    })}
                </div>
                <div>
                    {string2.split("").map((letter) => {
                        return <Letter startIndex={3}>{letter}</Letter>;
                    })}
                    {string3.split("").map((letter) => {
                        return <Letter startIndex={0}>{letter}</Letter>;
                    })}{" "}
                    {string4.split("").map((letter) => {
                        return <Letter startIndex={11}>{letter}</Letter>;
                    })}
                </div>
            </h1>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    color: white;
    background-color: hsl(0, 0%, 7%);
    min-height: 50vh;
    text-align: center;

    h1 {
        font-family: "Anton", sans-serif;
        font-size: 6rem;
        letter-spacing: 0.5rem;
    }
`;

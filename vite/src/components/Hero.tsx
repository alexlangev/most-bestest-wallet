import styled from "styled-components";
import Letter from "./Letter";

export default function Hero(): JSX.Element {
    const string1 = "The";
    const string2 = "Bes";
    const string3 = "Test";
    const string4 = "Wallet";
    console.log(string1.split(""));
    return (
        <Wrapper>
            <h1>
                <div>
                    {string1.split("").map((letter) => {
                        return <Letter startIndex={10}>{letter}</Letter>;
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
                        return <Letter startIndex={5}>{letter}</Letter>;
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
    font-size: 6.5em;
    text-align: center;

    h1 {
        font-family: "Anton", sans-serif;
        font-size: 12rem;
        letter-spacing: 0.5rem;
    }
`;

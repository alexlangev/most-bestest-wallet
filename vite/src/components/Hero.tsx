import styled from "styled-components";

export default function Hero(): JSX.Element {
    return (
        <Wrapper>
            <h1>Most BestTest Wallet</h1>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    color: white;
    background-color: hsl(0, 0%, 7%);
    min-height: 30vh;
`;

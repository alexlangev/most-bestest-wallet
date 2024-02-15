import LogIn from "./LogIn";
import styled from "styled-components";
import { useState } from "react";

export default function Main(): JSX.Element {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function logIn(): void {
        setIsLoggedIn(true);
    }

    return (
        <Wrapper>
            {!isLoggedIn && <LogIn onClick={logIn} />}
            {isLoggedIn && (
                <>
                    <TESTER>
                        <label>Send To</label>
                        <input></input>
                        <label>Amount</label>
                        <input></input>
                        <button>Send</button>
                    </TESTER>
                    <TESTER>
                        <h2>Transactions</h2>
                        <span>Jan 1, 2024</span>
                        <div>
                            <span>Confirmed</span>
                            <span>-0.00053259 SepoliaETH</span>
                        </div>
                        <div>
                            <span>Confirmed</span>
                            <span>-0.00053259 SepoliaETH</span>
                        </div>
                        <div>
                            <span>failed</span>
                            <span>-0 SepoliaETH</span>
                        </div>
                        <span>Dec 29, 2023</span>
                        <div>
                            <span>failed</span>
                            <span>-0 SepoliaETH</span>
                        </div>
                    </TESTER>
                </>
            )}
        </Wrapper>
    );
}

const Wrapper = styled.section`
    border-top: 1px white solid;
    background-color: hsl(0, 0%, 7%);
    min-height: 50vh;
    display: flex;
    flex-direction: column;
    color: hsl(0, 0%, 93%);
    align-items: center;
`;

const TESTER = styled.div`
    margin-top: 100px;
    padding: 2rem;
    width: 500px;
    height: 600px;
    border: solid 1px hsl(0, 0%, 93%);
    display: flex;
    flex-direction: column;
    background-color: hsl(252, 88%, 32%);
    -webkit-box-shadow: -12px 8px 0px 0px white;
    box-shadow: -12px 8px 0px 0px white;
    border-radius: 3px;

    button {
        width: fit-content;
    }
`;

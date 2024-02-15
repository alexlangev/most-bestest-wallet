import { ReactNode } from "react";
import styled from "styled-components";

interface ButtonProps {
    children: ReactNode;
    onClick: () => void;
}

export default function Button({
    children,
    onClick,
}: ButtonProps): JSX.Element {
    return <Wrapper onClick={onClick}>{children}</Wrapper>;
}

const Wrapper = styled.button`
    background-color: "hsl(0, 0%, 93%)";
    font-size: 1.2em;
    padding: 0.2em 2em;
`;

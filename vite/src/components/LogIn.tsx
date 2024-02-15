interface LogInPrompts {
    onClick: () => void;
}

export default function LogIn({ onClick }: LogInPrompts): JSX.Element {
    return (
        <>
            <button onClick={onClick}>click me!</button>
        </>
    );
}

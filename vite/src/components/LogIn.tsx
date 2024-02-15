import Button from "./Button";
interface LogInPrompts {
    onClick: () => void;
}

export default function LogIn({ onClick }: LogInPrompts): JSX.Element {
    return (
        <>
            <Button onClick={onClick}>Log in</Button>
        </>
    );
}

import { useState, useEffect } from "react";

interface MousePosition {
    x: number;
    y: number;
}

export default function useMousePosition(): MousePosition {
    const [mousePosition, setMousePosition] = useState({
        x: 0,
        y: 0,
    });

    useEffect(() => {
        function handleMouseMove(event: MouseEvent) {
            setMousePosition({
                x: event.clientX,
                y: event.clientY,
            });
        }

        window.addEventListener("mousemove", handleMouseMove);

        return () => {
            window.removeEventListener("mousemove", handleMouseMove);
        };
    }, []);

    return mousePosition;
}

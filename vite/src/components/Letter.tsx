import { ReactNode } from "react";
import { colorPairs } from "../utils/constants";
import { useState } from "react";
import { motion } from "framer-motion";

interface LetterProps {
    children: ReactNode;
    startIndex: number;
}

export default function Letter({
    children,
    startIndex = 0,
}: LetterProps): JSX.Element {
    const [isHovered, setIsHovered] = useState(false);
    const [colorIndex, setColorIndex] = useState(startIndex);

    function handleMouseOver(): void {
        const nextColorIndex =
            colorIndex + 1 >= colorPairs.length ? 0 : colorIndex + 1;
        setColorIndex(nextColorIndex);
        setIsHovered(true);
    }

    function handleMouseLeave(): void {
        setIsHovered(false);
    }

    const color = colorPairs[colorIndex].textColor;
    const textShadow = isHovered
        ? `8px 5px ${colorPairs[colorIndex].textShadowColor}`
        : `1px 1px ${colorPairs[colorIndex].textShadowColor}`;

    return (
        <motion.span
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseLeave}
            initial={false}
            animate={{
                color,
                textShadow,
            }}
        >
            {children}
        </motion.span>
    );
}

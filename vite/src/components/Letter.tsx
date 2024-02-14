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
    const [colorIndex, setColorIndex] = useState(startIndex);

    function handleColorChange() {
        const nextColorIndex =
            colorIndex + 1 >= colorPairs.length ? 0 : colorIndex + 1;
        setColorIndex(nextColorIndex);
    }

    return (
        <motion.span
            onMouseEnter={handleColorChange}
            initial={false}
            animate={{
                color: colorPairs[colorIndex].textColor,
                textShadow: `8px 5px ${colorPairs[colorIndex].textShadowColor}`,
            }}
        >
            {children}
        </motion.span>
    );
}

import { useState } from "react";

export function useHoverTitle() {
    const [isHover, setIsHover] = useState(null);

    // Xử lý sự kiện pointer enter
    const handlePointerEnter = (name) => {
        if (!isHover) {
            setIsHover(name);
        }
    };

    // Xử lý sự kiện pointer leave
    const handlePointerLeave = () => {
        if (isHover) {
            setIsHover(null);
        }
    };

    return {
        isHover,
        handlePointerEnter,
        handlePointerLeave,
    };
}

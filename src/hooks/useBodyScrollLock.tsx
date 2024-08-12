import { useEffect } from "react";

export const useBodyScrollLock = (isLocked: boolean) => {
    useEffect(() => {
        if (isLocked) {
            // Disables scroll
            document.body.style.overflow = "hidden";
        } else {
            // Enables scroll
            document.body.style.overflow = "auto";
        }

        // Cleaning up function to reset scroll when the hook is no longer in use
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [isLocked]);
};
import { useEffect } from "react";

/**
 * A custom React hook that locks or unlocks body scroll based on the `isLocked` parameter.
 *
 * @param isLocked - A boolean indicating whether to lock (`true`) or unlock (`false`) the body scroll.
 */

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
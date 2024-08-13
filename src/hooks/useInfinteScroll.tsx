import { Dispatch, RefObject, SetStateAction, useEffect } from "react";

/**
 * A custom React hook that implements infinite scroll functionality.
 * It observes a target element (referenced by `observerRef`) and triggers a page
 * increment via `setPage` when the target element becomes fully visible in the viewport.
 * The hook also checks the `loading` state to ensure that new pages are not loaded while
 * data is still being fetched.
 *
 * @param observerRef - A reference to the element to be observed for intersection.
 * @param loading - A boolean indicating if data is currently being loaded.
 * @param setPage - A function to update the current page number.
 */

export const useInfiniteScroll = (
    observerRef: RefObject<Element>,
    loading: boolean,
    setPage: Dispatch<SetStateAction<number>>
) => {
    useEffect(() => {
        const options = {
            root: null, // Use the viewport as the root
            rootMargin: "40px", // Trigger 40px before the element is in view
            threshold: 1.0, // Full visibility required to trigger the observer
        };

        // Callback function to handle intersection
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !loading) {
                // Increment page when target is intersecting and not loading
                setPage(prevState => prevState + 1);
            }
        }, options);

        const currentObserverRef = observerRef.current;

        if (currentObserverRef) {
            // Start observing the target element
            observer.observe(currentObserverRef);
        }

        return () => {
            if (currentObserverRef) {
                // Clean up observer on unmount
                observer.unobserve(currentObserverRef);
            }
        };
    }, [observerRef, loading]);
};

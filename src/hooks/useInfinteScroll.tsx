import {Dispatch, RefObject, SetStateAction, useEffect} from "react";

export const useInfiniteScroll = (
    observerRef: RefObject<Element>,
    loading: boolean,
    setPage: Dispatch<SetStateAction<number>>
) => {
    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "40px",
            threshold: 1.0,
        };

        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && !loading) {
                setPage(prevState => prevState + 1);
            }
        }, options);

        const currentObserverRef = observerRef.current;

        if (currentObserverRef) {
            observer.observe(currentObserverRef);
        }

        return () => {
            if (currentObserverRef) {
                observer.unobserve(currentObserverRef);
            }
        };
    }, [observerRef, loading]);
};

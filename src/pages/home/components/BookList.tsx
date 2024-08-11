import {BookCard} from "../../../components/BookCard.tsx";
import {useBookContext} from "../../../contexts/BookContext.tsx";
import {useEffect, useRef, useState} from "react";
import {searchBooks} from "../../../api/api.tsx";

export const BookList = () => {
    const { query, books, setBooks } = useBookContext();

    const [ page, setPage] = useState(0);

    const [loading, setLoading] = useState(false);

    const observerRef = useRef(null);

    useEffect(() => {
        setLoading(true);
        const handleSetBooksInfiniteScroll = async () => {
            const newBooks = await searchBooks(query, page);

            if (newBooks?.data?.items) {
                setBooks(prevBooks => [...prevBooks, ...newBooks.data.items]);
            }
        }

        handleSetBooksInfiniteScroll().finally(() => setLoading(false));

    }, [page]);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "40px",
            threshold: 1.0
        };

        const observer = new IntersectionObserver(([entries]) => {
            if (entries.isIntersecting && !loading) {
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
        }

    }, [observerRef, loading]);

    return (
        <>
            <section className="p-8 flex items-center gap-3 justify-center flex-wrap">
                {
                    books?.map(
                        (book, index) => (
                            <BookCard key={book} book={book} />
                        )
                    )
                }
            </section>

            {loading &&
                <p className="text-center text-primary-500 text-xl italic font-medium pb-5">Loading...</p>
            }

            <div ref={observerRef} />
        </>
    );
};
import { BookCard } from "../../../components/BookCard.tsx";
import { useBookContext } from "../../../contexts/BookContext.tsx";
import { useEffect, useRef, useState } from "react";
import { searchBooks } from "../../../api/api.tsx";
import { RotateSpinner } from "react-spinners-kit";
import { useInfiniteScroll } from "../../../hooks/useInfinteScroll.tsx";

/**
 * A component that renders a list of books with infinite scroll functionality.
 * Books are fetched from an API based on a search query, and additional books
 * are loaded as the user scrolls down.
 */

export const BookList = () => {
    const { query, books, setBooks, setSelectedBook, setBookModalOpen } = useBookContext();
    const [page, setPage] = useState(0); // Tracks the current page for infinite scrolling
    const [loading, setLoading] = useState(false); // Indicates whether books are being loaded
    const observerRef = useRef(null); // Reference to the element observed for triggering infinite scroll

    // Hook to handle infinite scrolling behavior
    useInfiniteScroll(observerRef, loading, setPage);

    // Fetches books when the page number changes
    useEffect(() => {
        setLoading(true); // Start loading indicator

        const handleSetBooks = async () => {
            const newBooks = await searchBooks(query, page);

            if (newBooks?.data?.items) {
                // If books already exist, append the new books; otherwise, set new books as the state
                setBooks(books ? (prevBooks) => [...prevBooks, ...newBooks.data.items] : newBooks.data.items);
            }
        };

        // Fetch new books and stop loading indicator when done
        handleSetBooks().finally(() => setLoading(false));

    }, [page]);

    return (
        <>
            <section className="p-8 flex items-center gap-3 justify-center flex-wrap">
                {books?.map((book, index) => (
                    <section
                        key={index}
                        onClick={() => {
                            setSelectedBook(book); // Set the selected book for modal display
                            setBookModalOpen(true); // Open the modal with book details
                        }}
                    >
                        <BookCard book={book} />
                    </section>
                ))}
            </section>

            <div className="w-fit pb-7 mx-auto">
                <RotateSpinner size={40} color="#bfbfbf" loading={loading && query} /> {/* Loading spinner */}
            </div>

            {!query && (
                <div className="w-full text-center text-primary font-bold h-dvh">
                    Nothing to display
                </div>
            )}

            <div ref={observerRef} /> {/* Element observed for triggering infinite scroll */}
        </>
    );
};

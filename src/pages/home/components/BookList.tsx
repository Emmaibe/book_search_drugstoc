import {BookCard} from "../../../components/BookCard.tsx";
import {useBookContext} from "../../../contexts/BookContext.tsx";
import {useEffect, useRef, useState} from "react";
import {searchBooks} from "../../../api/api.tsx";
import {RotateSpinner} from "react-spinners-kit";
import {useInfiniteScroll} from "../../../hooks/useInfinteScroll.tsx";

export const BookList = () => {
    const { query, books, setBooks, setSelectedBook, setBookModalOpen } = useBookContext();

    const [ page, setPage] = useState(0);

    const [loading, setLoading] = useState(false);

    const observerRef = useRef(null);

    useInfiniteScroll(observerRef, loading, setPage);

    useEffect(() => {
        setLoading(true);
        const handleSetBooksInfiniteScroll = async () => {
            const newBooks = await searchBooks(query, page);

            if (newBooks?.data?.items) {
                setBooks(books ? prevBooks => [...prevBooks, ...newBooks.data.items] : newBooks.data.items);
            }
        }

        handleSetBooksInfiniteScroll().finally(() => setLoading(false));

    }, [page]);

    return (
        <>
            <section className="p-8 flex items-center gap-3 justify-center flex-wrap">
                {
                    books?.map(
                        (book, index) => (
                            <section key={index} onClick={() => {
                                setSelectedBook(book);
                                setBookModalOpen(true);
                            }}>
                                <BookCard book={book} />
                            </section>
                        )
                    )
                }
            </section>

            <div className="w-fit pb-7 mx-auto">
                <RotateSpinner size={40} color="#C6A7A5" loading={loading && query} />
            </div>

            {
                !query && <div className="w-full text-center text-primary-500 font-bold h-dvh">Nothing to display</div>
            }

            <div ref={observerRef} />
        </>
    );
};
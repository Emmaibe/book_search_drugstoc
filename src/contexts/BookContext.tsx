import { createContext, useContext, useEffect, useState } from "react";
import { searchBooks } from "../api/api.tsx";

interface BookContextType {
    books: any[];
    query: string;
    selectedBook: any;
    setSelectedBook: (book: any) => void;
    setBooks: (books: (prevBooks) => any[]) => void;
    bookModalOpen: boolean;
    setBookModalOpen: (open: boolean) => void;
    setQuery: (query: string) => void;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookContextProvider = ({ children }) => {
    // State to store the search query
    const [query, setQuery] = useState("drugs");

    // State to store the list of books
    const [books, setBooks] = useState([]);

    // State to store the selected book
    const [selectedBook, setSelectedBook] = useState(null);

    // State to control the visibility of the book details modal
    const [bookModalOpen, setBookModalOpen] = useState(false);

    // State to track loading status
    const [loading, setLoading] = useState(true);

    // Effect to fetch books based on the current query
    useEffect(() => {
        const populateBooks = () => {
            searchBooks(query, 0)
                .then((response) => {
                    setBooks(response?.data?.items);
                });
        };

        // Delay the book search to avoid rapid API calls during fast typing
        setTimeout(() => {
            populateBooks();
        }, 500);
    }, [query]);

    return (
        <BookContext.Provider value={{
            books,
            query,
            setQuery,
            setBooks,
            selectedBook,
            setSelectedBook,
            bookModalOpen,
            setBookModalOpen,
            loading,
            setLoading
        }}>
            {children}
        </BookContext.Provider>
    );
};

export default BookContextProvider;

// Custom hook to use the BookContext
export const useBookContext = () => {
    const context = useContext(BookContext);
    if (context === undefined) {
        throw new Error("useBookContext must be used within a BookContextProvider");
    }
    return context;
};

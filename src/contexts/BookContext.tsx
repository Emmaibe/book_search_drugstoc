import {createContext, useContext, useEffect, useState} from "react";
import {searchBooks} from "../api/api.tsx";

interface BookContextType {
    books: any[];
    query: string;
    setBooks: (books: (prevBooks) => any[]) => void;
    setQuery: (query: string) => void;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookContextProvider = ({children}) => {
    const [query, setQuery] = useState("drugs");
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const populateBooks = () => {
            searchBooks(query, 0)
                .then((response) => {
                    setBooks(response?.data?.items);
                });
        }

        setTimeout(() => {
            populateBooks();
        }, 500);

    }, [query]);

    return (
        <BookContext.Provider value={{books, query, setQuery, setBooks, loading, setLoading}}>
            {children}
        </BookContext.Provider>
    )
}
export default BookContextProvider;

export const useBookContext = () => {
    const context = useContext(BookContext);
    if (context === undefined) {
        throw new Error("useBookContext must be used within a BookContextProvider");
    }
    return context;
};
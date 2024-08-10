import {createContext, useContext, useState} from "react";

interface BookContextType {
    books: any[];
    setBooks: (books: any[]) => void;
}

export const BookContext = createContext<BookContextType | undefined>(undefined);

export const BookContextProvider = ({children}) => {
    const [books, setBooks] = useState([]);

    return (
        <BookContext.Provider value={{books, setBooks}}>
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
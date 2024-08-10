import './App.css'
import {Outlet} from "react-router-dom";
import {Header} from "./layouts/Header.tsx";
import {Footer} from "./layouts/Footer.tsx";
import {useBookContext} from "./contexts/BookContext.tsx";
import {useEffect} from "react";
import {searchBooks} from "./api/api.tsx";

function App() {
    const { setBooks } = useBookContext();

    useEffect(() => {
        const populateBooks = () => {
            searchBooks("javascript")
                .then((response) => {
                    setBooks(response.data.items);
                });
        }

        populateBooks();
    }, []);
  return (
        <main>
            <Header />
            <Outlet />
            <Footer />
        </main>
  )
}

export default App

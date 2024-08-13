import { Hero } from "./components/Hero.tsx";
import { BookList } from "./components/BookList.tsx";
import { BookDetailsModal } from "../../components/BookDetailsModal.tsx";
import { useBookContext } from "../../contexts/BookContext.tsx";

/**
 * HomePage component that serves as the main landing page of the application.
 * It displays the Hero section, the list of books, and the book details modal
 * when a book is selected.
 */

export const HomePage = () => {
    const { bookModalOpen } = useBookContext(); // Access the book modal open state from context

    return (
        <section>
            {
                bookModalOpen && <BookDetailsModal /> // Conditionally renders the BookDetailsModal if bookModalOpen is true
            }

            <Hero /> {/* Render the Hero section */}
            <BookList /> {/* Render the list of books */}
        </section>
    );
};

import {Hero} from "./components/Hero.tsx";
import {BookList} from "./components/BookList.tsx";
import {BookDetailsModal} from "../../components/BookDetailsModal.tsx";
import {useBookContext} from "../../contexts/BookContext.tsx";

export const HomePage = () => {
    const {bookModalOpen} = useBookContext();

    return (
        <section>
            {
                bookModalOpen && <BookDetailsModal />
            }
            <Hero />
            <BookList />
        </section>
    );
};
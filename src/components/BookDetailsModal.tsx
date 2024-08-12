import {useBookContext} from "../contexts/BookContext.tsx";
import {useEffect} from "react";
import {useBodyScrollLock} from "../hooks/useBodyScrollLock.tsx";

export const BookDetailsModal = () => {
    const { bookModalOpen, setBookModalOpen, selectedBook } = useBookContext();

    useBodyScrollLock(bookModalOpen);

    return (
        <>
            <section
                className="z-40 fixed top-0 w-[100vw] h-[100vh] bg-black bg-opacity-80 backdrop-filter backdrop-blur-md"
            />

            <section
                onClick={() => setBookModalOpen(false)}
                className="absolute top-0 w-full h-full z-50 flex-center"
            >
                <div className="w-full max-w-[700px] h-dvh max-h-[700px] bg-primary-500 rounded-xl ">

                </div>
            </section>
        </>
    );
};
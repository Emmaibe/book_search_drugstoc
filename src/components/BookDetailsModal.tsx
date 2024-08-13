import { useBookContext } from "../contexts/BookContext.tsx";
import { useBodyScrollLock } from "../hooks/useBodyScrollLock.tsx";
import useFormatDate from "../hooks/useFormatDate.tsx";

/**
 * BookDetailsModal component displays detailed information about a selected book.
 * It shows the book's cover, title, authors, description, publisher, and published date.
 * The modal also locks the body scroll when open and allows users to close it by clicking
 * on the background overlay or the close button.
 */

export const BookDetailsModal = () => {
    
    // Extract necessary values from BookContext
    const { bookModalOpen, setBookModalOpen, selectedBook } = useBookContext();

    // Extract authors from selected book data
    const authors: string[] = selectedBook?.volumeInfo?.authors;

    // Lock body scroll when modal is open
    useBodyScrollLock(bookModalOpen);

    return (
        <section className="fixed top-0 w-[100vw] h-[100vh] flex-center" style={{ zIndex: "100" }}>

            {/* Background overlay that closes the modal on click */}
            <section
                onClick={() => setBookModalOpen(false)}
                className="z-40 fixed top-0 w-[100vw] h-[100vh] bg-black bg-opacity-80 backdrop-filter backdrop-blur-md"
            />

            {/* Modal content */}
            <div className="relative w-full max-w-[700px] h-dvh max-h-[700px] bg-primary-500 rounded-xl p-5" style={{ zIndex: "200" }}>

                {/* Close button */}
                <div className="flex justify-end">
                    <div
                        onClick={() => setBookModalOpen(false)}
                        className="cursor-pointer"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </div>
                </div>

                {/* Modal content scrollable area */}
                <div className="overflow-y-scroll max-h-[630px]">
                    <div className="flex items-center gap-5 max-md:flex-col max-md:items-start">

                        {/* Display book cover */}
                        <div className="min-w-[200px] min-h-[250px] overflow-hidden rounded-lg border-4 border-primary-100 shadow-xl max-md:mx-auto">
                            <img
                                src={selectedBook?.volumeInfo?.imageLinks?.thumbnail}
                                alt="book cover"
                                width={"100%"}
                                height={"100%"}
                                className="rounded-lg object-fill"
                            />
                        </div>

                        {/* Display book title and authors */}
                        <section>
                            <div className="text-black text-md">
                                <h3 className="text-lg font-bold text-primary-100">
                                    Book Title:
                                </h3>

                                <p>
                                    {selectedBook?.volumeInfo?.title || "No Title available"}
                                </p>
                            </div>

                            <div className="text-black text-md mt-2">
                                <h3 className="text-lg font-bold text-primary-100">
                                    Author{authors?.length > 1 ? 's' : '' }:
                                </h3>

                                {/* Display list of authors */}
                                {authors?.map((author: string) => (
                                    <p key={author} className="">{author}</p>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Display book description */}
                    <div className="text-black mt-3">
                        <h3 className="text-xl font-bold mb-2 text-primary-100">
                            Book Description:
                        </h3>

                        <p>
                            {selectedBook?.volumeInfo?.description || "No description available"}
                        </p>
                    </div>

                    {/* Display publication information */}
                    <section>
                        <h3 className="text-lg font-bold text-primary-100 mt-5 mb-3">
                            Publication Information
                        </h3>

                        <section className="flex-between gap-3 max-sm:flex-col max-sm:items-start">

                            {/* Display publisher information */}
                            <div className="text-black text-md">
                                <h3 className="text-md font-bold text-primary-100">
                                    Publisher:
                                </h3>

                                <p>
                                    {selectedBook?.volumeInfo?.publisher || "No publisher info available"}
                                </p>
                            </div>

                            {/* Display publication date */}
                            <div className="text-black text-md">
                                <h3 className="text-md font-bold text-primary-100">
                                    Published Date:
                                </h3>

                                <p>
                                    {useFormatDate(selectedBook?.volumeInfo?.publishedDate) || "No date available"}
                                </p>
                            </div>
                        </section>
                    </section>
                </div>
            </div>
        </section>
    );
};

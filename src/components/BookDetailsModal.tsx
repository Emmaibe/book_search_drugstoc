import {useBookContext} from "../contexts/BookContext.tsx";
import {useBodyScrollLock} from "../hooks/useBodyScrollLock.tsx";
import useFormatDate from "../hooks/useFormatDate.tsx";

export const BookDetailsModal = () => {
    const { bookModalOpen, setBookModalOpen, selectedBook } = useBookContext();

    const authors: string[] = selectedBook?.volumeInfo?.authors;

    useBodyScrollLock(bookModalOpen);

    return (
        <section className="fixed top-0 w-[100vw] h-[100vh] flex-center" style={{zIndex: "100"}}>
            <section
                onClick={() => setBookModalOpen(false)}
                className="z-40 fixed top-0 w-[100vw] h-[100vh] bg-black bg-opacity-80 backdrop-filter backdrop-blur-md"
            />

            <div className="relative w-full max-w-[700px] h-dvh max-h-[700px] bg-primary-500 rounded-xl p-5" style={{zIndex: "200"}}>
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

                <div className="overflow-y-scroll max-h-[630px]">
                    <div className="flex items-center gap-5">
                        <div className="w-[200px] h-[250px] overflow-hidden rounded-lg border-4 border-primary-100 shadow-xl">
                            <img
                                src={selectedBook?.volumeInfo?.imageLinks?.thumbnail}
                                alt="book cover"
                                width={"100%"}
                                height={"100%"}
                                className="rounded-lg object-fill"
                            />
                        </div>

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

                                <>
                                    {authors?.map((author: string) =>
                                        <p key={author} className="max-w-[220px] truncate">{author}</p>
                                    )}
                                </>
                            </div>
                        </section>
                    </div>

                    <div className="text-black mt-3">
                        <h3 className="text-xl font-bold mb-2 text-primary-100">
                            Book Description:
                        </h3>

                        <p>
                            {selectedBook?.volumeInfo?.description || "No description available"}
                        </p>
                    </div>

                    <section>
                        <h3 className="text-lg font-bold text-primary-100 mt-5 mb-3">
                            Publication Information
                        </h3>

                        <section className="flex-between">
                            <div className="text-black text-md">
                                <h3 className="text-md font-bold text-primary-100">
                                    Publisher:
                                </h3>

                                <p>
                                    {selectedBook?.volumeInfo?.publisher || "No publisher info available"}
                                </p>
                            </div>

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
import React from "react";
import useFormatDate from "../hooks/useFormatDate.tsx";

/**
 * BookCard component displays information about a single book.
 * It includes the book's cover image, title, authors, and publication date.
 * The component is designed to be clickable, allowing users to select a book
 * for more details.
 *
 * @param {Object} book - The book object containing details such as title,
 *                        authors, image links, and publication date and more.
 */

export const BookCard = ({ book }: any) => {
    // Extract authors from book data
    const authors: string[] = book?.volumeInfo?.authors;

    return (
        <section className="cursor-pointer grid grid-rows-9 rounded-lg overflow-hidden bg-primary-500 w-[250px] h-[380px] shadow-xl">
            <div className="row-span-5 flex items-end justify-center">
                <div className="w-[180px] h-[185px] overflow-hidden rounded-lg">

                    {/* Display book cover thumbnail */}
                    <img
                        src={book?.volumeInfo?.imageLinks?.thumbnail}
                        alt="book cover"
                        width={"100%"}
                        height={"100%"}
                        className="rounded-lg object-fill"
                    />
                </div>
            </div>
            <div className="row-span-4 flex flex-col justify-between p-3">
                <div className="flex flex-col justify-between items-center h-full py-2">

                    {/* Display book title */}
                    <h1 className="text-center text-primary-50 font-bold text-md line-clamp-2">
                        {book?.volumeInfo?.title}
                    </h1>

                    <div className="text-center text-sm">

                        {/* Conditionally display "Author" or "Authors" based on the length of the authors array */}
                        <p className="text-primary-100">Author{authors?.length > 1 ? 's' : ''}: </p>
                        
                        <div className="line-clamp-2 flex items-center text-primary-100">

                            {/* Display the first author */}
                            <p className="text-center text-primary-50 max-w-[220px] truncate">
                                {authors?.[0]}
                            </p>

                            {/* Display additional author count if applicable */}
                            <p className="text-[12px] text-primary-50">
                                {authors?.length > 1 ? `(+${authors?.length - 1})` : '' }
                            </p>
                        </div>
                    </div>
                </div>
                <div className="border-t border-primary-100 pt-3">
                    
                    {/* Format and display publish date */}
                    <p role="publishedDate" className="text-center text-primary-50 text-[12px]">
                        <span className="text-primary-100">Publish Date: </span>{useFormatDate(book?.volumeInfo?.publishedDate)}
                    </p>
                </div>
            </div>
        </section>
    );
};

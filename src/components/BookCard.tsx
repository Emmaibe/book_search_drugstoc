import useFormatDate from "../hooks/useFormatDate.tsx";

export const BookCard = ({ book }) => {
    const authors: string[] = book?.volumeInfo?.authors;

    return (
        <section className="cursor-pointer grid grid-rows-9 rounded-lg overflow-hidden bg-primary-500 w-[250px] h-[380px] shadow-xl">
            <div className="row-span-5 flex items-end justify-center">
                <div className="w-[180px] h-[185px] overflow-hidden rounded-lg">
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
                    <h1 className="text-center text-primary-100 font-bold text-md line-clamp-2">{book?.volumeInfo?.title}</h1>

                    <div className="text-center text-sm">
                        <p className="">Author{authors?.length > 1 ? 's' : '' }: </p>

                        <div className="line-clamp-2 flex items-center text-primary-100">
                            {authors?.slice(0, 1).map((author: string) =>
                                <p key={author} className="text-center text-primary-100 max-w-[220px] truncate">{author}</p>
                            )}
                            <p className="text-[12px]">
                                {authors?.length > 1 ? `(+${authors?.length - 1})` : '' }
                            </p>
                        </div>

                    </div>
                </div>
                <div className="border-t border-primary-100 pt-3">
                    <p className="text-center text-[12px]">Publish Date: {useFormatDate(book?.volumeInfo?.publishedDate)}</p>
                </div>
            </div>
        </section>
    );
};
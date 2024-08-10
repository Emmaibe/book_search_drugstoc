import useFormatDate from "../hooks/useFormatDate.tsx";

export const BookCard = () => {
    return (
        <section className="grid grid-rows-9 rounded-2xl overflow-hidden bg-primary-500 w-[250px] h-[350px] shadow-xl">
            <div className="row-span-7">
                <img
                    src="http://books.google.com/books/content?id=jLkrDwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
                    alt="book cover"
                    className=" w-full h-full"
                />
            </div>
            <div className="row-span-2">
                <h1 className="text-center text-white font-bold text-lg">Adrian Roberts</h1>
                <p>{useFormatDate("2023-09-05")}</p>
            </div>
        </section>
    );
};
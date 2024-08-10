import searchImg from "../../../assets/icons/search.png"
import {useBookContext} from "../../../contexts/BookContext.tsx";

export const Hero = () => {

    return (
        <section className="w-full flex-col justify-center items-center py-10 mt-14">
            <h1 className="max-w-[600px] mx-auto font-bold text-2xl md:text-5xl text-center">
                Expand your knowledge with our vast collection of books
            </h1>

            <div className="relative flex items-center border-2 p-1 gap-2 bg-primary-500 w-fit rounded-full mx-auto mt-10">
                <div className="absolute right-5 cursor-pointer">
                    <img
                        src={searchImg}
                        alt="search image"
                        width={30}
                        height={30}
                    />
                </div>

                <input
                    type="search"
                    placeholder="search for books"
                    className="search-input"
                />
            </div>
        </section>
    );
};
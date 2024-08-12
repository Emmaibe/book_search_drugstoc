import searchImg from "../../../assets/icons/search.png"
import {useBookContext} from "../../../contexts/BookContext.tsx";

export const Hero = () => {
    const {query, setQuery} = useBookContext();

    return (
        <section className="w-full flex-col justify-center items-center py-10 px-2.5 mt-[80px]">
            <h1 className="max-w-[600px] mx-auto font-bold text-2xl md:text-5xl text-center">
                Expand your knowledge with our vast collection of books
            </h1>

            <div className="relative z-10 flex items-center border-2 p-1 gap-2 bg-primary-500 max-w-[600px] rounded-full mx-auto mt-10">
                <div className="absolute right-5 cursor-pointer max-sm:hidden">
                    <img
                        src={searchImg}
                        alt="search"
                        width={30}
                        height={30}
                    />
                </div>

                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="search for books"
                    className="search-input"
                />
            </div>
        </section>
    );
};
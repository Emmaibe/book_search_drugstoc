import searchImg from "../../../assets/icons/search.png";
import { useBookContext } from "../../../contexts/BookContext.tsx";

/**
 * Hero section of the page that includes a title and a search input.
 * The search input allows users to search for books by updating the `query` state in the context.
 */

export const Hero = () => {
    const { query, setQuery } = useBookContext(); // Access the query state and setter function from context

    return (
        <section className="w-full flex-col justify-center items-center py-10 px-2.5 mt-[80px]">
            {/* Main title for the hero section */}
            <h1 className="max-w-[600px] mx-auto font-bold text-2xl md:text-5xl text-center">
                Expand your knowledge with our vast collection of books
            </h1>

            {/* Search input area */}
            <div className="relative z-10 flex items-center border-2 p-1 gap-2 bg-primary-500 max-w-[600px] rounded-full mx-auto mt-10">
                {/* Search icon (hidden on small screens) */}
                <div className="absolute right-5 cursor-pointer max-sm:hidden">
                    <img
                        src={searchImg}
                        alt="search"
                        width={30}
                        height={30}
                    />
                </div>

                {/* Search input field */}
                <input
                    type="search"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)} // Update the query state on user input
                    placeholder="search for books"
                    className="search-input"
                />
            </div>
        </section>
    );
};

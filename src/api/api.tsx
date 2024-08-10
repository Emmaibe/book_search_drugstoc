import axios from 'axios';

export const searchBooks = async (query: string) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&key=${apiKey}`);
    } catch (error) {
        if (axios.isAxiosError(error)) {
            console.log("Error message: ", error.message);

            return error.message;
        } else {
            console.log("Unexpected error: ", error);

            return "Unexpected error, Failed to fetch books";
        }
    }
}
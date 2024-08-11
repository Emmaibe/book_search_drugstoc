import axios from 'axios';
import {useBookContext} from "../contexts/BookContext.tsx";

export const searchBooks = async (query: string, startIndex: number) => {
    const apiKey = import.meta.env.VITE_API_KEY;

    try {
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex * 10}&key=${apiKey}`);
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
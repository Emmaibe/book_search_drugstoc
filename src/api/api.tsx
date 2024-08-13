import axios from 'axios';

/**
 * Searches for books using the Google Books API based on the provided query and start index.
 *
 * @param query - The search term to query the Google Books API.
 * @param startIndex - The index of the first book to retrieve (used for pagination).
 * @returns A promise that resolves to the API response containing book data or an error message.
 */

export const searchBooks = async (query: string, startIndex: number) => {
    
    // Retrieve API key from environment variables
    const apiKey = import.meta.env.VITE_API_KEY; 

    try {

        // Make a GET request to the Google Books API with the provided query and startIndex
        return await axios.get(`https://www.googleapis.com/books/v1/volumes?q=${query}&startIndex=${startIndex * 10}&key=${apiKey}`);

    } catch (error) {
        
        // Check if the error is an Axios error
        if (axios.isAxiosError(error)) {

            // Log and return error message
            console.log("Error message: ", error.message); 

            return error.message; 
        } else {
            
            // Log and return a message for unexpected errors
            console.log("Unexpected error: ", error);

            return "Unexpected error, Failed to fetch books";
        }
    }
}

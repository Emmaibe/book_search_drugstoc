import { createBrowserRouter } from "react-router-dom";
import App from "../App.tsx";
import { HomePage } from "../pages/home/HomePage.tsx";

/**
 * Sets up the routing configuration for the application using React Router.
 *
 * The base path "/" renders the App component, which serves as the main layout.
 * The child route handles the home page.
 */

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // Main application layout
        children: [
            { path: '', element: <HomePage /> } // Home page route
        ]
    }
]);

# BookStoc

BookStoc is a React application that uses the Google Books 
API to search for and display book information.

## Features
- Search for books by title, author, or ISBN.
- View detailed information about a book, including its title, author, description, and more.
- Responsive design for mobile and desktop.

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/en/) (version 14 or later)
- [npm](https://www.npmjs.com/) (version 7 or later) or [yarn](https://yarnpkg.com/) (version 1.22 or later)
- [Git](https://git-scm.com/)

## Getting Started

### 1. Clone the repository
To get started with BookStoc, clone the repository to your local machine:


```bash
git clone https://github.com/Emmaibe/book_search_drugstoc.git && cd book_search_drugstoc
```
Note: This command clones the repository and automatically navigates into the project directory, saving you from having to run two separate commands.


### 2. Install dependencies
Install the required dependencies using npm or yarn:
```bash
# Using npm or yarn
npm install || yarn install
```
Note: This command first attempts to install the dependencies using `npm`. 
If npm is not installed or the command fails for any reason, it will automatically 
attempt to install the dependencies using `yarn`. This ensures compatibility
with different package managers.


### 3. Set up environment variables
BookStoc requires a Google API key to access the Google Books API. Follow these steps to set up your environment variables:

1. Create a new project in the [Google Cloud Console](https://console.cloud.google.com/). 
2. Enable the Google Books API for your project. 
3. Create an API key in the "Credentials" section. 
4. In the root of the project, create a `.env` file and add your API key:

```plaintext
VITE_API_KEY=your-google-books-api-key
```
Note: Replace `your-google-books-api-key` with the actual API key you generated in the Google Cloud Console.

### 4. Start the development server
Once you've set up your environment variables, you can start the development server:
```bash
# Using npm or yarn
npm run dev || yarn dev
```

The development server will start at `http://localhost:5173`. or any other port number that is available.
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./routes/Routes.tsx";
import BookContextProvider from "./contexts/BookContext.tsx";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BookContextProvider>
          <RouterProvider router={router} />
      </BookContextProvider>
  </StrictMode>,
)

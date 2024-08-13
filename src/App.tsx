import './App.css'
import {Outlet} from "react-router-dom";
import {Header} from "./layouts/Header.tsx";

function App() {

  return (
        <main>
            <Header />
            <Outlet />
        </main>
  )
}

export default App

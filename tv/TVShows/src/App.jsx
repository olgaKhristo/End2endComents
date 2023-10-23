// number 3 to go after index to put all pages you need to render inside return()
// from this go to bild roures start with Bash to npm install react-router-dom@6 then go to  main.jsx to import browser router
// after you done with routes create a Header in components folder
import "../src/App.css"
import * as Pages from "../src/pages"
//import Routes and Router
import {Routes, Route} from "react-router-dom"
import { Header } from "./components"
// then wrap all routes in Router

function App() {
    return (
        <>
          <Routes>
        
            <Route path="/" element={<Header/>}/>
                <Route index element={<Pages.HomePage/>}/>
                <Route path="/shows" element={<Pages.ShowsPage/>}/>
                <Route path="/shows/:id" element={<Pages.ShowPage/>}/>
                <Route path="/search" element={<Pages.SearchPage/>}/>
                <Route path="*" element={<Pages.NotFoundPage/>}/>
            <Route/>
            
          </Routes>
        </>
    )
}

export default App;
import Navbar from "./components/Navbar/Navbar";
import AddFood from "./components/AddFood/AddFood";
import Order from "./components/Order/Order"
import Setup from "./components/Setup/Setup"
import Services from "./components/Services/Services"
import Page from "./components/sub-components/404page"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar/>}>
                        <Route index element={<AddFood/>} />
                        <Route path="Order" element={<Order/>} />
                        <Route path="Setup" element={<Setup />} />
                        <Route path="Services" element={<Services />} />
                        <Route path="*" element={<Page />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;

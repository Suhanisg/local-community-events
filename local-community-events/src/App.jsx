import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import EventDetails from "./pages/EventDetails";
import Navbar from "./components/Navbar";
import CreateEvent from "./pages/CreateEvent";

function App() {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/event/:id" element={<EventDetails />} />
                <Route path="/create" element={<CreateEvent />} />
            </Routes>
        </>
    );
}

export default App;
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Landing from '../pages/Landing';
import Login from '../pages/Login';
import Register from "../pages/Register";
import Home from '../pages/Home';
import Noticias from '../pages/Noticias';
import Information from '../pages/Information';

import NotFound from '../pages/NotFound';

function App() {
    return (
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Landing />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/noticias" element={<Noticias />} />
                    <Route path="/masInformacion" element={<Information />} />

                    <Route path="/*" element={<NotFound />} />
                </Routes>
        </BrowserRouter>
    );
}

export default App;
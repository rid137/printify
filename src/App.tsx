import { useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import Request from './pages/request';
import Nav from './components/nav';
import Footer from './components/footer';
import { AuthContextProvider } from './context/AuthContext';
import Dashboard from './pages/dashboard';
import Invoice from './pages/invoice';
import Notfound from './pages/notfound';
// import { AuthContextProvider } from './context/AuthContext';

export const App = () => {
    const [showModal, setShowModal] = useState(false)

    return (
        // <div className="p-4">
            <BrowserRouter>
            <AuthContextProvider>
                <Nav showModal={showModal} setShowModal={setShowModal} />
                <div className="bg-gray-200">
                    <Routes>
                        <Route path="/" element={<Home showModal={showModal} setShowModal={setShowModal} />} />
                        <Route path='/request' element={<Request showModal={showModal} setShowModal={setShowModal} />} />
                        <Route path='/dashboard' element={<Dashboard />} />
                        <Route path='/invoice/:id' element={<Invoice />} />
                        <Route path='*' element={<Notfound />} />

                    </Routes>
                </div>
                <Footer />
            </AuthContextProvider>
        </BrowserRouter>
        // </div>
    )
}
import './App.css';
import Header from './partial/header';
import About from './partial/About';
import Footer from './partial/Footer';
import Home from './Home';
import { Route, Routes } from 'react-router-dom';
import PageDetail from './pages/portfolio/PageDetail';

function App() {
    return ( 
    <div className = "App">
        <Header/>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="portfolio/:slug" element={<PageDetail />} />
            {/* <Route path = '*' element = {<NotFound />} /> */}
        </Routes>
        <Footer/>
    </div>
    );
}

export default App;

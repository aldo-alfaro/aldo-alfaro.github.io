// import logo from './logo.svg';
import './App.css';
import Header from './partial/header';
import Main from './partial/Main';
import About from './partial/About';
import Services from './partial/Services';
import Portfolio from './partial/Portfolio';
import Courses from './partial/Courses';
// import Studies from './partial/Studies';
import Footer from './partial/Footer';
import Skills from './partial/Skills';

function App() {
    return ( 
    <div className = "App">
        <Header/>
        <Main/>
        <About/>
        <Services/>
        <Courses/>
        <Skills/>
        <Portfolio/>
        <Footer/>
    </div>
    );
}

export default App;

// import logo from './logo.svg';
import './App.css';
import Header from './partial/header';
import Main from './partial/Main';
import About from './partial/About';
import Services from './partial/Services';
import Portfolio from './partial/Portfolio';

function App() {
    return ( 
    <div className = "App">
        <Header/>
        <Main/>
        <About/>
        <Services/>
        <Portfolio/>
    </div>
    );
}

export default App;
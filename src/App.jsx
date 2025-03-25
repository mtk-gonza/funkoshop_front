import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router.jsx';
import { Header, Footer } from './components/index.js';
import { Providers } from './context/index.jsx';

export function App() {

    return (
        <Providers>
            <BrowserRouter>
                <Header/>
                <Router/>
                <Footer/>                
            </BrowserRouter>
        </Providers>
    );
};
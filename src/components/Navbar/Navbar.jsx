import { Auth } from './../Auth/Auth';
import './Navbar.css';

export const Navbar = ({ isAuthenticated }) => {

    return (
        <div className='navbar'>
            <div className='container__navbar'>
                <div className='logo__navbar'>
                    <img src='/images/logoblanco.png' alt='logo de la provincia' />
                </div>
                <div className='title__navbar'>
                    <h2>SG Inventory</h2>
                </div>
                <div className='auth__navbar'>
                    {isAuthenticated ? (
                        <Auth />
                    ) : (
                        <div></div>
                    )}
                </div>
            </div>
        </div>
    );
}
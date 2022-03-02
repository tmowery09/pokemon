import { useEffect } from 'react';
import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import './Navigation.css';

export default function Navigation() {
    let navigate = useNavigate();
    let location = useLocation();

    useEffect(() => {
        let screen = location.pathname == '/' ? 'search' : location.pathname;
        navigate(`${screen}`);
    }, []);

    return(
        <nav>
            <NavLink title='search' aria-label='search page' to={`/search`} className='link'>search</NavLink>
            <NavLink title='favorites' aria-label='favorites page' to={`/favorites`} className='link'>favorites</NavLink>
        </nav>
    )
}
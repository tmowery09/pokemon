import Navigation from '../navigation/Navigation.js';
import './Header.css';

export default function Header() {    
    return(
        <div className='header'>
            <div className='title' title='pokemon info' aria-label='pokemon info header'>pokemon info</div>
            <Navigation/>
        </div>
    )
}
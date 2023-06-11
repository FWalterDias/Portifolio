import './style.css';
import logoHeader from '../../assets/logo-light.svg';
import Nav  from '../Nav/index';

export default function Header() {
    return (
        <header>
            <img src={logoHeader} alt='logo-header' />
            <Nav />
        </header>
    )
}
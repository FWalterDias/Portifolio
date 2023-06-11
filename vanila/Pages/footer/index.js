import './style.css';
import logoFooter from '../../assets/logo-dark.svg';
import RedesSociais from '../redesSociais';
import Nav from '../Nav';
export default function Footer(){
    return(
        <footer>
            <div>
                <img src={logoFooter}
                alt='logo-header' 
                style={{marginRight: '20px'}}/>
                <Nav/>
            </div> 
            <RedesSociais />
        </footer>
    );
}
import './style.css';
import gitHub from '../../assets/icons/github-light.svg';
import linkedin from '../../assets/icons/linkedin-light.svg';
import twitter from '../../assets/icons/twitter-light.svg';

export default function RedesSociais() {
    return (
        <div className='redes-sociais'>
            <ul className='ul-redes-sociais'>
                <li>
                    <a href='#'>
                        <img src={gitHub} />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={linkedin} />
                    </a>
                </li>
                <li>
                    <a href='#'>
                        <img src={twitter} />
                    </a>
                </li>
            </ul>
        </div>

    );
}
import './Footer.css';
import { AiFillInstagram, AiFillLinkedin } from 'react-icons/ai'; 
import { FaFacebook } from 'react-icons/fa';

function Footer() {
    return (
        <footer style={{position: 'relative', bottom: '0px', width: '100%'}}>
            <div className="container">
                <div className="connections">
                    <a href="/#" id="instaIcon"><AiFillInstagram /></a>
                    <a href="/#" id="fbIcon"><FaFacebook /></a>
                    <a href="/#" target="_blank" rel="noreferrer" id="linkedIcon"><AiFillLinkedin /></a>
                </div>
                All Rights Reserved &copy; 2022
            </div>
        </footer >
    )
}

export default Footer;
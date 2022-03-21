import './header.css'
import header_logo from "../img/Header-logo.webp"

function Header(){
    return(
    <div className='header'>
        <div>
            <img src={header_logo} alt="Logo" style={{cursor: "pointer", marginTop: "30px"}}></img>
        </div>
        <div>
            <ul>
                <li className='header-buttons'>ESILEHT</li>
                <li className='header-buttons' style={{color: "#814d08"}}>UUS</li>
                <li className='header-buttons'>MÖÖBEL ⏷</li>
                    <ul className='dropdown-content'>
                        <li>Hey</li>
                    </ul>
                <li className='header-buttons'>VALGUSTID ⏷</li>
                <li className='header-buttons'>AKSESSUAARID ⏷</li>
                <li className='header-buttons'>KÖÖKI ⏷</li>
                <li className='header-buttons'>TEKSTIILID ⏷</li>
                <li className='header-buttons'>TARVIKUD ⏷</li>
                <li className='header-buttons'>LEIUNURK</li>
            </ul>
        </div>
    </div>

    );
}

export default Header;
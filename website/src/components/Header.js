import './header.css'
import header_logo from "../img/Header-logo.webp"

function Header(){
    return(<>
    <div>
        <img src={header_logo} alt="Logo" className='header-logo'></img>
    </div>
    <div className='header'>
        <div>
            
        </div>
        <div style={{marginTop: "30px"}}>
            <ul style={{padding: "0px", textAlign: "center"}}>
                <li className='header-buttons' style={{fontWeight: "600"}}>
                    <a href="https://nordicdesignhome.ee/" className="single-header-button">ESILEHT</a>
                </li>
                <li className='header-buttons' style={{color: "#814d08"}}>
                    <a href="https://nordicdesignhome.ee/collections/kevadine-tuhjendusmuuk-22" className="single-header-button">TÜHJENDUSMÜÜK</a>
                </li>
                <a className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/uus" className="single-header-button">UUS</a>
                </a>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/terrassile-22" className="single-header-button">TERASSILE ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/aksessuaarid-terrassile-22"} className="single-dropdown">AKSESSUAARID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/baaritoolid-terrassile-22"} className="single-dropdown">BAARITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/diivani-ja-abilauad-terrassile-22"} className="single-dropdown">DIIVANI- JA ABILAUAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/diivanid-terrassile-22"} className="single-dropdown">DIIVANID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/pingid-ja-taburetid-terrassile-22"} className="single-dropdown">PINGID JA TABURETID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/soogilauad-terrassile-22"} className="single-dropdown">SÖÖGILAUAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/soogitoolid-terrassile-22"} className="single-dropdown">SÖÖGITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/tekstiilid-terrassile"} className="single-dropdown">TEKSTIILID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/tugitoolid-terrassile-22"} className="single-dropdown">TUGITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/valgustid-terrassile-22"} className="single-dropdown">VALGUSTID</li>
                    </ul>
                </li>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/moobel" className="single-header-button">MÖÖBEL ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-moobel"} className="single-dropdown">EKSPRESS MÖÖBEL</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/abilauad"} className="single-dropdown">ABILAUD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/baaritoolid"} className="single-dropdown">BAARITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/diivanid"} className="single-dropdown">DIIVANID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/diivanilauad"} className="single-dropdown">DIIVANILAUD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kirjutuslauad-1"} className="single-dropdown">KIRJUTUSLAUD, KONTORITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/konsoollauad"} className="single-dropdown">KONSOOLLAUAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kummutid-ja-telekaalused"} className="single-dropdown">KUMMUTID, TELEKAALUSED</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/magamistuppa"} className="single-dropdown">MAGAMISTUPPA</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/soogilauad"} className="single-dropdown">SÖÖGILAUAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/soogitoolid"} className="single-dropdown">SÖÖGITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/seinariiulid"} className="single-dropdown">SEINARIIULID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/seisvad-riiulid"} className="single-dropdown">SEISVAD RIIULID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/tugitoolid"} className="single-dropdown">TUGITOOLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/pingid-tumbad"} className="single-dropdown">TUMBAD, PINGID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/vitriinkapid"} className="single-dropdown">VITRIINKAPID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/muu-1"} className="single-dropdown">MUU</li>
                    </ul>
                </li>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/valgustid" className="single-header-button">VALGUSTID ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-valgustid"} className="single-dropdown">EKSPRESS VALGUSTID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/laelambid"} className="single-dropdown">LAELAMBID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/laualambid"} className="single-dropdown">LAUALAMBID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/porandalambid"} className="single-dropdown">PÕRANDALAMBID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/seinalambid"} className="single-dropdown">SEINALAMBID</li>
                    </ul>
                </li>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/aksessuaarid" className="single-header-button">AKSESSUAARID ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-aksessuaarid"} className="single-dropdown">EKSPRESS AKSESSUAARID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-elustiilikaubad"} className="single-dropdown">EKSPRESS ELUSTIILITOOTED</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-peeglid"} className="single-dropdown">EKSPRESS PEEGLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-seinapildid"} className="single-dropdown">EKSPRESS SEINAPILDID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-vaasid-ja-lillepotid"} className="single-dropdown">EKSPRESS VAASID & LILLEPOTID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/elustiilikaubad"} className="single-dropdown">ELUSTIILITOOTED</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kandikud"} className="single-dropdown">KANDIKUD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/karbid-korvid"} className="single-dropdown">KARBID. KORVID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kellad"} className="single-dropdown">KELLAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kontorisse"} className="single-dropdown">KONTORISSE</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kuunlajalad-kuunlad"} className="single-dropdown">KÜÜNLAJALAD, KÜÜNLAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/lillepotid"} className="single-dropdown">LILLEPOTID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/nagid-stanged"} className="single-dropdown">NAGID, STANGED</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/peeglid"} className="single-dropdown">PEEGLID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/pildiraamid-postrid"} className="single-dropdown">PILDIRAAMID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/seinapildid"} className="single-dropdown">SEINAPILDID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/vaasid"} className="single-dropdown">VAASID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/muu"} className="single-dropdown">MUU</li>
                    </ul>
                </li>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/tableware" className="single-header-button">KÖÖKI ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-kooki"} className="single-dropdown">EKSPRESS KÖÖKI</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kausid-ja-hoiupurgid"} className="single-dropdown">KAUSID, HOIUPURGID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/koogitarvikud"} className="single-dropdown">KÖÖGITARVIKUD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/lauanoud"} className="single-dropdown">LAUANÕUD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/serveerimisnoud"} className="single-dropdown">SERVEERIMISNÕUD</li>
                    </ul>
                </li>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/kodutekstiilid" className="single-header-button">TEKSTIILID ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-tekstiil"} className="single-dropdown">EKSPRESS TEKSTIILID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/dekoratiivpadjad-1"} className="single-dropdown">DEKORATIIVPADJAD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/koogitekstiilid"} className="single-dropdown">KODUTEKSTIILID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/pleedid-ja-paevatekid"} className="single-dropdown">PLEEDID JA PÄEVATEKID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/tekstiil"} className="single-dropdown">VAIBAD</li>
                    </ul>
                </li>
                <li className='header-buttons'>
                    <a href="https://nordicdesignhome.ee/collections/kapinupud" className="single-header-button">TARVIKUD ⏷</a>
                    <ul className='dropdown-content'>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-kapinupud"} className="single-dropdown">EKSPRESS NAGID & KÄEPIDEMED</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ekspress-vannituppa"} className="single-dropdown">EKSPRESS VANNITOATARVIKUD</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kapinupud"} className="single-dropdown">KAPINUPUD-KÄEPIDEMED</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/ukselingid"} className="single-dropdown">UKSELINGID</li>
                        <li onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/vannitoatarvikud"} className="single-dropdown">VANNITOATARVIKUD</li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>

    </>);
}

export default Header;
import './Footer.css'
import Facebook from '../../img/Icons/facebook.png'
import Instagram from '../../img/Icons/instagram.png'

function Footer(){
    return(
        <div className='footer-background'>
            <div className='footer-body'>
                <div className='footer-grid-item'>
                    <h3>Abi</h3>
                    <ul style={{padding: "0px"}}>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/about-us">Meist</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/projektimuuk-2">Projektimüük</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/estojarelmaks">Esto järelmaks</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/makseviisid">Makseviisid</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/toopakkumised">Tööpakkumised</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/kohvibaar">Kohvibaar</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/contact-us-faqs">Kontakt ja Korduvad Küsimused</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/delivery-returns">Kohaletoimetamine ja Tagastus</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/terms-of-service">Teenusetingimused</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/pages/privacy-cookies">Privaatsus ja Küpsised</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/policies/terms-of-service">Terms of Service</a>
                        </li>
                        <li>
                            <a href="https://nordicdesignhome.ee/policies/refund-policy">Refund policy</a>
                        </li>
                    </ul>
                </div>

                <div className='footer-grid-item'>
                    <h3>Klienditugi</h3>
                    <p><strong>hello@nordicdesignhome.ee</strong></p>
                    <p><strong>+372 511 7313</strong></p>
                    <p>Liin avatud:</p>
                    <p>E-R: 10.00-18.00 </p>
                    <p>L: 11.00-16.00</p>

                    <br />
                    <h3>Kontor & showroom:</h3>
                    <p>Saarineni Maja, Pärnu mnt 10</p>
                    <p>Tallinn, 10140</p>
                    <p>E-R 10.00-18.00</p>
                    <p>L 11:00-16:00</p>

                    <br />
                    <h3>NDH Grupp OÜ</h3>
                    <p>Reg: 14984796</p>
                    <p>VAT Number: EE102262034</p>
                </div>

                <div className='footer-grid-item'>
                    <h3>Jälgi meid</h3>
                    <img className='footer-icons' src={Facebook} onClick={event =>  window.location.href="https://www.facebook.com/Nordicdesignhome/"}></img>
                    <img className='footer-icons' src={Instagram} onClick={event =>  window.location.href="https://www.instagram.com/nordicdesignhome/"}></img>
                </div>

                <div className='footer-grid-item'>
                    <h3>Uudiskiri</h3>
                    <p>
                        Liitu uudiskirjaga, et kuulda esimesena soodusmüükidest ja uutest kollektsioonidest!
                    </p>
                    <input type="text" placeholder='Sinu email'></input>
                    <button>Liitu</button>
                </div>

                <div style={{width: "100%", margin: "auto"}}>
                    <h5 style={{textAlign: "center", color: "#515151", fontWeight: "400"}}>Copyright © 2022, Nordic Design Home.</h5>
                </div>
            </div>
        </div>
    )
}

export default Footer;
import "./Taskbar.css"
import ShoppingCart from '../../img/Icons/shopping-cart.png'
import Menu from '../../img/Icons/menu.png'

function Covid(){

    function mobileMenuToggle(){
        if(document.getElementById("mobile-nav").style.display === "none"){
            document.getElementById("mobile-nav").style.display = "block";
        }else{
            document.getElementById("mobile-nav").style.display = "none";
        }
    }

    return(
        <div className="taskbar-background">
            <div className="taskbar-body">
                <div className="taskbar-left">

                    <div className="mobile-menu">
                        <img src={Menu} alt="Menu" onClick={mobileMenuToggle} style={{height: "17px", width: "auto", marginRight: "12px"}}></img>
                        <a>Menüü</a>
                    </div>


                    <input className="taskbar-search" type="text" placeholder="Otsing"></input>

                    <select className="taskbar-select">
                        <option>English</option>
                        <option selected>Eesti</option>
                        <option>Suomi</option>
                        <option>Русский</option>
                    </select>
                </div>
                    
                <div className="taskbar-right">
                    <a onClick={event =>  window.location.href="https://nordicdesignhome.ee/a/wishlist"} className="taskbar-buttons soovinimekiri">Soovinimekiri</a>
                    
                    <a onClick={event =>  window.location.href="https://nordicdesignhome.ee/cart"} className="taskbar-buttons">
                        <img className="taskbar-icon" alt="Taskbar" src={ShoppingCart}></img>
                        Ostukäru
                    </a>
                </div>
            </div>

            {/* Mobile screen navigation */}
            <div id="mobile-nav">
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/"} className="mobile-nav-buttons" style={{borderTop: "1px solid #59595933"}}>Esileht</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kevadine-tuhjendusmuuk-22"} className="mobile-nav-buttons">Tühjendusmüük</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/uus"} className="mobile-nav-buttons">Uus</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/terrassile-22"} className="mobile-nav-buttons">Terassile</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/moobel"} className="mobile-nav-buttons">Mööbel</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/valgustid"} className="mobile-nav-buttons">Valgustid</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/aksessuaarid"} className="mobile-nav-buttons">Aksessuaarid</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/tableware"} className="mobile-nav-buttons">Kööki</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kodutekstiilid"} className="mobile-nav-buttons">Tekstiilid</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/collections/kapinupud"} className="mobile-nav-buttons">Tarvikud</p>
                <p onClick={event =>  window.location.href="https://nordicdesignhome.ee/a/wishlist"} className="mobile-nav-buttons">Soovinimekiri</p>
                <input className="taskbar-mobile-search" type="text" placeholder="Otsing"></input>
            </div>
        </div>
    );
}

export default Covid;
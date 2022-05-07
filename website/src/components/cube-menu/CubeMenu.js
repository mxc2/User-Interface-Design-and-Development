import "./CubeMenu.css"
import { cubeMapImage1, cubeMapImage2, cubeMapImage3 } from "../Constants"

function CubeMenu(){
    return(
        <div className="cube-menu">
            <img className="cube-menu-item" src={cubeMapImage1} alt="Ekspress kollektsioonid" onClick={event =>  window.location.href='https://nordicdesignhome.ee/pages/ekspress-kollektsioonid'}></img>
            <img className="cube-menu-item" src={cubeMapImage2} alt="Uued tooted" onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/uus'}></img>
            <img className="cube-menu-item" src={cubeMapImage3} alt="Külasta esinduspoodi" onClick={event =>  window.location.href='https://nordicdesignhome.ee/pages/contact-us-faqs'}></img>
        </div>
    );
}

export default CubeMenu;
import "./Info.css"

function Info(props){

    //Declarations
    var row = "";
    var image = "";
    var text = "";

    //Choose what side is the image and text on
    if(props.location === 1){
        row = "row";
        image = "image";
        text = "text";
    }else if(props.location === 2){
        row = "row-reversed";
        image = "image-reversed";
        text = "text-reversed";
    }

    return(
        <div>
            <div className="info-content">
                <div className={row}>
                    <div>
                        <img id="describing-image" className={image} src={props.img} alt="Describing text"></img>
                    </div>
                    <div className={text}>
                        <h2 className="header-text">{props.header}</h2>
                        <p>{props.text}</p>
                        <p>{props.text2}</p>
                        <button className="button">Vaata kõiki tooteid</button>
                    </div>
                </div>
            </div>

            <div className="info-content-mobile">
                <h2 style={{textAlign: "center"}}>{props.header}</h2>
                <img id="describing-image" className="image-mobile" src={props.img} alt="Describing text"></img>
                <p className="text-mobile">{props.text}</p>
            </div>
        </div>
    )
}

export default Info;
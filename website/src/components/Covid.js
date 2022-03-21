import { useEffect, useState } from "react";

function Covid(){

    //Diffentriate between Estonian or English
    const [text, setText] = useState(false);

    //Set timer to change between languages
    useEffect(() => {
        setInterval(() => {
            setText((text) => !text)
        }, 10000);
        }, 
    [])

    return(
        <div style={{backgroundColor: "black", color: "white", textAlign: "center", padding: "3px", fontSize: "14px"}}>
            <p style={{margin: 0}}> 
                { text ?
                    "COVID-19 tarneinfo - Seoses viiruse levikuga võib üle 3-päevase tarnega toodete puhul ette tulla ootamatuid viivitusi. Täname mõistmise eest!"
                    :
                    "COVID-19 Shipping Announcement - Due to the spread of the virus products with delivery over 3 days may be subject to unexpected delays. Thank you for understanding!"
                } 
            </p>
        </div>
    );
}

export default Covid;
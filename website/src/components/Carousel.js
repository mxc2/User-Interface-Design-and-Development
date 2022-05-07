    import React, { Component } from 'react';
    import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
    import { Carousel } from 'react-responsive-carousel';
    import { carouselImage1, carouselImage2, carouselImage3, carouselImage4, carouselImage5, carouselImage6 } from './Constants'
    

    class Carousell extends Component {
        render() {
            return (<div style={{cursor: "pointer"}}>
                <Carousel autoPlay infiniteLoop swipeable={false} showStatus={false} showIndicators={false} showThumbs={false} interval={8000}>
                    <div onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/menu'}>
                        <img src={carouselImage1} alt="Carousel esimene pilt"/>
                    </div>
                    <div onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/menu'}>
                        <img src={carouselImage2} alt="Carousel teine pilt"/>
                    </div>
                    <div onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/gubi-goes-al-fresco'}>
                        <img src={carouselImage3} alt="Carousel kolmas pilt"/>
                    </div>
                    <div onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/kevadine-tuhjendusmuuk-22'}>
                        <img src={carouselImage4} alt="Carousel neljas pilt"/>
                    </div>
                    <div onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/terrassile-22'}>
                        <img src={carouselImage5} alt="Carousel viies pilt"/>
                    </div>
                    <div onClick={event =>  window.location.href='https://nordicdesignhome.ee/collections/terrassile-22'}>
                        <img src={carouselImage6} alt="Carousel kuues pilt"/>
                    </div>
                </Carousel>
                </div>
            );
        }
    };

    export default Carousell;
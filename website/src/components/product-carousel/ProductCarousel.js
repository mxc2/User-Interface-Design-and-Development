import './ProductCarousel.css'
import HeartIcon from '../../img/Icons/heart.png'
import HeartIconRed from '../../img/Icons/heart-red.png'

function ProductCarousel(props){

    function mouseover(e){
        e.currentTarget.src = props.imgEnlarged;
    }

    return(
        <div className='product'>
            <div className='product-image'>
                <img className='product-image-small' onMouseOver={mouseover} onClick={event =>  window.location.href=props.link} onMouseLeave={e => e.currentTarget.src = props.img} src={props.img} alt="Product"/>
            </div>
            <div className='product-details'>
                <h4 className='product-title'>{props.header}</h4>
                <div className='product-smaller-details'>
                    <p className='product-price'>{props.price}</p>
                    <img className='product-heart' onClick={e => e.currentTarget.src = HeartIconRed} src={HeartIcon} alt="Heart Icon"></img>
                </div>
            </div>
            {props.inStock && 
                <div className='product-stock'>
                    <div className='product-stock-identifier'></div>
                    <p className='product-stock-status'>laos</p>
                </div>
            }
        </div>
    )
}

export default ProductCarousel;
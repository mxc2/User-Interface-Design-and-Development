import ProductCarousel from "./ProductCarousel";

function ProductCarouselList(props) {

  return(<div style={{marginTop: "30px", display: "flex", justifyContent: "space-between", flexWrap: "wrap"}}>
    {props.ProductCarousels.map(PCarousel=> (
      <ProductCarousel 
      key={PCarousel.id}
      header={PCarousel.header}
      price={PCarousel.price}
      img={PCarousel.img}
      imgEnlarged={PCarousel.imgEnlarged}
      link={PCarousel.link}
      inStock={PCarousel.inStock}/>
    ))}
  </div>); 
}

export default ProductCarouselList;
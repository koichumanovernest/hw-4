import "./Products.css"
import rating from "../assets/img/rating-0.png"
import rating1 from "../assets/img/rating-05.png"
import rating2 from "../assets/img/rating-10.png"
import rating3 from "../assets/img/rating-15.png"
import rating4 from "../assets/img/rating-20.png"
import rating5 from "../assets/img/rating-25.png"
import rating6 from "../assets/img/rating-30.png"
import rating7 from "../assets/img/rating-35.png"
import rating8 from "../assets/img/rating-40.png"
import rating9 from "../assets/img/rating-45.png"
import rating10 from "../assets/img/rating-50.png"
import Buttons from "./ui/Buttons"
import Product from "./produc/Product"
import Selcted from "./produc/Selcted"


const Products = () => {
  
  const getRatingImage = (stars) => {
    if (stars >= 0 && stars < 0.5) {
      return rating;
    } else if (stars >= 0.5 && stars < 1.0) {
      return rating1;
    } else if (stars >= 1.0 && stars < 1.5) {
      return rating2;
    } else if (stars >= 1.5 && stars < 2.0) {
      return rating3;
    } else if (stars >= 2.0 && stars < 2.5) {
      return rating4;
    } else if (stars >= 2.5 && stars < 3.0) {
      return rating5;
    } else if (stars >= 3.0 && stars < 3.5) {
      return rating6;
    } else if (stars >= 3.5 && stars < 4.0) {
      return rating7;
    } else if (stars >= 4.0 && stars < 4.5) {
      return rating8;
    } else if (stars >= 4.5 && stars < 5.0) {
      return rating9;
    } else {
      return rating10;
    }
  };
  return (
    <div className="container">
      {Product.map((item)=>(
        <div className="content" key={item.id}>
        <img className="image" src={item.image} alt="logo" />
        <p className="name">{item.name}</p>
        <div className="count">
        <img src={getRatingImage(item.rating.stars)} alt="" />
        <p className="price">{item.priceCents}</p>
        </div>
        <p className="roots"></p>
        <Selcted/>
        <Buttons/>
        </div>
      ))}
    </div>
  )
}

export default Products
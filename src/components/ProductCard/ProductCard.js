
import "./ProductCard.css";

import { useDispatch, useSelector } from "react-redux";
import { add, cartSelector,addFav,removeFromCart,removeFromFavCart } from "../../reducers/cartReducer";
import { useState } from 'react';


// props is an object which encapsulates all the attributes passed to component.
function ProductCard(props) {
  const [changeColor, setChangeColor] =useState(false);
  const[changeBtn,setchangeBtn]=useState(false);
  const items=useSelector(cartSelector).value;
  // var ProductCartItem=[];
  // ProductCartItem.push(items);
  // console.log(ProductCartItem);
  let product = props.item;
  const dispatch = useDispatch();

  function handleAddToCartEvent() {
    // using dispatch to send add action and payload.
    dispatch(add(product));
    setchangeBtn(!changeBtn);
    
  }
  function handleAddToFavourite(){
    if(!changeColor){
      setChangeColor(!changeColor)
    dispatch(addFav(product));
    } else{
      setChangeColor(!changeColor)
    dispatch(removeFromFavCart(product.id));
    }
    
    // using dispatch to send add action and payload.
    
  }
  function handleRemoveToCart(){
    dispatch(removeFromCart(product.id));
    setchangeBtn(!changeBtn);
  }
  
  // onClick={function() { handleAddToFavourite(); setButtonState(true); }

  return (
    
    <div className="product-section">
     
        <div class="thumb-wrapper">
        <span>
          {
          changeColor===false?(<i onClick={handleAddToFavourite} className="fa fa-heart"></i>):(
            <i onClick={handleAddToFavourite} className="bk fa fa-heart"></i>
          )
          }
          
        </span>
        <div className="img-box">
          <img src={product.image} class="img-fluid" alt="iphone" />
        </div>
        <div className="thumb-content">
          <p>{product.title.substring(0,25)}...</p>
          <p class="item-price">${product.price}</p>
          <div class="star-rating">
            <ul class="list-inline">
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
            </ul>
          </div>
          {
            changeBtn === false?(<button onClick={handleAddToCartEvent} className="btn btn-primary">
            <i class="fa fa-shopping-cart" aria-hidden="false"></i> Add To Cart
          </button>):(<button onClick={handleRemoveToCart} className="btn btn-primary">
          <i class="fa fa-shopping-cart" aria-hidden="true"></i> Remove From Cart
               </button>)
           }
 
          </div> </div> 
    </div>
  );
}

export default ProductCard;

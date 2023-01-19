import "./FavouriteItem.css";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from 'react-redux';
import { add,removeFromFavCart,cartSelector } from "../../reducers/cartReducer";

function FavouriteItem(props) {
  
  let items = props.item;
  

  const dispatch = useDispatch()
  const handelRemoveFromFavCart = (item) => {
    dispatch(removeFromFavCart(items.id));
  }
  function handleAddToCartEvent() {
    // using dispatch to send add action and payload.
    dispatch(add(items));

  }


  return (
    <div >

      <div class="thumb-wrapper">

        <div className="img-box">
          <img src={items.image} class="img-fluid" alt="iPhone" />
        </div>
        <div className="thumb-content">
          <p>{items.title.substring(0,25)}...</p>
          <p class="item-price"><strike>&#8377;369.00</strike> <span>&#8377;{items.price}</span></p>
          <div class="star-rating">
            <ul class="list-inline">
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star"></i></li>
              <li class="list-inline-item"><i class="fa fa-star-o"></i></li>
            </ul>
          </div>


          <div class="btn-section">
          <button onClick={handleAddToCartEvent} className="btn btn-primary">
            Add To Cart
          </button>
          <button onClick={handelRemoveFromFavCart} className="navbar-brand removeBtn btn" >Remove From Favourite</button>
          </div>


          
        </div> </div>

    </div>


  );
}

export default FavouriteItem;

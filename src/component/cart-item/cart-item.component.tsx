import {CartItemContainer,ItemDetails} from "./cart-item.style"
import { CartItem } from "../../store/cart/cart.type"
export type CartItemProps = {
  cartItem : CartItem
}

const CartItemComponent = ({cartItem}: CartItemProps) => {

  const {name,quantity,imageUrl,price} = cartItem
  return(
    <CartItemContainer>
      <img  src={imageUrl} alt={`${name}`} />
      <ItemDetails>
        <span className="name">{name}</span>
        <span className="price">{quantity} {"X"} ${price}</span>
      </ItemDetails>
    </CartItemContainer>
  )
}

export default CartItemComponent
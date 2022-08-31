import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = ({ ...props }) => {
  return (
    <div className="cart-icon-container" {...props}>
      <ShoppingIcon className="shopping" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;

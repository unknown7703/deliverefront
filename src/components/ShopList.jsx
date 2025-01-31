import PropTypes from "prop-types";
import Button from "./Button";
import { CartContext } from "../store/CartContext.jsx";
import { useContext } from "react";

const ShopList = ({ shopName, itemName, itemPrice }) => {
  const cart = useContext(CartContext);
  const updateCart = cart.updateCart;

  const onAddToCart = (itemName, shopName, price) => {
    const newItem = { itemName, shopName, price };
    const updatedCartItems = [...(cart.cartItems || []), newItem];
    updateCart({ ...cart, cartItems: updatedCartItems });

    console.log("Updated cart:", updatedCartItems);
  };
  return (
    <div className="w-[60%] bg-white rounded-lg p-6 flex flex-col gap-2 ">
      <div className="font-semibold text-lg">{itemName}</div>
      <div className="font-thin text-sm">{shopName}</div>
      <div className="font-semibold text-md">$:{itemPrice}</div>
      <Button type="solid" onClick={onAddToCart}>
        Add to cart
      </Button>
    </div>
  );
};
ShopList.propTypes = {
  shopName: PropTypes.string.isRequired,
  itemName: PropTypes.string.isRequired,
  itemPrice: PropTypes.number.isRequired,
  onAddToCart: PropTypes.func.isRequired,
};
export default ShopList;

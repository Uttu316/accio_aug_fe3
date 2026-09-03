import { createContext, useState } from "react";

export const CartContext = createContext(); //step 1: to create a context

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    setCart((curr) => {
      const existing = curr.find((i) => i.id === item.id);
      if (existing) {
        return curr.map((i) =>
          i.id === item.id ? { ...i, cartCount: i.cartCount + 1 } : i,
        );
      }
      return [...curr, { ...item, cartCount: 1 }];
    });
  };

  const deleteFromCart = (id) => {
    setCart((curr) => curr.filter((item) => item.id !== id));
  };

  const isInCart = (id) => {
    return cart.find((i) => i.id === id);
  };

  const increaseCount = (id) => {
    setCart((curr) =>
      curr.map((i) => (i.id === id ? { ...i, cartCount: i.cartCount + 1 } : i)),
    );
  };

  const decreaseCount = (id) => {
    setCart((curr) =>
      curr
        .map((i) => (i.id === id ? { ...i, cartCount: i.cartCount - 1 } : i))
        .filter((i) => i.cartCount > 0),
    );
  };

  const clearCart = () => setCart([]);

  const cartSize = cart.reduce((sum, i) => sum + i.cartCount, 0);
  const cartTotal = cart.reduce((sum, i) => sum + i.price * i.cartCount, 0);

  return (
    <CartContext
      value={{
        cart,
        cartSize,
        cartTotal,
        isInCart,
        addToCart,
        deleteFromCart,
        increaseCount,
        decreaseCount,
        clearCart,
      }}
    >
      {children}
    </CartContext>
  ); //step 2: Passing value and wrap children
};
export default CartProvider;

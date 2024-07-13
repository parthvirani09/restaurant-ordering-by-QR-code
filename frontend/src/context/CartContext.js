// // src/context/CartContext.js
// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item, quantity) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + quantity }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity }];
//       }
//     });
//   };

//   const increaseQuantity = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === itemId
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       )
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === itemId && cartItem.quantity > 1
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       )
//     );
//   };

//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
//   };

//   return (
//     <CartContext.Provider
//       value={{ cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [orderSummary, setOrderSummary] = useState(null);

//   const addToCart = (item, quantity) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + quantity }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity }];
//       }
//     });
//   };

//   const increaseQuantity = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === itemId
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       )
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === itemId && cartItem.quantity > 1
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       )
//     );
//   };

//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
//   };

//   const placeOrder = () => {
//     const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//     const orderSummaryData = {
//       items: cart,
//       totalAmount: totalAmount,
//       orderDate: new Date().toLocaleString(),
//     };
//     setOrderSummary(orderSummaryData);
//     setCart([]); // Clear the cart after placing the order
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         orderSummary,
//         addToCart,
//         increaseQuantity,
//         decreaseQuantity,
//         removeFromCart,
//         placeOrder,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

// import React, { createContext, useState } from 'react';

// export const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);
//   const [orderSummary, setOrderSummary] = useState(null);

//   const addToCart = (item, quantity) => {
//     setCart((prevCart) => {
//       const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
//       if (existingItem) {
//         return prevCart.map((cartItem) =>
//           cartItem.id === item.id
//             ? { ...cartItem, quantity: cartItem.quantity + quantity }
//             : cartItem
//         );
//       } else {
//         return [...prevCart, { ...item, quantity }];
//       }
//     });
//   };

//   const increaseQuantity = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === itemId
//           ? { ...cartItem, quantity: cartItem.quantity + 1 }
//           : cartItem
//       )
//     );
//   };

//   const decreaseQuantity = (itemId) => {
//     setCart((prevCart) =>
//       prevCart.map((cartItem) =>
//         cartItem.id === itemId && cartItem.quantity > 1
//           ? { ...cartItem, quantity: cartItem.quantity - 1 }
//           : cartItem
//       )
//     );
//   };

//   const removeFromCart = (itemId) => {
//     setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
//   };

//   const placeOrder = () => {
//     const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
//     const orderSummaryData = {
//       items: cart,
//       totalAmount: totalAmount,
//       orderDate: new Date().toLocaleString(),
//     };
//     setOrderSummary(orderSummaryData);
//     console.log('Order Summary:', orderSummaryData); // Debugging statement
//     setCart([]); // Clear the cart after placing the order
//   };

//   return (
//     <CartContext.Provider
//       value={{
//         cart,
//         orderSummary,
//         addToCart,
//         increaseQuantity,
//         decreaseQuantity,
//         removeFromCart,
//         placeOrder,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };


import React, { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [orderSummary, setOrderSummary] = useState(null);

  const addToCart = (item, quantity) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((cartItem) => cartItem.id === item.id);
      if (existingItem) {
        return prevCart.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: Math.max(cartItem.quantity, quantity) }
            : cartItem
        );
      } else {
        return [...prevCart, { ...item, quantity }];
      }
    });
  };

  const increaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      )
    );
  };

  const decreaseQuantity = (itemId) => {
    setCart((prevCart) =>
      prevCart.map((cartItem) =>
        cartItem.id === itemId && cartItem.quantity > 1
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      )
    );
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((cartItem) => cartItem.id !== itemId));
  };

  const placeOrder = () => {
    const totalAmount = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    const orderSummaryData = {
      items: cart,
      totalAmount: totalAmount || 0,
      orderDate: new Date().toLocaleString(),
    };
    setOrderSummary(orderSummaryData);
    console.log('Order Summary:', orderSummaryData); // Debugging statement
    setCart([]); // Clear the cart after placing the order
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orderSummary,
        addToCart,
        increaseQuantity,
        decreaseQuantity,
        removeFromCart,
        placeOrder,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

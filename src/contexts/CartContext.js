import React, { createContext, useState, useEffect } from 'react'

//create context
export const CartContext = createContext()

const CartProvider = ({ children }) => {
  //cart state
  const [cart, setCart] = useState([])

  //total amount state
  const [total, setTotal] = useState(0)


  useEffect(() => {
    const total = cart.reduce((accumulator, currentItem) => {
      return accumulator + currentItem.price * currentItem.amount
    }, 0)
    setTotal(total)
  })

  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 }
    // console.log(newItem)
    // console.log(`${product.title} added to the cart succesfully`)
    // check if the item is already added
    const cartItem = cart.find(item => {
      return item.id === id;
    })
    if (cartItem) {
      const newCart = [...cart].map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 }
        } else {
          return item;
        }
      })
      setCart(newCart)
    } else {
      setCart([...cart, newItem])
    }
  }

  //remove from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter(item => {
      return item.id !== id
    })
    setCart(newCart)
  }

  //clear cart
  const clearCart = () => {
    setCart([])
  }

  //increase amount
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id)
    addToCart(cartItem, id)
  }

  //decrease amount
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id
    })
    if (cartItem) {
      const newCart = cart.map(item => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 }
        } else {
          return item
        }
      })
      setCart(newCart)
    }
    if (cartItem.amount < 2) {
      removeFromCart(id)

    }
  }

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart, increaseAmount, decreaseAmount, total }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider

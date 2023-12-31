"use client";
import { ProductWithTotalPrice } from "@/helpers/products";
import { Product } from "@prisma/client";
import { ReactNode, createContext, useState } from "react";

interface CartProduct extends ProductWithTotalPrice {
  quantity: number;
}

interface IcartContext {
  products: Product[];
  cartTotalPrice: number;
  cartBasePrice: number;
  cartTotalDiscount: number;
  addProductToCart: (product: CartProduct) => void;
}

export const CartContext = createContext<IcartContext>({
  products: [],
  cartTotalPrice: 0,
  cartBasePrice: 0,
  cartTotalDiscount: 0,
  addProductToCart: () => {},
});

const CartProvider = ({ children }: { children: ReactNode }) => {
  const [products, setProducts] = useState<CartProduct[]>([]);
  const addProductToCart = (product: CartProduct) => {
    setProducts((prev) => [...prev, product]);
  };
  return (
    <CartContext.Provider
      value={{
        products,
        addProductToCart,
        cartTotalPrice: 0,
        cartBasePrice: 0,
        cartTotalDiscount: 0,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;

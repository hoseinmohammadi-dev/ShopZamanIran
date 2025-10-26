'use client'
import { create } from "zustand";

const savedBasket = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("basket")) || []
    : [];


const useShop = create((set) => ({

    basket: savedBasket,

    updateBasket: (newPro) => set((state) => {
        const exist = state.basket.find(item => item.id === newPro.id)
        if (exist) {
            alert('Product is already in the basket');
            return state;
        } else {
            alert("added")
            const newBasket = [...state.basket, newPro]
            localStorage.setItem("basket", JSON.stringify(newBasket));
            return { basket: newBasket };
        }
    }),

    increaseCount: (id) => set((state) => {
        const newBasket = state.basket.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
        localStorage.setItem("basket", JSON.stringify(newBasket));
        return { basket: newBasket };
    }),

    decreaseCount: (id) => set((state) => {
        const newBasket = state.basket.map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
        localStorage.setItem("basket", JSON.stringify(newBasket));
        return { basket: newBasket };

    }),
    removeFromBasket: (id) => set((state) => {
        const newBasket = state.basket.filter((val) => val.id !== id)
        localStorage.setItem("basket", JSON.stringify(newBasket));
        return { basket: newBasket };
    })
}));

export default useShop;

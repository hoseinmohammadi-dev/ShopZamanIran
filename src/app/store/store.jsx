'use client'
import { create } from "zustand";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const savedBasket = typeof window !== "undefined"
    ? JSON.parse(localStorage.getItem("basket")) || []
    : [];


const useShop = create((set) => ({

    basket: savedBasket,

    updateBasket: (newPro) => set((state) => {
        const exist = state.basket.find(item => item.id === newPro.id)
        if (exist) {
            toast.error('این محصول قبلاً اضافه شده است');
            return state;
        } else {
            toast.success("محصول به سبد اضافه شد!");
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

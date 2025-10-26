import { create } from "zustand";

const useShop = create((set) => ({

    basket: [],

    updateBasket: (newPro) => set((state) => {
        const exist = state.basket.find(item => item.id === newPro.id)
        if (exist) {
            alert('Product is already in the basket');
            return state;
        } else {
            alert("added")
            return { basket: [...state.basket, newPro] }
        }
    }),

    increaseCount: (id) => set((state) => {
        return {
            basket: state.basket.map(item => item.id === id ? { ...item, count: item.count + 1 } : item)
        }
    }),

    decreaseCount: (id) => set((state) => {
        return {
            basket: state.basket.map(item => item.id === id ? { ...item, count: item.count - 1 } : item)
        }
    }),
    removeFromBasket: (id) => set((state) => {
        return { basket: state.basket.filter((val) => val.id !== id) }
    })
}));

export default useShop;

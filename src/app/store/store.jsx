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

}));

export default useShop;

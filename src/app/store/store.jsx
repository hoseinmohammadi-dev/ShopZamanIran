import { create } from "zustand";

const useShop = create((set) => ({

    basket: [
        {
            "title": "ساعت مچی مردانه تیسوت Tissot اورجینال مدل T114.417.11.037.00",
            "price": "64,500,000",
            "image": "https://zamaniran.com/images/thumbs/0066448_-tissot-t1294101605300_360.jpeg",
            "gallery": [],
            "category": "man",
            "brand": "Tissot | تیسوت",
            "refCode": "T129.410.16.053.01",
            "count": 1,
            "id": "1"
        },
        {
            "title": "ساعت مچی مردانه تیسوت Tissot اورجینال مدل T129.410.16.053.00",
            "price": "36,500,000",
            "image": "https://zamaniran.com/images/thumbs/0066363_-tissot-t1144171103700_360.jpeg",
            "gallery": [],
            "category": "man",
            "brand": "Tissot | تیسوت",
            "refCode": "T129.410.16.053.02",
            "count": 1,
            "id": "2"
        }
    ],

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

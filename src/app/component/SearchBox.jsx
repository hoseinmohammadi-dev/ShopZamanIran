'use client';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import getData from '../services/getData';
import { CiFaceFrown } from "react-icons/ci";

export default function SearchBox({ setProducts, initialProducts }) {
    const [query, setQuery] = useState('');
    const [notFound, setNotFound] = useState(false)


    const handleSearch = async () => {
        if (!query.trim()) {
            setProducts(initialProducts);
            setNotFound(false);
            return;
        }

        try {
            const allData = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products");
            const filtered = allData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );

            if (filtered.length === 0) {
                setProducts(initialProducts);
                setNotFound(true);
                setTimeout(() => setNotFound(false), 3000);
            } else {
                setProducts(filtered);
                setNotFound(false)
            }
        } catch (err) {
            console.error("Failed to fetch products:", err);
            setProducts([]);
            setNotFound(false)
        }
    };

    return (
        <div className='relative flex items-center justify-center px-1.5 md:px-3 bg-white rounded-2xl'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی محصول ..."
                className="outline-none text-[10px] md:text-[14px] w-[90px] md:w-[115px]"
            />
            <button onClick={handleSearch}>
                <FiSearch className='w-3 h-3 md:w-5 md:h-5' />
            </button>
            <div className={`fixed top-24 right-4 z-50 flex items-center gap-2 bg-red-500 text-white text-[10px] md:text-[14px] px-3 py-2 rounded-lg shadow-lg transition-all duration-300 ${notFound ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-4'}`}>
                <p>محصولی یافت نشد</p>
                <CiFaceFrown className='text-[12px] md:text-[22px]' />
            </div>
        </div>
    );
}

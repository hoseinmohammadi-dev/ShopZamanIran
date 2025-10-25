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
            <div className={`absolute -top-[120%] left-1.5 md:top-2 md:left-[110%] flex flex-nowrap items-center justify-center gap-1.5 md:w-[155px] z-10 bg-red-500 text-white text-[10px] md:text-[14px] px-1.5 md:px-3 py-1 md:py-2 mt-2 md:mt-0 rounded-lg transition-all duration-500 ${notFound ? 'opacity-100' : 'opacity-0'}`}>
                <p>محصولی یافت نشد</p>
                <CiFaceFrown className='text-[12px] md:text-[22px]'/>
            </div>
        </div>
    );
}

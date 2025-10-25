'use client';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import getData from '../services/getData';

export default function SearchBox({ setProducts, initialData }) {
    const [query, setQuery] = useState('');

    const handleSearch = async () => {
        if (!query.trim()) {
            setProducts(initialData);
            return;
        }

        try {
            const allData = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products");
            const filtered = allData.filter(item =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            setProducts(filtered);
        } catch (err) {
            console.error("Failed to fetch products:", err);
            setProducts([]);
        }
    };

    return (
        <div className='flex items-center justify-center px-1.5 md:px-3 bg-white rounded-2xl'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی محصول ..."
                className="outline-none text-[10px] md:text-[14px] w-[90px] md:w-[115px]"
            />
            <button onClick={handleSearch}>
                <FiSearch className='w-3 h-3 md:w-5 md:h-5' size={0} />
            </button>
        </div>
    );
}

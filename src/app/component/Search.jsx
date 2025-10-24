'use client';
import { useState, useEffect } from 'react';
import { FiSearch } from 'react-icons/fi';
import getData from '../services/getData';

export default function SearchBox() {
    const [query, setQuery] = useState('');
    const [data, setData] = useState([]); // Fixed the incomplete destructuring

    // If you need to fetch data, use useEffect
    useEffect(() => {
        const fetchData = async () => {
            const result = await getData("https://68f3de25fd14a9fcc42a135a.mockapi.io/products");
            setData(result);
        };

        fetchData();
    }, []);

    return (
        <div className='flex items-center justify-center px-1.5 md:px-3 bg-white rounded-2xl'>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="جستجوی محصول ..."
                className="outline-none text-[10px] md:text-[14px] w-[90px] md:w-[115px]"
            />
            <button>
                <FiSearch className='w-3 h-3 md:w-5 md:h-5' size={0} />
            </button>
        </div>
    );
}

'use client';
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

export default function SearchBox() {
  const [query, setQuery] = useState('');
//   const [results, setResults] = useState([
//     // نمونه داده؛ بعداً با API جایگزین می‌کنیم
//     { id: 1, name: 'محصول ۱' },
//     { id: 2, name: 'محصول ۲' },
//     { id: 3, name: 'محصول ۳' },
//   ]);

//   // فعلاً فقط فیلتر ساده برای نمایش نتایج
//   const filteredResults = results.filter(item =>
//     item.name.toLowerCase().includes(query.toLowerCase())
//   );

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

'use client';

import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function productPage() {
    const params = useParams();
    const slug = params.slug;

    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');

    useEffect(() => {
        const fechProduct = async () => {
            try {
                const res = await fetch(
                    "https://68f3de25fd14a9fcc42a135a.mockapi.io/products",
                    { cache: "no-store" }
                );
                if (!res.ok) throw new Error("خطا در دریافت داده‌ها");
                const allProducts = await res.json();
                const found = allProducts.find(p => p.refCode === slug);
                if (!found) throw new Error("محصول پیدا نشد 😕")
                setProduct(found);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        if (slug) fechProduct();
    }, [slug])

    if (loading) return <div className="text-center mt-10">در حال بارگذاری...</div>;
    if (error) return <div className="text-center mt-10 text-red-600">{error}</div>;

    return (
        <section className="container mx-auto px-5 py-10">

            <div className="mx-[5%] flex text-black/60 text-[12px] md:text-[14px]">
                <Link href="/">صفحه اصلی</Link>
                <span className="mx-1">{">"}</span>
                <Link href="/shop">فروشگاه</Link>
                <span className="mx-1">{">"}</span>
                <Link className="text-black/70" href="">جزئیات محصول</Link>
            </div>

            <div className="mx-[5%] flex justify-between mt-2.5 lg:mt-4 mb-3 md:mb-5">
                <h2 className="text-[20px] md:text-[30px] lg:text-[36px]">جزئیات محصول</h2>
            </div>

            <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                <div className="w-full md:w-1/3 flex justify-center">
                    <Image src={product.image} alt={product.title} width={400} height={400} className="rounded-2xl shadow-lg object-cover" />
                </div>

                <div className="mx-auto w-full md:w-2/3">
                    <h1 className="text-[20px] md:text-2xl font-bold mb-4 md:mb-2 lg:mb-4">{product.title}</h1>
                    <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-1.5 lg:mb-3">
                        برند: <span className="font-bold">{product.brand}</span>
                    </p>
                    <p className="text-gray-700 text-sm md:text-base mb-3 md:mb-1.5 lg:mb-3">
                        کد مرجع: <span className="font-bold">{product.refCode}</span>
                    </p>

                    <div className="flex items-center justify-start gap-1 mb-6 md:mb-3 lg:mb-6">
                        <p className="text-xl font-bold text-gray-800 font-[YekanBakhFa]">{product.price}</p>
                        <Image src="/icon/toman.svg" alt="Toman" width={20} height={20} className="object-contain" />
                    </div>

                    <button className="bg-black text-white text-[14px] md:text-[16px] py-1.5 md:py-2 lg:py-3 px-2 md:px-4 lg:px-6 rounded-xl hover:bg-gray-800 transition-all">افزودن به سبد خرید 🛒</button>
                </div>
            </div>
        </section>
    );
}
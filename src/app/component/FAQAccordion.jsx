'use client';
import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = (index) => setOpenIndex(openIndex === index ? null : index);

  return (
    <div className="mx-auto w-[85%] lg:w-3/4 mb-20 *:border-b *:border-gray-300">
      <div>
        <button onClick={() => toggle(1)} className="w-full flex justify-between items-center py-4 text-left font-bold text-[12px] md:text-[14px]">چگونه می‌توانم سفارش خود را ثبت کنم؟{openIndex === 1 ? <FiChevronUp className="text-gray-500" /> : <FiChevronDown className="text-gray-500" />}</button>
        <div className={`overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === 1 ? 'max-h-96 py-2' : 'max-h-0'}`}>
          <p className='text-[10px] md:text-[12px] w-[95%]'>برای ثبت سفارش، ابتدا محصول مورد نظر خود را انتخاب کرده و به سبد خرید اضافه کنید. سپس با تکمیل اطلاعات و انتخاب روش پرداخت، سفارش خود را نهایی کنید. همچنین می‌توانید با کارشناسان ما در واتساپ و اینستاگرام در تماس باشید.</p>
        </div>
      </div>

      <div>
        <button onClick={() => toggle(2)} className="w-full flex justify-between items-center py-4 text-left font-bold text-[12px] md:text-[14px]">چه روش‌های پرداختی را می‌توانم استفاده کنم؟{openIndex === 2 ? <FiChevronUp className="text-gray-500" /> : <FiChevronDown className="text-gray-500" />}</button>
        <div className={`overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === 2 ? 'max-h-96 py-2' : 'max-h-0'}`}>
          <p className='text-[10px] md:text-[12px] w-[95%]'>می‌توانید از طریق درگاه‌های امن پارسیان و زرین‌پال و یا پرداخت در محل (ویژه‌ی تهران و کرج) هزینه سفارش خود را پرداخت کنید. همچنین امکان پرداخت قسطی با اسنپ پی نیز وجود دارد.</p>
        </div>
      </div>

      <div>
        <button onClick={() => toggle(3)} className="w-full flex justify-between items-center py-4 text-left font-bold text-[12px] md:text-[14px]">مدت زمان تحویل سفارش چقدر است؟{openIndex === 3 ? <FiChevronUp className="text-gray-500" /> : <FiChevronDown className="text-gray-500" />}</button>
        <div className={`overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === 3 ? 'max-h-96 py-2' : 'max-h-0'}`}>
          <p className='text-[10px] md:text-[12px] w-[95%]'>زمان تحویل بسته به موقعیت جغرافیایی و نحوه ارسال متفاوت است. معمولاً با پست ۳ تا ۵ روز کاری، با تیپاکس ۴۸ ساعته و با پیک در همان روز تحویل می‌شود.</p>
        </div>
      </div>

      <div>
        <button onClick={() => toggle(4)} className="w-full flex justify-between items-center py-4 text-left font-bold text-[12px] md:text-[14px]">آیا امکان تعویض یا بازگشت کالا وجود دارد؟{openIndex === 4 ? <FiChevronUp className="text-gray-500" /> : <FiChevronDown className="text-gray-500" />}</button>
        <div className={`overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === 4 ? 'max-h-96 py-2' : 'max-h-0'}`}>
          <p className='text-[10px] md:text-[12px] w-[95%]'>بله، تا ۷ روز پس از دریافت کالا می‌توانید آن را تعویض یا بازگردانید. برای اطلاعات بیشتر به بخش شرایط بازگشت کالا مراجعه کنید.</p>
        </div>
      </div>

      <div>
        <button onClick={() => toggle(5)} className="w-full flex justify-between items-center py-4 text-left font-bold text-[12px] md:text-[14px]">چگونه می‌توانم از کیفیت ساعت ها مطمئن شوم؟{openIndex === 5 ? <FiChevronUp className="text-gray-500" /> : <FiChevronDown className="text-gray-500" />}</button>
        <div className={`overflow-hidden transition-all duration-300 text-gray-600 ${openIndex === 5 ? 'max-h-96 py-2' : 'max-h-0'}`}>
          <p className='text-[10px] md:text-[12px] w-[95%]'>تمامی محصولات دارای گارانتی هستند و از سازندگان معتبر تهیه می‌شوند. همچنین کارشناسان ما در صورت تمایل، ویدیو تست محصول انتخابی شما را ارسال می‌کنند.</p>
        </div>
      </div>
    </div>
  );
}

import "./globals.css";
import Header from './component/Header'
import Footer from './component/Footer'

export const metadata = {
  title: "فروشگاه زمان ایران",
  description: "خرید آنلاین انواع ساعت مچی مردانه و زنانه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className='bg-stone-100 overflow-hidden'>
        <Header/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}

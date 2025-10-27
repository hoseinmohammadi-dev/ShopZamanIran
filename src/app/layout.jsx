import "./globals.css";
import Header from './component/Header'
import Footer from './component/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer2 from "./component/footer2";

export const metadata = {
  title: "فروشگاه زمان ایران",
  description: "خرید آنلاین انواع ساعت مچی مردانه و زنانه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className='bg-stone-100'>
        <Header/>
        {children}
        <Footer/>
        <Footer2/>
        <ToastContainer position="top-right" autoClose={3000} />
      </body>
    </html>
  );
}

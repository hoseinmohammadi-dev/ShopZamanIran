import "./globals.css";

export const metadata = {
  title: "فروشگاه ساعت",
  description: "خرید آنلاین انواع ساعت مچی مردانه و زنانه",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className='bg-stone-100'>
        {children}
      </body>
    </html>
  );
}

import Header from '@/components/Header';
import './globals.css';

export const metadata = {
    title: 'PhotoFeed - A Nonstop Photo Gallery',
    description: 'A Nonstop Photo Gallery App',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <Header />
                <div className="container my-4 lg:my-8">{children}</div>
            </body>
        </html>
    );
}

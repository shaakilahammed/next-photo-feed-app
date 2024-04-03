import Header from '@/components/Header';
import '../globals.css';

export const metadata = {
    title: 'PhotoFeed - A Nonstop Photo Gallery',
    description: 'A Nonstop Photo Gallery App',
};

export default function RootLayout({ children, modal, params }) {
    return (
        <html lang="en">
            <body>
                <Header lang={params.lang} />
                <div className="container my-4 lg:my-8">{children}</div>
                <div id="modal-content">{modal}</div>
            </body>
        </html>
    );
}

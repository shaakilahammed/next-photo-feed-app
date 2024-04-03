import './globals.css';

export const metadata = {
    title: 'PhotoFeed - A Nonstop Photo Gallery',
    description: 'A Nonstop Photo Gallery App',
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}

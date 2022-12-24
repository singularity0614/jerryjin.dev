import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="font-sans bg-[#F8FAFC]">
                {children}
            </body>
        </html>
    );
}
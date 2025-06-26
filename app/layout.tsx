import '../styles/globals.css';
import { ReactNode } from 'react';
import Header from '../components/header';

export const metadata = {
    title: 'DevJobs',
    description: 'Find your next opportunity here',
}

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
        <body>
        <Header />
        <main className="max-w-4xl mx-auto p-4">{children}</main>
        </body>
        </html>
    )
}

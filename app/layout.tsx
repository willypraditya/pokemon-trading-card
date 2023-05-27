import { Metadata } from 'next';

import Headers from '@/components/Headers';

import ApolloWrapper from '@/utils/Apollo/wrapper';
import ToastWrapper from '@/utils/ToastWrapper';

import './globals.css';

export const metadata: Metadata = {
    title: 'Pokemon Trading Card',
    description: 'Welcome to Pokemon Trading Card',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <html lang="en" className="min-w-[1000px]">
            <body style={{ backgroundColor: '#f5f8fc' }}>
                <Headers />
                <ToastWrapper />
                <ApolloWrapper>{children}</ApolloWrapper>
            </body>
        </html>
    );
};

export default RootLayout;

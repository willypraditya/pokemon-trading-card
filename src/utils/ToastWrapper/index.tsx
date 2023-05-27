'use client';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ToastWrapper = ({ children }: React.PropsWithChildren) => {
    return (
        <>
            <ToastContainer />
            {children}
        </>
    );
};

export default ToastWrapper;

import CarouselRegister from '@/components/carousel/carousel-register';
import * as React from 'react';

interface IAuthLayoutProps {
    children: React.ReactNode
}

const AuthLayout: React.FunctionComponent<IAuthLayoutProps> = ({ children }) => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
                <div className='col-span-1 hidden lg:block bg-[#533896]  justify-center items-center overflow-hidden'>
                    <CarouselRegister />
                </div>
                <div className='col-span-1 h-full flex justify-center items-center'>
                    {children}
                </div>
            </div>
        </>
    );
};

export default AuthLayout;

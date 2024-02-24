import StepperRegister from '@/components/stepper/stepper-register';
import { useParams, usePathname } from 'next/navigation';
import * as React from 'react';

interface IRegisterLayoutProps {
    children: React.ReactNode
}

const RegisterLayout: React.FunctionComponent<IRegisterLayoutProps> = ({ children }) => {
    const params = usePathname()
    const urlActive = params.split('/')[2]
    return (
        <>
            <nav className=''>
                <div className='flex items-center h-[100px] justify-between container mx-auto'>
                    <div>
                        <img src="/logo.png" alt="" />
                    </div>
                    <h4 className='text-[22px] text-gray-600 leading-[33px] font-normal'>Logout</h4>
                </div>
            </nav>
            <div className='flex justify-center flex-col items-center w-fit container mx-auto'>
                <h1 className='text-[28px] leading-[42px] font-semibold text-text-500'>Selamat Datang!</h1>
                <p className='text-base text-gray-400 mt-2 mb-[30px]'>Mari kita mulai dengan membuat profil Anda</p>
                <StepperRegister urlActive={urlActive} />
                {children}
            </div>
        </>
    );
};

export default RegisterLayout;

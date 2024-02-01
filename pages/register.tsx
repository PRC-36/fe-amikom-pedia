
import InputLabel from '@/components/inputs/input-label';
import * as React from 'react';

interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-2 h-screen'>
                <div className='col-span-1 hidden lg:block'>
                    asdasdas
                </div>
                <div className='col-span-1 h-full flex justify-center items-center'>
                    <div className='w-[420px] p-7'>
                        <div className='text-center mb-6'>
                            <div className='mb-6 flex justify-center'>
                                <img src="/logo.png" alt="" />
                            </div>
                            <h2 className='text-2xl font-semibold text-text-500 mb-2'>Masuk ke Akun anda</h2>
                            <p className='text-base font-normal text-gray-400 '>Log in di bawah untuk akses akun mu</p>
                        </div>
                        <form action="" className='flex flex-col gap-6'>
                            <InputLabel name='Nama' placeholder='Masukan Nama' />
                            <InputLabel type='email' name='Email Amikom' placeholder='Masukan Email' />
                            <InputLabel type='number' name='NIM' placeholder='Masukan NIM' />
                            <InputLabel type='password' name='Password' placeholder='Masukan Password' />
                            <InputLabel type='password' name='Konfirmasi Password ' placeholder='Masukan Kofirmasi Password' />
                            <button className='bg-primary-main text-white rounded-lg py-[14px]'>Buat Akun Baru</button>
                            <div className='text-gray-400 text-center'>Sudah punya Akun? <span className='text-primary-main'>Masuk</span></div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;

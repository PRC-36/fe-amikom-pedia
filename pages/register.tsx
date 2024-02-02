
import InputLabel from '@/components/inputs/input-label';
import * as React from 'react';
import { useForm } from "react-hook-form";
interface IRegisterProps {
}

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data : any) => console.log(data);


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
                        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-6'>
                            <InputLabel placeholder='Masukan Nama'  {...register("name")} />
                            <InputLabel type='email' names='Email Amikom' placeholder='Masukan Email' {...register("email")} />
                            <InputLabel type='number' names='NIM' placeholder='Masukan NIM' {...register("nim")} />
                            <InputLabel type='password' names='Password' placeholder='Masukan Password' {...register("password")}  />
                            <InputLabel type='password' names='Konfirmasi Password ' placeholder='Masukan Kofirmasi Password' {...register("confirm-password")} />
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

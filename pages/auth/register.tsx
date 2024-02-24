
import InputLabel from '@/components/inputs/input-label';
import * as React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import CarouselRegister from '@/components/carousel/carousel-register';
import AuthLayout from '@/layouts/AuthLayout';
import Link from 'next/link';


interface IRegisterProps {
}
interface IFormInput {
    name: string,
    email: string,
    nim: number,
    password: string,
    confirm_password: string
}

const schema = yup
    .object({
        name: yup.string().required(),
        email: yup.string().email().required(),
        nim: yup.number().required(),
        password: yup.string().required(),
        confirm_password: yup.string().required().oneOf([yup.ref('password'), ''], 'Passwords must match'),
    })
    .required()

const Register: React.FunctionComponent<IRegisterProps> = (props) => {
    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });
    const onSubmit = (data: any) => console.log(data);


    return (
        <>
            <div className='w-[420px] p-7'>
                <div className='text-center mb-6'>
                    <div className='mb-6 flex justify-center'>
                        <img src="/logo.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-semibold text-text-500 mb-2'>Masuk ke Akun anda</h2>
                    <p className='text-base font-normal text-gray-400 '>Log in di bawah untuk akses akun mu</p>
                </div>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className='flex flex-col gap-6'>
                    <div className='h-[90px]'>
                        <InputLabel placeholder='Masukan Nama'  {...register("name")} />
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.name?.message}</p>
                    </div>
                    <div className='h-[90px]'>
                        <InputLabel type='email' names='Email Amikom' placeholder='Masukan Email' {...register("email")} />
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.email?.message}</p>
                    </div>
                    <div className='h-[90px]'>
                        <InputLabel type='numeric' names='NIM' placeholder='Masukan NIM' {...register("nim")} />
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.nim?.message}</p>
                    </div>
                    <div className='h-[90px]'>
                        <InputLabel type='password' names='Password' placeholder='Masukan Password' {...register("password")} isVisible />
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.password?.message}</p>
                    </div>
                    <div className='h-[90px]'>
                        <InputLabel type='password' names='Konfirmasi Password ' placeholder='Masukan Kofirmasi Password' {...register("confirm_password")} isVisible />
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.confirm_password?.message}</p>
                    </div>
                    <button type='submit' className='bg-primary-main text-white rounded-lg py-[14px]'>Buat Akun Baru</button>
                    <div className='text-gray-400 text-center'>Sudah punya Akun? <Link href={'/login'} className='text-primary-main'>Masuk</Link></div>
                </form>
            </div>
        </>
    );
};


  // @ts-ignore
Register.layout = AuthLayout

export default Register;

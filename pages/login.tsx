import InputLabel from '@/components/inputs/input-label';
import AuthLayout from '@/layouts/AuthLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import * as React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import { Checkbox } from "@/components/ui/checkbox"


interface ILoginProps {
}

interface IFormInput {
    email: string,
    password: string,

}



const schema = yup
    .object({
        email: yup.string().email().required(),
        password: yup.string().required(),
    })
    .required()

const Login: React.FunctionComponent<ILoginProps> = (props) => {
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
                        <InputLabel placeholder='Masukan Email Amikom' type='email' names='Email Amikom'  {...register("email")} />
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.email?.message}</p>
                    </div>
                    <div className='h-32'>
                        <InputLabel type='password' names='Password' placeholder='Masukan Password' {...register("password")} isVisible />
                        <div className='flex justify-between items-center mt-2'>
                            <div className="flex items-center space-x-2 ">
                                <Checkbox id="terms2"  />
                                <label
                                    htmlFor="terms2"
                                    className="text-base cursor-pointer"
                                >
                                  Ingat Saya
                                </label>
                            </div>
                            <Link href={'/register'} className='text-primary-main'>Lupa Password?</Link>
                        </div>
                        <p className='text-[14px] leading-5 text-danger-100'>{errors.password?.message}</p>
                    </div>

                    <button type='submit' className='bg-primary-main text-white rounded-lg py-[14px]'>Masuk</button>
                    <div className='text-gray-400 text-center'>Belum punya akun? <Link href={'/register'} className='text-primary-main'>Daftar</Link></div>
                </form>
            </div>
        </>
    );
};


Login.layout = AuthLayout

export default Login;

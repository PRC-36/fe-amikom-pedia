
import InputLabel from '@/components/inputs/input-label';
import RegisterLayout from '@/layouts/RegisterLayout';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from "yup"

const ChooseUsername: React.FunctionComponent = () => {
  const router = useRouter()

  interface IFormInput {
    username: string,
  }
  const schema = yup.object({
    username: yup.string().required(),
  });

  const onSubmitForm = (data: any) => {
    console.log(data)
    console.log(data.header)
    router.push('/register/choose-profil')
  };


  const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>({
    resolver: yupResolver(schema)
  });

  return (
    <form className='w-full' onSubmit={handleSubmit(onSubmitForm)}>
      <div>
        <InputLabel type='text' names='Username' placeholder='@johndoe'  {...register("username")} />
        {errors.username && <p className='text-[14px] leading-5 text-danger-100 mt-2'>{errors.username.message}</p>}
      </div>
      <button type='submit' className='bg-primary-main text-white text-center rounded-lg block w-full mt-6 py-[14px] font-semibold text-base'>Selanjutnya</button>
    </form>
  );
};


ChooseUsername.layout = RegisterLayout

export default ChooseUsername;

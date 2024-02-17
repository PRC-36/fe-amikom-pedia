import RegisterLayout from '@/layouts/RegisterLayout';
import React, { useRef, useState } from 'react';
import * as yup from "yup"
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

import { FaPen } from "react-icons/fa";
import InputLabel from '@/components/inputs/input-label';
import Link from 'next/link';
import TextAreaLabel from '@/components/inputs/text-area-label';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Image from 'next/image';




const ChooseProfil: React.FunctionComponent = (props) => {

    const [image, setImage] = useState<string | null>(null);
    const [avatarImg, setAvatarImage] = useState<string>("/register/avatar-profil.png");
    interface IFormInput {
        header?: File,
        photo_profil: File,
        bio: string,
        name: string,
    }
    const schema = yup
        .object({
            header: yup.mixed<File>().optional(),
            photo_profil: yup.mixed<File>().required(),
            name: yup.string().required(),
            bio: yup.string().required(),
        })
        .required()


    const { register, handleSubmit, formState: { errors }, } = useForm<IFormInput>({
        resolver: yupResolver(schema)
    });




    const onSubmitForm = (data: any) => {
        console.log(data)
        console.log(data.header)
    };


    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file: File = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
            register('header', { value: file });
        }
    };

    const deleteImage = () => {
        setImage(null)
    }


    const handleAvatarImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file: File = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setAvatarImage(imageUrl);
            register('photo_profil', { value: file });
        }
    }


    return (
        <>
            <form onSubmit={handleSubmit(onSubmitForm)} className='w-full flex flex-col gap-6 mb-20'>
                <div>
                    <h4 className='text-[16px] font-semibold'>Header ( Optional )</h4>
                    <p className='text-base font-normal text-gray-400 mt-2'>Dimensi gambar yang direkomendasikan adalah 1500 x 500 piksel.</p>
                    <div className='h-[250px] relative border border-gray-300 bg-[#F2F2F2] rounded-xl flex justify-center items-center mt-3'>
                        {image ?
                            <>
                                <Image width={100} height={100} src={image} alt="" className='w-full h-full object-cover object-center' />
                                <div className='absolute top-6 right-6 w-14 h-14 bg-white rounded-full '>
                                    <Popover  >
                                        <PopoverTrigger className='w-full h-full'>
                                            <div className='flex justify-center items-center'>
                                                <FaPen className='text-2xl' />
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent className='w-[170px]' arrowPadding={8} side='bottom' align='end'>
                                            <div className='flex flex-col gap-4'>
                                                <label htmlFor='header' className='flex items-center text-base cursor-pointer'>
                                                    <MdOutlineAddPhotoAlternate className='mr-[10px] text-[22px]' /> Upload Photo
                                                    <input type="file" {...register('header')} onChange={handleImageChange} id="header" className='w-0' />
                                                </label>
                                                <p className='flex items-center text-base text-danger-100 cursor-pointer' onClick={deleteImage}><RiDeleteBin6Line className='mr-[10px] text-[22px]' />Hapus</p>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </>
                            :
                            <label htmlFor="header" className='py-3 px-4 bg-white border border-gray-300 rounded-lg w-[180px] text-center cursor-pointer'>
                                <span className='text-base font-bold text-text-700'>Upload Header</span>
                                <input type="file" {...register('header')} onChange={handleImageChange} name="header" id="header" className='w-0' />
                            </label>}
                    </div>
                    {errors.header && <p className='text-[14px] leading-5 text-danger-100 mt-2'>{errors.header.message}</p>}
                </div>
                <div>
                    <h4 className='text-[16px] font-semibold mb-2'>Photo Profile</h4>
                    <div className='flex place-items-center gap-3'>
                        <Image src={avatarImg} width={80} height={80} className='w-20 h-20 rounded-full object-cover object-center' alt="" />
                        <label htmlFor="avater" className='py-3 px-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer'>
                            <span className='text-base font-bold text-text-700'>Upload Photo Profile</span>
                            <input type="file" id="avater" className='w-0' onChange={handleAvatarImage} name="avater" />
                        </label>
                    </div>
                    {errors.photo_profil && <p className='text-[14px] leading-5 text-danger-100 mt-2'>{errors.photo_profil.message}</p>}
                </div>
                <div>
                    <TextAreaLabel names='Bio' placeholder='Tulis biomuu' {...register("bio")} />
                    {errors.bio && <p className='text-[14px] leading-5 text-danger-100 mt-2'>{errors.bio.message}</p>}
                </div>
                <div>
                    <InputLabel type='text' names='Nama' placeholder='Tuliskan Namamu....' {...register("name")} />
                    {errors.name && <p className='text-[14px] leading-5 text-danger-100 mt-2'>{errors.name.message}</p>}
                </div>
                <button type='submit' className='bg-primary-main text-white text-center block rounded-lg mt-6 py-[14px] font-semibold text-base'>Selanjutnya</button>
            </form>
        </>
    );
};
ChooseProfil.layout = RegisterLayout
export default ChooseProfil;

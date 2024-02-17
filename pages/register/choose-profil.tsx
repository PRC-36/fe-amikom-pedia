import RegisterLayout from '@/layouts/RegisterLayout';
import React, { useRef, useState } from 'react';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";
interface IChooseProfilProps {
}
import { FaPen } from "react-icons/fa";
import InputLabel from '@/components/inputs/input-label';
import Link from 'next/link';
import TextAreaLabel from '@/components/inputs/text-area-label';
const ChooseProfil: React.FunctionComponent<IChooseProfilProps> = (props) => {

    const inputRef = useRef(null)
    const [image, setImage] = useState<string | null>(null);
    const [avatarImg, setAvatarImage] = useState<string | null>("/register/avatar-profil.png");

    const handleImageClick = () => {
        inputRef.current.click()
    }

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files.length > 0) {
            const file: File = event.target.files[0];
            const imageUrl = URL.createObjectURL(file);
            setImage(imageUrl);
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
        }
    }


    return (
        <>
            <div className='w-full flex flex-col gap-6'>
                <div>
                    <h4 className='text-[16px] font-semibold'>Header ( Optional )</h4>
                    <p className='text-base font-normal text-gray-400 mt-2'>Dimensi gambar yang direkomendasikan adalah 1500 x 500 piksel.</p>
                    <div className='h-[250px] relative border border-gray-300 bg-[#F2F2F2] rounded-xl flex justify-center items-center mt-3'>
                        {image ?
                            <>
                                <img src={image} alt="" className='w-full h-full object-cover object-center' />
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
                                                    <input type="file" onChange={handleImageChange} ref={inputRef} name="header" id="header" className='w-0' />
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
                                <input type="file" onChange={handleImageChange} ref={inputRef} name="header" id="header" className='w-0' />
                            </label>}


                    </div>
                </div>
                <div>
                    <h4 className='text-[16px] font-semibold mb-2'>Photo Profile</h4>
                    <div className='flex place-items-center gap-3'>
                        <img src={avatarImg} className='w-20 h-20 rounded-full object-cover object-center' alt="" />
                        <label htmlFor="avater" className='py-3 px-4 bg-white border border-gray-300 rounded-lg text-center cursor-pointer'>
                            <span className='text-base font-bold text-text-700'>Upload Photo Profile</span>
                            <input type="file" onChange={handleAvatarImage} name="avater" id="avater" className='w-0' />
                        </label>
                    </div>
                </div>
                <TextAreaLabel names='Bio' placeholder='Tulis biomuu' />
                <InputLabel type='text' names='Nama' placeholder='Tuliskan Namamu....' />
                <Link href={'/register/choose-profil'} className='bg-primary-main text-white text-center block rounded-lg mt-6 py-[14px] font-semibold text-base'>Selanjutnya</Link>
            </div>
        </>
    );
};
ChooseProfil.layout = RegisterLayout
export default ChooseProfil;

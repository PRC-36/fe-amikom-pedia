import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { forwardRef, useState } from 'react';
import { MdOutlineVisibility, MdOutlineVisibilityOff } from "react-icons/md";
interface IInputLabelProps {
    names?: string,
    type?: string,
    placeholder?: string
    isVisible?: boolean
}

const InputLabel: React.ForwardRefRenderFunction<HTMLInputElement, IInputLabelProps> = ({ names = 'Nama', type = 'text', placeholder = 'Nama..', isVisible = false, ...props }, ref) => {
    const [isActive, setIsActive] = useState<boolean>(false)
    const changeVisibility = (value: boolean) => {
        setIsActive(value)
    }

    return (
        <div className="grid w-full items-center gap-2 ">
            <Label htmlFor={names} className='text-base font-semibold'>{names}</Label>
            <div className='relative'>
                <Input ref={ref} type={isActive ? 'text' : type} id={names} placeholder={placeholder} className='text-text-500 ' autoComplete={names} {...props} />
                {isVisible ? <>
                    {isActive ? <MdOutlineVisibilityOff className='absolute right-[25px] top-[33%] cursor-pointer' onClick={() => changeVisibility(!isActive)} /> : <MdOutlineVisibility className='absolute right-[25px] top-[33%] cursor-pointer' onClick={() => changeVisibility(!isActive)} />}
                </> : ''}
            </div>
        </div>
    );
};

export default forwardRef(InputLabel);

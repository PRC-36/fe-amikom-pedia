import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import React, { forwardRef } from 'react';
interface IInputLabelProps {
    names?: string,
    type?: string,
    placeholder?: string
}

const InputLabel: React.ForwardRefRenderFunction<HTMLInputElement ,IInputLabelProps> = ({ names = 'Nama', type = 'text', placeholder = 'Nama..', ...props }, ref) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor={names} className='text-base font-semibold'>{names}</Label>
            <Input ref={ref} type={type} id={names} placeholder={placeholder} className='text-text-500 ' autoComplete={names} {...props} />
        </div>
    );
};

export default forwardRef(InputLabel);

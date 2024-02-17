import { Label } from '@radix-ui/react-label';
import React, { ForwardRefRenderFunction, forwardRef } from 'react';
import { Textarea } from '../ui/textarea';

interface ITextAreaLabelProps {
  names?: string,
  placeholder?: string
}

const TextAreaLabel: ForwardRefRenderFunction<HTMLTextAreaElement, ITextAreaLabelProps> = ({ names = 'Nama', placeholder = 'Nama..', ...props }, ref) => {
  return (
    <div className="grid w-full items-center gap-2 ">
      <Label htmlFor={names} className='text-base font-semibold'>{names}</Label>
      <Textarea placeholder={placeholder}  ref={ref} id={names} name={names}  autoComplete={names} {...props} className='min-h-[100px] text-text-500 outline-none' />
    </div>
  );
};

export default forwardRef(TextAreaLabel);

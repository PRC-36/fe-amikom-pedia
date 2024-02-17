import { Label } from '@radix-ui/react-label';
import * as React from 'react';
import { Textarea } from '../ui/textarea';

interface ITextAreaLabelProps {
  names?: string,
  placeholder?: string
}

const TextAreaLabel: React.ForwardRefRenderFunction<HTMLInputElement, ITextAreaLabelProps> = ({ names = 'Nama', placeholder = 'Nama..', ...props }, ref) => {
  return (
    <div className="grid w-full items-center gap-2 ">
      <Label htmlFor={names} className='text-base font-semibold'>{names}</Label>
      <Textarea placeholder={placeholder} id={names} className='min-h-[100px] text-text-500 outline-none' />
    </div>
  );
};

export default TextAreaLabel;

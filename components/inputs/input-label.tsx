import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface IInputLabelProps {
    name?: string,
    type?: string,
    placeholder?: string
}

const InputLabel: React.FunctionComponent<IInputLabelProps> = ({ name = 'Nama', type = 'text', placeholder = 'Nama..' }) => {
    return (
        <div className="grid w-full max-w-sm items-center gap-2">
            <Label htmlFor={name} className='text-base font-semibold'>{name}</Label>
            <Input type={type} id={name} placeholder={placeholder} className='text-text-500 ' />
        </div>
    );
};

export default InputLabel;

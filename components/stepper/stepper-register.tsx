import * as React from 'react';
import { FaCircleCheck } from "react-icons/fa6";
interface IStepperRegisterProps {
    urlActive? : string
}

const StepperRegister: React.FunctionComponent<IStepperRegisterProps> = ({ urlActive }) => {
    console.log(urlActive)
    const data = [
        {
            slug : 'choose-username',
            name : 'Tentukan Username'
        },
        {
            slug : 'choose-profil',
            name : 'Tentukan Profilmu'
        },
        {
            slug : 'survey',
            name : 'Survey'
        }
    ]
    return (
        <div className='flex items-center gap-5 w-[400px] sm:w-auto mx-auto overflow-x-auto mb-6'>
            {data.map((v, i, arr) => (
                <div className='flex items-center gap-5' key={i}>
                    <div className={`flex items-center ${urlActive === v.slug ? 'text-primary-main font-semibold' : 'text-gray-400'}`} >
                        <FaCircleCheck className={`${urlActive === v.slug ? 'block' : 'hidden'} mr-1`} />
                        <h1 className='text-base text-nowrap'>{v.name}</h1>
                    </div>
                    {i < arr.length - 1 && <span className='w-[130px] h-[2px] bg-gray-400'></span>}
                </div>
            ))}
        </div>
    );
};

export default StepperRegister;

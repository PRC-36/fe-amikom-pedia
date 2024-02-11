
import InputLabel from '@/components/inputs/input-label';
import RegisterLayout from '@/layouts/RegisterLayout';
import Link from 'next/link';
import * as React from 'react';

interface IChooseUsernameProps {
}

const ChooseUsername: React.FunctionComponent<IChooseUsernameProps> = (props) => {

  return (
    <>
      <InputLabel type='text' names='Username' placeholder='@johndoe'  />
      <Link href={'/register/choose-profil'} className='bg-primary-main text-white text-center rounded-lg w-full mt-6 py-[14px] font-semibold text-base'>Selanjutnya</Link> 
    </>
  );
};


ChooseUsername.layout = RegisterLayout

export default ChooseUsername;

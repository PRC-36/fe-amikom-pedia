
import InputLabel from '@/components/inputs/input-label';
import RegisterLayout from '@/layouts/RegisterLayout';
import * as React from 'react';

interface IChooseUsernameProps {
}

const ChooseUsername: React.FunctionComponent<IChooseUsernameProps> = (props) => {

  return (
    <>
      <InputLabel type='text' names='Username' placeholder='@johndoe'  />
      <button className='bg-primary-main text-white rounded-lg w-full mt-6 py-[14px]'>Selanjutnya</button> 
    </>
  );
};


ChooseUsername.layout = RegisterLayout

export default ChooseUsername;

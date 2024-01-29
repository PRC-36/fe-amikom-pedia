import * as React from 'react';
import { CgClose } from "react-icons/cg";
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"
import { Textarea } from "@/components/ui/textarea"

interface IPostFeedProps {
}

const PostFeed: React.FunctionComponent<IPostFeedProps> = (props) => {
    return (
        <>
            <div className='w-[650px] bg-white rounded-lg drop-shadow-lg border-[1px] border-primary-border' >
                <div className='flex justify-between p-6 border-b-[1px]'>
                    <h1>Buat Postingan</h1>
                    <CgClose />
                </div>
                <div className='px-6 pt-6 flex items-center gap-2'>
                    <Avatar>
                        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <p>Jese Leos</p>
                </div>
                <div className='p-6'>
                    <Textarea placeholder="Tulis apa yang terjadi?" className='min-h-[200px] outline-none'/>
                    <div className='bg-white w-[75px] h-[75px] drop-shadow-lg border-[1px] border-primary-border rounded-xl ml-auto '>
                        <label htmlFor="picture" className='flex justify-center items-center h-full cursor-pointer'>
                            <img src="/icons/upload.png" alt="" />
                            <input type="file" id='picture' className='w-0' />
                        </label>
                    </div>
                </div>
                <div className='p-6'>
                    <button className='bg-neutral-main text-white w-full py-3 rounded-lg'>Kirim</button>
                </div>
            </div>
        </>
    );
};

export default PostFeed;

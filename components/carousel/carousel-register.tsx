
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';
interface ICarouselRegisterProps {
}

const CarouselRegister: React.FunctionComponent<ICarouselRegisterProps> = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        arrows : false ,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <Slider {...settings}>
                <div className='cursor-pointer'>
                    <div className="flex flex-col justify-center  items-center h-screen mx-auto w-[384px] text-center text-white gap-4">
                        <Image src={'/register/banner.png'} width={270} height={270} alt={'image carousel'}/>
                        <p className="text-3xl w-[300px]">Interaksi Sesama
                            Mahasiswa Amikom</p>
                        <p className="text-base w-[300px]">
                            Disini kamu bisa mendapatkan pacar lho!
                            Manfaatkan Amikom Pedia dengan
                            baik
                            agar kamu tidak jomblo
                        </p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div className="flex flex-col justify-center  items-center h-screen mx-auto w-[384px] text-center text-white gap-4">
                        <Image src={'/register/banner.png'} width={270} height={270} alt={'image carousel'}/>
                        <p className="text-3xl w-[300px]">Interaksi Sesama
                            Mahasiswa Amikom</p>
                        <p className="text-base w-[300px]">
                            Disini kamu bisa mendapatkan pacar lho!
                            Manfaatkan Amikom Pedia dengan
                            baik
                            agar kamu tidak jomblo
                        </p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div className="flex flex-col justify-center  items-center h-screen mx-auto w-[384px] text-center text-white gap-4">
                        <Image src={'/register/banner.png'} width={270} height={270} alt={'image carousel'}/>
                        <p className="text-3xl w-[300px]">Interaksi Sesama
                            Mahasiswa Amikom</p>
                        <p className="text-base w-[300px]">
                            Disini kamu bisa mendapatkan pacar lho!
                            Manfaatkan Amikom Pedia dengan
                            baik
                            agar kamu tidak jomblo
                        </p>
                    </div>
                </div>
                <div className='cursor-pointer'>
                    <div className="flex flex-col justify-center  items-center h-screen mx-auto w-[384px] text-center text-white gap-4">
                        <Image src={'/register/banner.png'} width={270} height={270} alt={'image carousel'}/>
                        <p className="text-3xl w-[300px]">Interaksi Sesama
                            Mahasiswa Amikom</p>
                        <p className="text-base w-[300px]">
                            Disini kamu bisa mendapatkan pacar lho!
                            Manfaatkan Amikom Pedia dengan
                            baik
                            agar kamu tidak jomblo
                        </p>
                    </div>
                </div>
            </Slider>

        </>
    )
};

export default CarouselRegister;

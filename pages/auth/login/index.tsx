import Image from "next/image";
import React from "react";
import ImgLogin from "@/public/asset-login/amico.png";
import FrameLogin from "@/public/asset-login/frameLogin.png";

const Login = () => {
  return (
    <>
      <div className="w-full h-full flex items-start bg-white">
        <div className="md:w-1/2 md:flex flex-col items-center justify-center h-screen lg:w-1/2 hidden bg-[#533896] text-center overflow-hidden">
          <Image
            src={ImgLogin}
            alt="login"
            className="object-cover w-64 mx-auto"
          />
          <h1 className="text-3xl mt-6 font-bold text-white mx-14 lg:mx-72">
            Interaksi Sesama Mahasiswa Amikom
          </h1>
          <p className="text-white text-lg font-extralight mx-10 lg:mx-72 mt-4">
            Disini kamu bisa mendapatkan pacar lho! Manfaatkan Amikom Pedia
            dengan baik agar kamu tidak jomblo
          </p>
          <Image
            src={FrameLogin}
            alt="frame"
            className="object-cover mx-auto w-11 mt-4"
          />
        </div>
        <div className="flex flex-col items-center justify-center py-16 lg:py-36 mx-auto">
          <div className="w-full">
            <div>
              <h1 className="text-[2.5rem] font-bold text-center text-[#6548AE]">
                Amikom<span className="font-extralight">Pedia</span>
              </h1>
              <div className="text-center mt-14">
                <h1 className="font-semibold text-[2rem]">
                  Masuk ke Akun anda
                </h1>
                <p className="font-normal text-[#7C7C7C] text-[1.1rem]">
                  Log in di bawah untuk akses akun mu
                </p>
              </div>
            </div>
          </div>
          <form action="" className="mt-10 flex flex-col space-y-1 mx-8">
            <label htmlFor="email-amikom" className="font-semibold text-lg">
              Email Amikom
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Masukkan email anda"
              className="bg-neutral-100 p-3 border-[0.1rem] w-[23rem] rounded-lg mb-6"
            />
            <label htmlFor="assword-amikom" className="font-semibold text-lg">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Masukkan Password"
              className="bg-neutral-100 p-3 border-[0.1rem] w-[23rem] rounded-lg"
            />
            <div className="flex items-center justify-between pb-6">
              <div className="flex items-start">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 border-neutral-100 rounded-lg"
                  />
                </div>
                <div className="ml-2 text-sm">
                  <label htmlFor="remember" className="font-normal text-sm">
                    Ingat Saya
                  </label>
                </div>
              </div>
              <button className="text-[#6548AE] font-normal text-sm">
                Lupa Password?
              </button>
            </div>
            <button
              type="submit"
              className="bg-[#6548AE] text-white font-semibold rounded-lg text-base py-4"
            >
              Masuk
            </button>
          </form>
          <div className="mt-6 flex items-center justify-center w-[24.2rem] py-5 gap-1 text-sm">
            <h1>Belum punya akun?</h1>
            <a className="font-bold text-[#6548AE]" href="/">
              Daftar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
export default Login;

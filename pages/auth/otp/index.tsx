import Image from "next/image";
import Link from "next/link";
import React, { useRef, useState } from "react";

const PagesOTP = () => {
  const maxPinLength = 6;
  const [password, setPassword] = useState<string[]>(
    Array(maxPinLength).fill("")
  );
  const inpRefs = useRef([]);
  const [activeInput, setActiveInput] = useState(0);

  const handleKeyDown = (e: any, i: number) => {
    if (e.key === "Backspace") {
      let pass = [...password];
      pass[i] = "";
      setPassword(pass);
      setActiveInput(i - 1 >= 0 ? i - 1 : 0);
      if (i !== 0) {
        // @ts-ignore
        inpRefs.current[i - 1].focus();
      } else {
        // @ts-ignore
        inpRefs.current[i].blur();
      }
    }
  };

  const handleChange = (e: any, i: number) => {
    let v = e.nativeEvent.data;
    if (/^\d+$/.test(v)) {
      let pass = [...password];
      pass[i] = v;
      setPassword(pass);
      setActiveInput(i + 1 < maxPinLength ? i + 1 : maxPinLength - 1);
      if (i + 1 < maxPinLength) {
        // @ts-ignore
        inpRefs.current[i + 1].focus();
      }
    }
  };

  const handleInputClick = (i: number) => {
    setActiveInput(i);
    inpRefs.current.forEach((ref, index) => {
      if (index !== i) {
        // @ts-ignore
        ref.value = "";
      }
    });
  };

  const handleVerification = (e: any) => {
    e.preventDefault();
    const otpValue = password.join("");
    console.log("OTP Value:", otpValue);
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center min-h-screen">
        <Image src="/next.svg" alt="logo" width={200} height={200}></Image>
        <div className="w-11/12 md:w-[420px] mt-6 bg-white rounded-lg md:drop-shadow-lg md:border-[1px] md:border-primary-border p-8">
          <div className="flex flex-col gap-2">
            <h2 className="text-2xl">Verification</h2>
            <p className="text-slate-300 text-sm">
              Masukkan kode OTP yang dikirim ke email
            </p>
          </div>
          <div className="mt-6">
            <form>
              <div className="flex justify-between gap-2">
                {password.map((digit, i) => (
                  <div key={i} className="w-14 h-14 relative rounded-lg ">
                    <label
                      htmlFor={`pin_${i}`}
                      className={`absolute flex justify-center rounded-lg border items-center text-2xl top-0 left-0 w-full h-full ${
                        activeInput === i
                          ? "bg-gray-200"
                          : "bg-[#F9FAFB] border-[#D1D5DB]"
                      } opacity-100`}
                      onClick={() => handleInputClick(i)}
                    >
                      {digit === "" ? 0 : digit}
                    </label>
                    <input
                      // @ts-ignore
                      ref={(el) => (inpRefs.current[i] = el)}
                      onFocus={() => setActiveInput(i)}
                      onBlur={() => setActiveInput(-1)}
                      onKeyDown={(e) => handleKeyDown(e, i)}
                      onChange={(e) => handleChange(e, i)}
                      onClick={() => handleInputClick(i)}
                      className="w-full h-full text-center border-none outline-none"
                      id={`pin_${i}`}
                      value={digit}
                    ></input>
                  </div>
                ))}
              </div>
              <button
                onClick={handleVerification}
                className="text-md mt-6 bg-[#6548AE] active:border-b-2 active:border-blue-100 outline-none text-white w-full px-4 py-3 text-lg rounded"
              >
                Verifikasi
              </button>
            </form>
          </div>
          <div className="text-slate-300 text-sm flex gap-1 mt-6">
            <p>Tidak menerima kode?</p>{" "}
            <Link className="text-[#6548AE]" href={"/"}>
              Kirim Ulang OTP
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PagesOTP;

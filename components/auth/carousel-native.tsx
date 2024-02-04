const CarouselNative = () => {
  return (
    <div className="flex flex-col items-center w-1/2 text-center text-white gap-4">
      <img src="/icons/amico.png" alt="" />
      <p className="text-3xl">Interaksi Sesama Mahasiswa Amikom</p>
      <p className="text-base">
        Disini kamu bisa mendapatkan pacar lho! Manfaatkan Amikom Pedia dengan
        baik agar kamu tidak jomblo
      </p>
      <div className="flex gap-2">
        {Array(3)
          .fill(0)
          .map((_, index) => (
            // @ts-ignore
            <Circle key={index} />
          ))}
      </div>
    </div>
  );
};

const Circle = () => {
  return <div className="w-2 h-2 rounded-full bg-white"></div>;
};
export default CarouselNative;

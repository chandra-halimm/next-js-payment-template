import React from "react";
import Image from "next/image";

const Main = () => {
  return (
    <section className="container mx-auto my-5">
      <div className="flex flex-row gap-x-10 items-center">
        <div className="grid grid-cols-2 items-center ">
          <div className="gap-y-4">
            <p className="font-bold text-blue-700 text-3xl">
              Salah Satu Percetakan Media Kor an di Jambi
            </p>
            <p className="my-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Molestiae quasi, non similique dolor necessitatibus doloribus.
            </p>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Get Started
            </button>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/cetak.jpg"
              alt="Cetak"
              width={300}
              height={300}
              layout="fixed"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-center font-Medium text-xl mt-4">Partner Kami</h3>
      </div>

      <div className=" flex flex-row gap-x-2 justify-between">
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Cetak"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />

        <Image
          src="/image/logo/jambi_independent.png"
          alt="Cetak"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Cetak"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Cetak"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
      </div>
    </section>
  );
};

export default Main;

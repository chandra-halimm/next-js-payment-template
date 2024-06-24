import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <section className="container mx-auto my-5">
      <div className="flex flex-row gap-x-10 items-center">
        <div className="grid grid-cols-2 items-center ">
          <div className="gap-y-4">
            <p className="font-bold text-blue-600 text-5xl my-3">
              Lebih dari 8 Tahun Memberikan Layanan Terbaik
            </p>
            <p className="my-5 text-slate-500">
              Percayakan kebutuhan cetak koran Anda kepada kami dan biarkan kami
              membantu Anda menyampaikan berita dengan cara yang paling efektif.
            </p>
            <Link href="sign-in">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </Link>
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
        <h3 className="text-center font-Medium text-xl mt-4 text-blue-600 font-medium">
          Partner Kami
        </h3>
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

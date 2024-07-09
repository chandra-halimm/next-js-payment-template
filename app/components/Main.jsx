import React from "react";
import Link from "next/link";
import Image from "next/image";

const Page = () => {
  const message =
    "Halo, saya ingin menanyakan tentang cetak di Monica Intermedia Grafika";
  const phoneNumber = "0895342754470";

  const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
    message
  )}`;
  return (
    <>
      <section className="container mx-auto">
        <p className="text-sky-500 text-center mt-10">2% OF THE INDUSTRY</p>
        <p className="text-6xl font-bold text-center my-5 text-slate-700">
          Temukan kebutuhan mu <br /> <span>Melalui bersama kami</span>
        </p>
        <div className="flex mx-auto justify-center mt-10">
          <Link href="/sign-in">
            <button className="px-5 py-3 bg-sky-500 hover:bg-sky-700 border-slate-200 rounded-lg mx-5 text-white shadow-sm transition delay-50">
              Mulai Sekarang
            </button>
          </Link>
          <button
            onClick={() => window.open(whatsappUrl, "_blank")}
            className="px-5 py-3 bg-slate-100 hover:bg-slate-300 rounded-lg border-slate-200 shadow-sm transition delay-50"
          >
            Kontak Kami
          </button>
        </div>

        <div className="flex justify-between my-32 shadow-md p-10">
          <div>
            <p className="text-center text-sky-700 my-2 text-3xl font-semi-bold">
              200+
            </p>
            <p>Lebih dari 200 pelanggan yang kami cetak</p>
          </div>
          <div>
            <p className="text-center text-sky-700 my-2 text-3xl font-semi-bold">
              10+
            </p>
            <p>Sudah lebih dari 10 tahun kami berdiri</p>
          </div>
          <div>
            <p className="text-center text-sky-700 my-2 text-3xl font-semi-bold">
              20
            </p>
            <p>Lebih dari 20 partner sudah bersama kami </p>
          </div>
          <div>
            <p className="text-center text-sky-700 my-2 text-3xl font-semi-bold">
              24 Jam
            </p>
            <p>Kami selalu aktif dan dihubungi selama 24 jam</p>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="content-center">
            <p className="font-bold text-5xl text-sky-700">
              Menuju Percetakan dengan <br /> kaliber tinggi di masa kini
            </p>
            <Link href="/sign-in">
              <button className="mt-10 px-5 py-3 bg-sky-500 hover:bg-sky-700 border-slate-200 rounded-lg mx-5 text-white shadow-sm transition delay-50">
                Mulai Sekarang
              </button>
            </Link>
          </div>
          <Image
            src="/image/printing1.jpg"
            alt="Cetak"
            width={500}
            height={500}
            layout="fixed"
            objectFit="contain"
          />
        </div>

        <div className="mt-15 flex justify-between" id="about">
          <Image
            src="/image/printing2.jpg"
            alt="Cetak"
            width={500}
            height={500}
            layout="fixed"
            objectFit="contain"
          />
          <div className="content-center">
            <p className="text-center text-4xl font-bold text-slate-700">
              Tentang Kami
            </p>
            <p className="text-center my-5 text-lg text-gray-600">
              Monica Intermedia Grafika merupakan perusahaan yang bergerak di
              bidang percetakan <br /> dengan fokus pada inovasi dan kualitas.
              Kami memberikan layanan cetak berkualitas <br /> tinggi untuk
              memenuhi kebutuhan Anda.
            </p>
          </div>
        </div>

        <div className="mt-32">
          <p className="text-center text-5xl font-bold text-slate-700">
            Tim Kami
          </p>
          <p className="text-center my-5 text-lg">
            Menuju pandangan dunia tentang inovasi disruptif melalui inovasi{" "}
            <br />
            percetakan digital dan talenta-talenta manusia hebat yang
            benar-benar menakjubkan.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-20">
          <div className="flex flex-col items-center">
            <Image
              src="/2.png"
              alt="Cetak"
              width={200}
              height={200}
              layout="fixed"
              objectFit="contain"
              className="rounded-full"
            />
            <p className="text-center text-lg font-semibold mt-4">Sarkawi</p>
            <p className="text-center text-sm text-gray-600">Founder</p>
            <div className="flex space-x-4 mt-4 justify-center">
              <Image
                src="/logo/fb.png"
                alt="Facebook"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/linkedin.png"
                alt="LinkedIn"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/telegram.png"
                alt="Telegram"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/twitter.png"
                alt="Twitter"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/2.png"
              alt="Cetak"
              width={200}
              height={200}
              layout="fixed"
              objectFit="contain"
              className="rounded-full"
            />
            <p className="text-center text-lg font-semibold mt-4">Sarkawi</p>
            <p className="text-center text-sm text-gray-600">Founder</p>
            <div className="flex space-x-4 mt-4 justify-center">
              <Image
                src="/logo/fb.png"
                alt="Facebook"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/linkedin.png"
                alt="LinkedIn"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/telegram.png"
                alt="Telegram"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/twitter.png"
                alt="Twitter"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/2.png"
              alt="Cetak"
              width={200}
              height={200}
              layout="fixed"
              objectFit="contain"
              className="rounded-full"
            />
            <p className="text-center text-lg font-semibold mt-4">Sarkawi</p>
            <p className="text-center text-sm text-gray-600">Founder</p>
            <div className="flex space-x-4 mt-4 justify-center">
              <Image
                src="/logo/fb.png"
                alt="Facebook"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/linkedin.png"
                alt="LinkedIn"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/telegram.png"
                alt="Telegram"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
              <Image
                src="/logo/twitter.png"
                alt="Twitter"
                width={25}
                height={25}
                layout="fixed"
                objectFit="contain"
                className="hover:scale-110 transition-transform duration-200"
              />
            </div>
          </div>
        </div>

        <div className="my-32">
          <p className="text-center font-bold text-3xl text-slate-600">
            Kontak Kami
          </p>
          <p className="text-slate-500 text-center mt-3">
            Jika Anda memiliki pertanyaan atau ingin bekerja sama dengan kami,
            jangan ragu untuk menghubungi kami.
          </p>
          <div className="flex justify-center mt-5">
            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
      <footer className="bg-gray-800 py-5 text-white">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p>&copy; 2024 Monica Intermedia Grafika. All rights reserved.</p>
          </div>
          <div className="flex space-x-4">
            <Image
              src="/logo/fb.png"
              alt="Facebook"
              width={25}
              height={25}
              layout="fixed"
              objectFit="contain"
              className="hover:scale-110 transition-transform duration-200"
            />
            <Image
              src="/logo/linkedin.png"
              alt="LinkedIn"
              width={25}
              height={25}
              layout="fixed"
              objectFit="contain"
              className="hover:scale-110 transition-transform duration-200"
            />
            <Image
              src="/logo/telegram.png"
              alt="Telegram"
              width={25}
              height={25}
              layout="fixed"
              objectFit="contain"
              className="hover:scale-110 transition-transform duration-200"
            />
            <Image
              src="/logo/twitter.png"
              alt="Twitter"
              width={25}
              height={25}
              layout="fixed"
              objectFit="contain"
              className="hover:scale-110 transition-transform duration-200"
            />
          </div>
        </div>
      </footer>
    </>
  );
};

export default Page;

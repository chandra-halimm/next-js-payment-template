import React from "react";
import Image from "next/image";
import Link from "next/link";

const Main = () => {
  return (
    <section className="container mx-auto my-5">
      <div className="flex flex-row gap-x-10 items-center">
        <div className="grid grid-cols-2 items-center">
          <div className="gap-y-4">
            <p className="font-bold text-blue-500 text-5xl my-3">
              Lebih dari 8 Tahun Memberikan Layanan Terbaik
            </p>
            <p className="my-5 text-slate-500">
              Percayakan kebutuhan cetak koran Anda kepada kami dan biarkan kami
              membantu Anda menyampaikan berita dengan cara yang paling efektif.
            </p>
            <Link href="/sign-in">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Get Started
              </button>
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/image/printing1.jpg"
              alt="Cetak"
              width={500}
              height={500}
              layout="fixed"
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      <div>
        <p className="text-center font-bold text-3xl mt-10 text-slate-600">
          Partner Kami
        </p>
        <p className="text-slate-500 text-center mt-3">
          Kami telah menjalin dan bekerja sama dengan beberapa media koran
        </p>
      </div>

      <div className="flex flex-row gap-x-2 justify-between">
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Jambi Independent"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Jambi Independent"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Jambi Independent"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
        <Image
          src="/image/logo/jambi_independent.png"
          alt="Jambi Independent"
          width={200}
          height={200}
          layout="fixed"
          objectFit="contain"
        />
      </div>

      <div className="my-10">
        <p className="text-center font-bold text-3xl text-slate-600">
          Tentang Kami
        </p>
        <p className="text-slate-500 text-center mt-3 mx-5">
          Kami adalah perusahaan percetakan yang berdedikasi untuk memberikan
          layanan terbaik dalam mencetak koran dan berbagai media cetak lainnya.
          Dengan pengalaman lebih dari 8 tahun, kami telah melayani berbagai
          kebutuhan cetak dari berbagai klien, mulai dari perusahaan besar
          hingga usaha kecil.
        </p>
      </div>

      <div className="flex flex-row gap-x-10 items-center my-10">
        <div className="w-1/2">
          <Image
            src="/cetak.jpg"
            alt="Gedung Perusahaan"
            width={500}
            height={500}
            layout="responsive"
            objectFit="cover"
          />
        </div>
        <div className="w-1/2">
          <p className="font-bold text-blue-500 text-3xl mb-5">Visi dan Misi</p>
          <p className="text-slate-500 mb-5">
            <strong>Visi:</strong> Menjadi perusahaan percetakan terkemuka yang
            dipercaya oleh masyarakat luas untuk memenuhi kebutuhan media cetak
            dengan kualitas terbaik.
          </p>
          <p className="text-slate-500">
            <strong>Misi:</strong> Memberikan layanan percetakan yang
            profesional dan berkualitas tinggi, berinovasi dalam setiap produk
            yang kami hasilkan, serta menjalin hubungan baik dengan seluruh
            klien dan mitra kerja.
          </p>
        </div>
      </div>

      <div>
        <p className="text-center font-bold text-3xl text-slate-600">
          Tim Kami
        </p>
        <div className="flex flex-wrap justify-center mt-5">
          <div className="p-5">
            <Image
              src="/image/team/member1.jpg"
              alt="Tim 1"
              width={200}
              height={200}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="text-center font-bold mt-3">John Doe</p>
            <p className="text-center text-slate-500">CEO</p>
          </div>
          <div className="p-5">
            <Image
              src="/image/team/member2.jpg"
              alt="Tim 2"
              width={200}
              height={200}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="text-center font-bold mt-3">Jane Smith</p>
            <p className="text-center text-slate-500">CTO</p>
          </div>
          <div className="p-5">
            <Image
              src="/image/team/member3.jpg"
              alt="Tim 3"
              width={200}
              height={200}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="text-center font-bold mt-3">Alice Johnson</p>
            <p className="text-center text-slate-500">COO</p>
          </div>
          <div className="p-5">
            <Image
              src="/image/team/member4.jpg"
              alt="Tim 4"
              width={200}
              height={200}
              layout="fixed"
              objectFit="cover"
              className="rounded-full"
            />
            <p className="text-center font-bold mt-3">Bob Brown</p>
            <p className="text-center text-slate-500">CFO</p>
          </div>
        </div>
      </div>

      <div className="my-10">
        <p className="text-center font-bold text-3xl text-slate-600">
          Kontak Kami
        </p>
        <p className="text-slate-500 text-center mt-3">
          Jika Anda memiliki pertanyaan atau ingin bekerja sama dengan kami,
          jangan ragu untuk menghubungi kami.
        </p>
        <div className="flex justify-center mt-5">
          <Link href="/contact">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Hubungi Kami
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Main;

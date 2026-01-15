import { Clock, MapPin, Phone } from "lucide-react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-green-950 text-white p-8">
      <div className="flex flex-col lg:grid grid-cols-4 gap-8">
        <div className="flex flex-col gap-4">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <h1 className="font-serif text-lg text-amber-700">
              Aether Tea & Herbs
            </h1>
          </div>
          <p className="text-sm text-stone-300/70">
            Menyajikan kesegaran es teh dan khasiat jamu tradisional Indonesia
            dengan bahan-bahan alami berkualitas tinggi sejak 2015.
          </p>
        </div>
        <div className="hidden lg:flex flex-col gap-4">
          <h1 className="font-serif text-lg">Menu Cepat</h1>
          <div className="flex flex-col gap-1">
            <a href="#" className="text-stone-300/70 hover:text-stone-300">
              Beranda
            </a>
            <a href="#menu" className="text-stone-300/70 hover:text-stone-300">
              Menu
            </a>
            <a
              href="#tentang"
              className="text-stone-300/70 hover:text-stone-300"
            >
              Tentang Kami
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-lg">Hubungi Kami</h1>
          <ul className="space-y-3">
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 mt-0.5 text-amber-700" />
              <span className="text-stone-300/70 ">
                Jl. Kesatrian, Bintaan, Danguran, Kec. Klaten Sel., Kabupaten
                Klaten, Jawa Tengah 57425
              </span>
            </li>
            <li className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-amber-700" />
              <span className="text-stone-300/70 ">+62 858-6988-8884</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-4">
          <h1 className="font-serif text-xl">Jam Buka</h1>
          <ul className="flex flex-row gap-5 space-y-2 lg:flex-row">
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-700" />
              <div className=" text-stone-300/70">
                <p>Senin - Sabtu</p>
                <p>08.00 - 22.00 WIB</p>
              </div>
            </li>
            <li className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-amber-700" />
              <div className=" text-stone-300/70">
                <p>Minggu</p>
                <p>09.00 - 22.00 WIB</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="w-full flex flex-col items-center">
        <hr className="my-6 border-stone-300 w-full" />
        <p className="text-sm text-stone-300">
          &copy; 2026 Aether Tea & Herbs. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

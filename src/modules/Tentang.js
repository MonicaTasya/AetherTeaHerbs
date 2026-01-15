"use client";
import DefaultLayout from "../component/Layout/DefaultLayout";
import { Award, Heart, Leaf, Users } from "lucide-react";
import Image from "next/image";

const Tentang = () => {
  const stats = [
    {
      icon: Users,
      value: "10,000+",
      label: "Pelanggan Puas",
    },
    {
      icon: Leaf,
      value: "100%",
      label: "Bahan Alami",
    },
    {
      icon: Award,
      value: "15+",
      label: "Tahun Pengalaman",
    },
    {
      icon: Heart,
      value: "50+",
      label: "Resep Tradisional",
    },
  ];
  return (
    <DefaultLayout
      className="bg-linear-to-t from-stone-300 to-white"
      id="tentang"
      decoration={
        <Image
          src="/images/pattern.svg"
          alt="decoration"
          width={400}
          height={400}
          className="absolute -bottom-38 -left-30 opacity-15 w-150 h-auto"
        />
      }
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="inline-block  mb-2 text-amber-600">
              Tentang Kami
            </span>
            <h2 className="font-serif text-5xl mb-6 text-amber-600">
              Tradisi Rasa <span className="text-green-900">& Kesehatan</span>
            </h2>
            <div className="space-y-4 text-green-900 text-justify">
              <p>
                Perjalanan kami dimulai pada tahun 2015 dengan sebuah janji
                sederhana bernama Sekecakke. Diambil dari filosofi bahasa Jawa
                yang berarti &quot;memberikan kenyamanan,&quot; Sekecakke lahir
                sebagai upaya kami melestarikan kearifan lokal melalui racikan
                rempah tradisional Jawa. Selama bertahun-tahun, kami belajar
                bahwa kebaikan alam bukan sekadar tentang rasa, melainkan
                tentang koneksi antara manusia dan energi bumi. Seiring
                berjalannya waktu, janji tersebut berevolusi menjadi sesuatu
                yang lebih luas, lebih murni, dan lebih tinggi:{" "}
                <strong>AETHER Tea & Herbs.</strong>
              </p>
              <p>
                Dalam kosmologi klasik, <strong>Aether</strong> adalah elemen
                kelima—sebuah esensi murni yang melampaui tanah, air, udara, dan
                api. Ia adalah medium di mana cahaya merambat, sebuah energi
                yang mengisi kekosongan alam semesta dengan kehidupan. Memilih
                nama Aether adalah pernyataan visi kami: bahwa minuman herbal
                tidak lagi hanya dianggap sebagai &quot;jamu&quot; masa lalu,
                melainkan esensi kesehatan modern yang murni dan bercahaya. Kami
                mengambil sari pati terbaik dari bumi untuk menghadirkan harmoni
                dalam setiap sajian yang Anda nikmati.
              </p>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-xl md:text-3xl font-bold font-serif mb-1">
                  {stat.value}
                </div>
                <div className="text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex flex-col mt-5 lg:items-end lg:mt-0">
        <h2 className="font-serif text-5xl text-amber-600">Komitmen Kami</h2>
        <p className="lg:w-1/2 text-justify text-green-900 mt-5">
          Dalam kosmologi klasik, <strong>Aether</strong> adalah elemen
          kelima—sebuah esensi murni yang melampaui tanah, air, udara, dan api.
          Ia adalah medium di mana cahaya merambat, sebuah energi yang mengisi
          kekosongan alam semesta dengan kehidupan. Memilih nama Aether adalah
          pernyataan visi kami: bahwa minuman herbal tidak lagi hanya dianggap
          sebagai &quot;jamu&quot; masa lalu, melainkan esensi kesehatan modern
          yang murni dan bercahaya. Kami mengambil sari pati terbaik dari bumi
          untuk menghadirkan harmoni dalam setiap sajian yang Anda nikmati.
        </p>
      </div>
    </DefaultLayout>
  );
};

export default Tentang;

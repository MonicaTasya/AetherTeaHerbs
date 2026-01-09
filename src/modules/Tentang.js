"use client";
import DefaultLayout from "../component/Layout/DefaultLayout";
import { Award, Heart, Leaf, Users } from "lucide-react";

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
                <strong>Aether Tea & Herbs</strong> lahir dari kecintaan kami
                terhadap warisan kuliner Nusantara. Sejak tahun 2009, kami
                berkomitmen untuk menyajikan minuman tradisional Indonesia
                dengan kualitas terbaik.
              </p>
              <p>
                Setiap tetes es teh kami diseduh dari daun teh pilihan, dan
                setiap ramuan jamu kami dibuat dari rempah-rempah segar yang
                dipilih langsung dari petani lokal. Kami percaya bahwa kesehatan
                dan kesegaran harus bisa dinikmati oleh semua orang.
              </p>
              <p>
                Dengan resep turun-temurun yang telah kami sempurnakan selama
                bertahun-tahun, kami bangga menjadi bagian dari gaya hidup sehat
                masyarakat Indonesia.
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
    </DefaultLayout>
  );
};

export default Tentang;

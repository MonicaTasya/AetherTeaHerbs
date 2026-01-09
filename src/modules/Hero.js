import DefaultLayout from "../component/Layout/DefaultLayout";
import HeroButton from "../component/Layout/HeroButton";
import Image from "next/image";
import { NavbarResolver } from "../component/Layout/NavbarResolver";

const Hero = () => {
  return (
    <>
      <DefaultLayout
        className="min-h-screen flex items-center justify-center"
        decoration={
          <>
            <Image
              src="/images/hero1.webp"
              alt="hero image"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-linear-to-b from-foreground/60 via-foreground/40 to-background" />
          </>
        }
      >
        <NavbarResolver />
        <div className="flex flex-col items-center gap-6">
          <p
            data-aos="fade-up"
            data-aos-duration="2000"
            className="rounded-3xl px-3 py-1 text-xl text-white inset-0 bg-green-900/20 backdrop-blur-sm"
          >
            100% Bahan Alami dan Segar
          </p>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            className="flex flex-col items-center gap-6"
          >
            <h1
              priority="true"
              className="font-serif text-5xl md:text-7xl font-bold text-white text-center"
            >
              Aether Tea & Herbs
            </h1>
            <Image
              src="/images/logo.webp"
              alt="logo"
              width={250}
              height={250}
              loading="eager"
              className="w-auto h-auto"
            />
          </div>
          <p className="w-[80vw] md:w-150 text-center text-md md:text-xl text-white">
            Nikmati kesegaran es teh dan khasiat jamu tradisional Indonesia yang
            dibuat dengan bahan pilihan dan resep turun-temurun
          </p>
          <div className="flex flex-row gap-10">
            <HeroButton />
          </div>
        </div>
      </DefaultLayout>
    </>
  );
};

export default Hero;

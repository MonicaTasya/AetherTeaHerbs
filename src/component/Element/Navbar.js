"use client";
import { Button } from "../Layout/Button";
import useIsMobile from "@/src/utils/isMobile";
import { X, TextAlignJustify } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { NavbarResolver } from "../Layout/NavbarResolver";

const Navbar = () => {
  const navItems = [
    { label: "Beranda", href: "#" },
    { label: "Menu", href: "#menu" },
    { label: "Tentang Kami", href: "#tentang" },
  ];
  const isMobile = useIsMobile();
  const [isOpen, setisOpen] = useState(false);
  const toggleMenu = () => {
    setisOpen(!isOpen);
  };
  return (
    <>
      {isMobile ? (
        <div className="fixed inset-x-0 top-0 z-30 flex justify-between items-center p-3 bg-stone-100/60 backdrop-blur-sm rounded-b-2xl">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src="/images/logo1.webp"
              alt="logo"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <h1 className="font-serif text-sm text-amber-700">
              Aether Tea & Herbs
            </h1>
          </div>
          {isOpen ? (
            <X className="z-30 text-black" onClick={toggleMenu} />
          ) : (
            <TextAlignJustify className="text-black" onClick={toggleMenu} />
          )}
        </div>
      ) : (
        <div className="fixed inset-x-0 top-0 z-20 flex justify-between items-center px-8 py-3 bg-stone-100/60 backdrop-blur-sm rounded-b-2xl">
          <div className="flex flex-row gap-1 items-center">
            <Image
              src="/images/logo1.webp"
              alt="logo"
              width={50}
              height={50}
              className="w-auto h-auto"
            />
            <h1 className="font-serif text-lg text-amber-700">
              Aether Tea & Herbs
            </h1>
          </div>
          <div className="flex flex-row items-center gap-4 text-md text-black">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-green-900"
              >
                {item.label}
              </a>
            ))}
            <a
              href="https://wa.me/6285869888884"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="green" size="md">
                Pesan Sekarang
              </Button>
            </a>
          </div>
        </div>
      )}
      {isOpen && (
        <div className="fixed right-0 top-0 z-20 flex flex-col h-full w-64 items-start pt-16 p-3 bg-stone-100/60 backdrop-blur-sm">
          <NavbarResolver />
          <div className="flex flex-col items-start gap-4 text-md text-black">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="hover:text-green-900"
              >
                {item.label}
              </a>
            ))}
            <Button
              variant="green"
              size="sm"
              onClick={() => {
                window.location.href = "https://wa.me/6285869888884";
              }}
            >
              Pesan Sekarang
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;

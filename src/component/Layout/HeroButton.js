"use client";
import { Button } from "./Button";

const HeroButton = () => {
  return (
    <>
      <Button
        data-aos="fade-right"
        data-aos-duration="1000"
        variant="green"
        size="xl"
        onClick={() => {
          window.location.href = "#menu";
        }}
      >
        Lihat Menu Kami
      </Button>
      <Button
        data-aos="fade-left"
        data-aos-duration="1000"
        variant="orange"
        size="xl"
        onClick={() => {
          window.location.href = "#tentang";
        }}
      >
        Tentang Kami
      </Button>
    </>
  );
};

export default HeroButton;

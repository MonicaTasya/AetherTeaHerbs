import localFont from "next/font/local";

export const serif = localFont({
  src: "../../public/font/YoungSerif-Regular.ttf",
  display: "swap",
  variable: "--font-serif",
});

export const roboto = localFont({
  src: "../../public/font/RobotoFlex.ttf",
  display: "swap",
  variable: "--font-roboto",
});

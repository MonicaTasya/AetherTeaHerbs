"use client";

import AOS from "aos";
import { useEffect } from "react";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      once: true, // animasi cuma sekali
      duration: 800, // ms
      easing: "ease-out-cubic",
    });
  }, []);

  return children;
}

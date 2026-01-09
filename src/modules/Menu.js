"use client";
import DefaultLayout from "../component/Layout/DefaultLayout";
import { useState } from "react";
import { Droplet, Leaf } from "lucide-react";
import { menuItems } from "../component/data/menuData";
import Card from "../component/Element/Card";
import { Button } from "../component/Layout/Button";
import { cn } from "../utils/cn";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const ITEMS_PER_LOAD = 6;
  const [visibleCount, setVisibleCount] = useState(ITEMS_PER_LOAD);

  const filteredItems =
    activeCategory === "all"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  const visibleItems = filteredItems.slice(0, visibleCount);

  const categories = [
    { id: "all", label: "Semua Menu", icon: null },
    { id: "latte", label: "Latte", icon: Droplet },
    { id: "herbs", label: "Herbs", icon: Leaf },
  ];

  return (
    <DefaultLayout>
      <div className="flex flex-col items-center gap-5 " id="menu">
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-bold text-green-900"
        >
          Menu Pilihan
        </p>
        <h1
          data-aos="fade-up"
          data-aos-duration="1000"
          className="font-serif text-5xl text-center"
        >
          Aether Tea & Herbs
        </h1>
        <p
          data-aos="fade-up"
          data-aos-duration="1000"
          className="text-green-900 text-center"
        >
          Kami menyediakan berbagai pilihan es teh segar dan jamu tradisional
          yang dibuat dari bahan-bahan alami berkualitas tinggi
        </p>
      </div>
      {/* Category Filter */}
      <div className="flex flex-nowrap overflow-x-auto gap-3 scrollbar-hide m-6 md:justify-center">
        {categories.map((cat) => (
          <Button
            variant="green"
            size="md"
            key={cat.id}
            onClick={() => {
              setActiveCategory(cat.id);
              setVisibleCount(ITEMS_PER_LOAD); // 🔥 reset ke 6
            }}
            className={cn(
              "shrink-0 whitespace-nowrap px-6 mt-5",
              activeCategory === cat.id
                ? "shadow-lg"
                : "opacity-60 hover:opacity-100"
            )}
          >
            {cat.icon && <cat.icon className="w-4 h-4" />}
            {cat.label}
          </Button>
        ))}
      </div>

      {/* Menu Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, index) => (
          <Card key={item.id} item={item} index={index} />
        ))}
      </div>
      {/* Load More Button */}
      {visibleCount < filteredItems.length && (
        <div className="flex justify-center mt-4">
          <Button
            variant="green"
            size="sm"
            onClick={() => setVisibleCount((prev) => prev + ITEMS_PER_LOAD)}
          >
            Tampilkan lebih banyak
          </Button>
        </div>
      )}
    </DefaultLayout>
  );
};

export default Menu;

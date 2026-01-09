import { Leaf, Heart } from "lucide-react";
import Image from "next/image";

const MenuCard = ({ item, index }) => {
  return (
    <article
      className="relative bg-amber-200/20 p-3 rounded-3xl"
      style={{ animationDelay: `${index * 100}ms` }}
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      {/* Category Badge */}
      <div className="absolute top-4 right-4">
        <span
          className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium ${
            item.category === "es-teh"
              ? "bg-amber-200/20 text-roboto"
              : "bg-green-200/20 text-roboto"
          }`}
        >
          {item.category === "es-teh" ? "Es Teh" : "Jamu"}
        </span>
      </div>

      {/* Emoji Icon */}
      <div className="w-16 h-16 rounded-2xl bg-linear-to-br from-amber-500 to-amber-400 flex items-center justify-center text-3xl mb-4">
        <Image
          src={item.image}
          alt={item.id}
          width={55}
          height={55}
          className="w-auto h-auto"
        />
      </div>

      {/* Title & Price */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-serif text-xl font-bold leading-tight pr-2">
          {item.name}
        </h3>
        <span className="text-lg font-bold whitespace-nowrap">
          {item.price}
        </span>
      </div>

      {/* Description */}
      <p className="text-sm mb-4 text-justify">{item.description}</p>

      {/* Composition */}
      <div className="mb-4">
        <div className="flex items-center gap-2 mb-2">
          <Leaf className="w-4 h-4 text-amber-800" />
          <span className="text-sm font-semibold text-amber-800">
            Komposisi:
          </span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {item.composition.map((comp, idx) => (
            <li
              key={idx}
              className="text-xs bg-stone-100 px-2 py-1 rounded-xl text-amber-800"
            >
              {comp}
            </li>
          ))}
        </ul>
      </div>

      {/* Benefits */}
      <div>
        <div className="flex items-center gap-2 mb-2">
          <Heart className="w-4 h-4 text-green-900" />
          <span className="text-sm font-semibold text-green-900">Manfaat:</span>
        </div>
        <ul className="flex flex-wrap gap-2">
          {item.benefits.map((benefit, idx) => (
            <li
              key={idx}
              className="text-xs bg-stone-100 px-2 py-1 rounded-xl text-green-900"
            >
              {benefit}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
};

export default MenuCard;

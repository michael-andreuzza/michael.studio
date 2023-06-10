export interface Template {
  image: string;
  name: string;
  description: string;
  link: string;
  price: string;
};
const lexington: Template = {
  name: "Lexington Themes ↗",
  description: "Outstanding themes and UI Kits made with Astro and Tailwind",
  image: "/images/store/lexington/lexingtonCover.jpg",
  link: "https://lexingtonthemes.com/",
  price: "From $99",
};
const diagonal: Template = {
  name: "Diagonal",
  description: "28 Dark mesh wallpapers to use on your projects or as wallpapers",
  image: "/images/store/diagonal/diagonalCover.jpg",
  link: "/store/diagonal",
  price: "$3",
};
const onda: Template = {
  name: "Onda",
  description: "16 Wave wallpapers to use on your projects or as wallpapers",
  image: "/images/store/onda/ondaCover.jpg",
  link: "/store/onda",
  price: "$3",
};
const monoqrom: Template = {
  name: "Monoqrom",
  description: "Quick method to start your design projects in Figma and Tailwind CSS.",
  image: "/images/store/monoqrom/monoqromCover.jpg",
  link: "/store/monoqrom",
  price: "$3",
};
export const byname = {
  lexington,
  diagonal,
  onda,
  monoqrom,
};
export const storefront = Object.values(byname);

export interface Template {
  name: string;
  description: string;
  image: string;
  link: string;
};
const one: Template = {
  name: "Iphone 14 Mockups",
  description: "PSD, Penpot, Sketch",
  image: "https://cdn.dribbble.com/userupload/3731029/file/original-b6736baa9e3ffcd4c17228f52aacd7f7.png?compress=1&resize=2048x1536",
  link: "/product-page",
};
const two: Template = {
  name: "Stationery mockups",
  description: "Figma",
  image: "https://cdn.dribbble.com/userupload/4268363/file/original-70d4c3e82e53d088cd068604f366ca7e.jpg?compress=1&resize=1504x1128",
  link: "/product-page",
};
const three: Template = {
  name: "Folder and cards mockup",
  description: "PSD",
  image: "https://primapersona.lexingtonthemes.com/_astro/eighteen.fa425883_1QCvJy.webp",
  link: "/product-page",
};
const four: Template = {
  name: "5k HD Wallpapers",
  description: "PNG, Heic, JPG",
  image: "https://primapersona.lexingtonthemes.com/_astro/seventeen.51851cd2_Z2cGhOq.webp",
  link: "/product-page",
};
const five: Template = {
  name: "Iphone 14 Pro muckup",
  description: "PSD",
  image: "https://primapersona.lexingtonthemes.com/_astro/nineteen.c37f91d0_3SUz5.webp",
  link: "/product-page",
};
const six: Template = {
  name: "Tote bags muckup",
  description: "PSD",
  image: "https://primapersona.lexingtonthemes.com/_astro/twenty.11389435_1Yk12q.webp",
  link: "/product-page",
};
export const byname = {
  one,
  two,
  three,
  four,
  five,
  six,
};
export const store = Object.values(byname);

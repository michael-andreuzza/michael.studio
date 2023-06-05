export interface Template {
  name: string;
  description: string;
  image: string;
  link: string;
};
const one: Template = {
  name: "Sequoia  Theme",
  description: "This theme for VS Code is not only black and elegant, but it also embodies a modern and gentle aesthetic. The combination of these design elements creates a sleek and sophisticated appearance that is both visually appealing and easy on the eyes. The dark backdrop allows for a high contrast between text and background, which makes it easy to read and navigate through your code. Additionally, the use of subtle and muted colors adds a touch of refinement, making it a perfect choice for those who appreciate minimalistic and stylish design. Overall,this theme is a great choice for anyone looking for a sleek and modern look while coding in VS Code.",
  image: "/images/sequoia.png",
  link: "#",
};
const two: Template = {
  name: "Serendipity Theme",
  description: "This theme for VS Code has an elegant, minimalistic, and clean design, which provides a refreshing and soothing visual experience for your eyes. The color palette is carefully chosen to strike a balance between being easy on the eyes and providing enough contrast to make your code stand out. This means that you can work for long hours without feeling fatigued or straining your eyes. The minimalistic design approach also helps to reduce clutter and distractions, allowing you to focus on your code and increase productivity. Overall, this theme is an excellent choice for those who value simplicity and a clean aesthetic when coding in VS Code.",
  image: "/images/serendipity.png",
  link: "#",
};
const three: Template = {
  name: "Svg Doodles",
  description: "This is a collection of 50 different hand-crafted and editable SVG doodles that you can access and use for free. Each doodle is unique and has been carefully crafted by hand to give it a personal touch and feel. As they are in SVG format, they are scalable without losing quality, which means that you can use them for various purposes without worrying about pixelation or distortion. Additionally, being editable, you can customize them to fit your specific needs by changing the colors, size, or shape. Whether you are designing a website, creating a presentation, or adding some personal flair to your digital project, these SVG doodles offer a great way to enhance your visual content in a unique and creative way.",
  image: "/images/svgdoodles.png",
  link: "#",
};
const four: Template = {
  name: "Unwrapped Design",
  description: "This collection comprises of various digital resources that are specifically designed to help designers and web developers optimize their workflow and increase their productivity. These resources include a variety of tools, templates, icons, graphics, fonts, and more. By providing access to these resources, designers and developers can easily and quickly create stunning designs and websites without having to start from scratch. Whether you are looking to speed up your design process, improve the quality of your work, or simply add some creative flair to your projects, these digital resources can help you achieve your goals. Overall, this collection is an excellent choice for anyone looking to supercharge their workflow and take their digital creations to the next level.",
  image: "/images/unwrapped.png",
  link: "#",
};
const five: Template = {
  name: "Colors & Fonts",
  description: "This collection provides inspiration for web developers and digital designers looking to elevate their design projects with unique and creative color and typography choices. It includes a wide range of color palettes and typography combinations that are visually appealing and can help bring a sense of personality to any design. With this collection, designers and developers can gain inspiration for their own projects and explore new ways to incorporate color and typography into their designs. Whether you are a seasoned professional or just starting out, this collection offers a valuable resource for anyone looking to create stunning and engaging designs that stand out.",
  image: "/images/caf.png",
  link: "#",
};
const six: Template = {
  name: "SVG Gradients",
  description: "This collection comprises of 50 free SVG mesh gradients that are readily available in Figma and can be easily copied and pasted into your design projects. These gradients have been carefully crafted to give a smooth and natural gradient effect, making them an excellent choice for adding depth and dimensionality to your designs. With Figma integration, designers can access and use these gradients seamlessly, making it easy to incorporate them into their designs without any hassle. Being SVG, they are also scalable without losing quality, making them a versatile resource for designers to use in various projects. Overall, this collection is an excellent choice for anyone looking to enhance their designs with beautiful and unique mesh gradients.",
  image: "/images/svggradients.png",
  link: "#",
};
export const byname = {
  one,
  two,
  three,
  four,
  five,
  six,
};
export const projects = Object.values(byname);

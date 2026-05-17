import type { StaticImageData } from "next/image";
import cheese from "./cheese.png";
import classicRoasted from "./classicroasted.png";
import creamOnion from "./cream&onion.png";
import heroBackground from "./background.png";
import himalayanSalt from "./himlayansalt.png";
import periPeri from "./periperi.png";
import productLineup from "./45d3d748-a123-4620-8833-697ff2357c0f.png";
import pudina from "./pudina.png";
import singleMakhana from "./singleimage.png";

export const images = {
  heroBackground,
  productLineup,
  singleMakhana
};

export const marketplaces = [
  { name: "Amazon", mark: "a", tone: "#ff9900" },
  { name: "Blinkit", mark: "b", tone: "#f8cb46" },
  { name: "Zepto", mark: "z", tone: "#7b1fa2" },
  { name: "Swiggy Instamart", mark: "s", tone: "#fc8019" },
  { name: "BigBasket", mark: "bb", tone: "#84c225" },
  { name: "Flipkart Minutes", mark: "f", tone: "#2874f0" }
];

export const reasons = [
  {
    title: "Roasted, Not Fried",
    text: "Airy crunch with clean seasoning and no heavy oiliness."
  },
  {
    title: "High Protein Snack",
    text: "A wholesome snack for work breaks, school tiffins, and travel."
  },
  {
    title: "Light & Crunchy",
    text: "Naturally popped fox nuts with a satisfying premium bite."
  },
  {
    title: "Indian Sourced",
    text: "Rooted in Indian farms and made for modern Indian homes."
  },
  {
    title: "Evening Ready",
    text: "A better chai-time companion for families and young professionals."
  },
  {
    title: "Quality Controlled",
    text: "Small-batch care, consistent seasoning, and sealed freshness."
  }
];

export const products = [
  {
    name: "Himalayan Salt",
    note: "Clean, mineral, all-day classic",
    colors: ["#e9f2ff", "#174778"],
    image: himalayanSalt
  },
  {
    name: "Peri Peri",
    note: "Fiery, tangy, street-style energy",
    colors: ["#fff0df", "#e24a1b"],
    image: periPeri
  },
  {
    name: "Pudina",
    note: "Fresh mint with a cool Indian finish",
    colors: ["#edf8df", "#2d7d37"],
    image: pudina
  },
  {
    name: "Cheese",
    note: "Creamy comfort with a premium crunch",
    colors: ["#fff4c8", "#e9a51a"],
    image: cheese
  },
  {
    name: "Cream & Onion",
    note: "Smooth, savoury, and snackable",
    colors: ["#fbebff", "#7e3796"],
    image: creamOnion
  },
  {
    name: "Classic Roasted",
    note: "Golden roasted simplicity",
    colors: ["#fff1dd", "#b56829"],
    image: classicRoasted
  }
] satisfies Array<{
  name: string;
  note: string;
  colors: [string, string];
  image: StaticImageData;
}>;

export const testimonials = [
  {
    quote: "Tastes premium without feeling heavy. It has become our evening snack with chai.",
    name: "Ritika S.",
    role: "Gurugram"
  },
  {
    quote: "The crunch is genuinely better than regular makhana brands I have tried.",
    name: "Aman V.",
    role: "Bengaluru"
  },
  {
    quote: "Looks great on the shelf and feels like a healthier snack for the whole family.",
    name: "Neha K.",
    role: "Mumbai"
  }
];

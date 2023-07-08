import React from "react";
import { GiCompass, GiDiamondHard, GiStabbedNote } from "react-icons/gi";
import { FaLinkedinIn, FaInstagram, FaTwitter } from "react-icons/fa";

export const links = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "about",
    url: "/about",
  },
  {
    id: 3,
    text: "products",
    url: "/products",
  },
];

export const services = [
  {
    id: 1,
    icon: <GiCompass />,
    title: "mission",
    text: "To provide a hassle-free experience to every customer such that they can sit back at home and decide what's best for their home.",
  },
  {
    id: 2,
    icon: <GiDiamondHard />,
    title: "vision",
    text: "To become No.1 Home Decor Company in all of the world while delivering top service and quality to all the customers",
  },
  {
    id: 3,
    icon: <GiStabbedNote />,
    title: "history",
    text: "We have a impeccable record of delivering all goods on time and meeting the expectations of our customers without fail.",
  },
];

export const Socials = [
  {
    title: "Instagram",
    url: "https://www.instagram.com/kaun_kanha",
    icon: <FaInstagram />,
  },
  {
    title: "Twitter",
    url: "https://www.twitter.com/krishnakul29",
    icon: <FaTwitter />,
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/krishna-kulshreshtha/",
    icon: <FaLinkedinIn />,
  },
];

export const products_url = "https://course-api.com/react-store-products";

export const single_product_url = `https://course-api.com/react-store-single-product?id=`;

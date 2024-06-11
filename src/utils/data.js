import {
  FaCode,
  FaMobileAlt,
  FaCloud,
  FaLock,
  FaDatabase,
  FaBullhorn,
  FaShoppingCart,
} from "react-icons/fa";

export const links = [
  { title: "home", path: "/" },
  { title: "experience", path: "/experience" },
  { title: "skills", path: "/about" },
  { title: "work", path: "/projects" },
  { title: "blog", path: "/blog" },
  { title: "contact", path: "/contact" },
];
export const services = [
  {
    name: "Web Development",
    desc:
      "Building responsive and modern websites tailored to your business needs.",
    icon: <FaCode className="text-4xl text-blue-500" />,
  },
  {
    name: "Mobile App Development",
    desc:
      "Creating seamless mobile applications for Android and iOS platforms.",
    icon: <FaMobileAlt className="text-4xl text-green-500" />,
  },

  {
    name: "Digital Marketing",
    desc:
      "Boost your online presence with our expert digital marketing services.",
    icon: <FaBullhorn className="text-4xl text-pink-500" />,
  },
  {
    name: "E-commerce Solutions",
    desc:
      "Developing robust e-commerce platforms to enhance your online sales.",
    icon: <FaShoppingCart className="text-4xl text-orange-500" />,
  },
];

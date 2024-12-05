import { FaDiscord, FaGithub, FaTwitter, FaYoutube } from "react-icons/fa";

const links = [
  { href: "https://discord.com", icon: <FaDiscord />, label: "Discord" },
  { href: "https://twitter.com", icon: <FaTwitter />, label: "Twitter" },
  { href: "https://github.com", icon: <FaGithub />, label: "GitHub" },
  { href: "https://youtube.com", icon: <FaYoutube />, label: "YouTube" },
];

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-screen text-white bg-violet-500">
      <div className="container flex flex-col items-center gap-8 px-6 py-8 mx-auto md:flex-row md:justify-between">
        {/* Brand & Tagline */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold">Zentry</h2>
          <p className="text-sm text-gray-200">
            Empowering your digital journey since 2023.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-10 h-10 text-xl transition-transform duration-300 transform rounded-full hover:scale-110 hover:bg-violet-700"
              aria-label={link.label}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Legal Links */}
        <div className="text-sm text-center md:text-right">
          <a href="#privacy-policy" className="block hover:underline">
            Privacy Policy
          </a>
          <p className="text-gray-300">
            &copy; {currentYear} Zentry. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

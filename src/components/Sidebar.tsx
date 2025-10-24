import { Instagram, Linkedin } from "lucide-react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Works", path: "/works" },
    { name: "Photo Gallery", path: "/photo-gallery" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <aside className="fixed right-0 top-0 h-screen w-80 bg-primary flex flex-col justify-between p-8 z-50">
      <nav className="flex flex-col gap-8 mt-12">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `text-primary-foreground text-xl font-light transition-all hover:pl-2 ${
                isActive ? "font-medium" : ""
              }`
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>

      <div className="flex flex-col gap-6">
        <div className="flex gap-4">
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Instagram className="w-5 h-5 text-primary" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
          >
            <Linkedin className="w-5 h-5 text-primary" />
          </a>
          <a
            href="https://behance.net"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full bg-primary-foreground flex items-center justify-center hover:scale-110 transition-transform"
          >
            <span className="text-primary font-bold text-sm">Bē</span>
          </a>
        </div>
        <div className="text-primary-foreground text-sm">
          <p className="italic mb-1">"Designing for humans, not users.</p>
          <p className="italic">Let's connect through meaningful design."</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;

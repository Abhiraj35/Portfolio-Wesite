import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 max-w-[500px] pointer-events-auto flex w-full items-center justify-center rounded-full px-6 py-1 transition-all duration-500 ease-in-out sm:pr-4 border-b border-neutral-900 backdrop-blur-md z-10 h-10">
      <ul className="flex gap-6 text-lg text-text-secondary sm:flex font-thik">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item} className="group relative">
            <a href={`#${item.toLowerCase()}`}>
              <span className="relative inline-flex overflow-hidden">
                <div className="transform-gpu transition-transform duration-500 group-hover:-translate-y-[110%] group-hover:skew-y-12">
                  {item}
                </div>
                <div className="absolute translate-y-[110%] skew-y-12 transform-gpu text-text-primary transition-transform duration-500 group-hover:translate-y-0 group-hover:skew-y-0">
                  {item}
                </div>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


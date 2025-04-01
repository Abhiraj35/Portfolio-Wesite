import React from "react";

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 max-w-[600px] pointer-events-auto flex w-full items-center justify-between rounded-full px-6 py-1 transition-all duration-500 ease-in-out sm:pr-4 border-b border-neutral-900 backdrop-blur-md z-10">
      <ul className="flex gap-6 text-sm text-text-secondary sm:flex font-thik">
        {["Home", "About", "Projects", "Contact"].map((item) => (
          <li key={item} className="group relative">
            <a href={`/${item.toLowerCase()}`}>
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
      <button className="h-10 w-10 rounded-full border border-bg-700 bg-backdrop text-text-primary shadow backdrop-blur-md transition-all active:scale-90 flex items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-sun"
        >
          <circle cx="12" cy="12" r="4"></circle>
          <path d="M12 2v2"></path>
          <path d="M12 20v2"></path>
          <path d="m4.93 4.93 1.41 1.41"></path>
          <path d="m17.66 17.66 1.41 1.41"></path>
          <path d="M2 12h2"></path>
          <path d="M20 12h2"></path>
          <path d="m6.34 17.66-1.41 1.41"></path>
          <path d="m19.07 4.93-1.41 1.41"></path>
        </svg>
        <span className="sr-only">Toggle theme</span>
      </button>
    </nav>
  );
};

export default Navbar;

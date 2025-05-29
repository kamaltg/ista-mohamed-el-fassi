import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function DesktopDropdown({ children, label, dropdown }) {
  const [isOpen, setIsOpen] = useState(false);
  const showMenu = isOpen && children;
  const { pathname } = useLocation();

  const isActive = dropdown.some((item) => item.href === pathname);

  return (
    <div
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      className="relative cursor-default">
      <div className="relative">
        <button
          className={`${isActive ? "text-green" : "text-blue"} flex items-center justify-center gap-2 font-bold`}>
          {label}
          <FaChevronDown className="text-xs" />
        </button>
        <span
          style={{ transform: isOpen ? "scaleX(1)" : "scaleX(0)" }}
          className="bg-blue absolute -right-2 -bottom-2 -left-2 h-1 origin-left rounded-full transition-transform duration-300 ease-out"
        />
      </div>
      <AnimatePresence>
        {showMenu && (
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 15 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="absolute top-10 left-1/2 z-1 -translate-x-1/2 rounded-md bg-neutral-100 shadow-sm/30">
            <div className="absolute -top-5 right-0 left-0 h-7 bg-transparent"></div>
            <ul className="flex w-max max-w-70 min-w-50 flex-col gap-4 p-6">
              {children}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default DesktopDropdown;

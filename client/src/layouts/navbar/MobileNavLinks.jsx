import navLinks from "@/data/navLinks.json";
import MobileDropdown from "@/layouts/navbar/MobileDropdown";
import NavItem from "@/layouts/navbar/NavItem";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

function MobileNavLinks({ isOpen }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.3, ease: "easeIn" }}
            className="bg-blue min-h- space-y-2 p-8 text-center text-white">
            {navLinks.map(
              (item) =>
                !item.hidden && (
                  <li className="py-2" key={item.label}>
                    {item.href ? (
                      <NavItem to={item.href} label={item.label} revertColors />
                    ) : (
                      <MobileDropdown
                        expanded={expanded}
                        setExpanded={setExpanded}
                        item={item}
                      />
                    )}
                  </li>
                ),
            )}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
}

export default MobileNavLinks;

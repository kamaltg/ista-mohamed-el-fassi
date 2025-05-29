import { fadeInUp } from "@/animations";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const scrollToTop = (smooth = false) => {
  if (smooth) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  } else {
    document.documentElement.scrollTop = 0;
  }
};

function ScrollToTop({ top = 500, smooth = true }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(document.documentElement.scrollTop >= top);
    };
    onScroll();
    document.addEventListener("scroll", onScroll);
    return () => document.removeEventListener("scroll", onScroll);
  }, [top]);

  return (
    <>
      <AnimatePresence>
        {visible && (
          <motion.button
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="bg-gray/20 hover:bg-gray/50 fixed bottom-5 left-5 z-3 size-10 cursor-pointer rounded-md border-none p-1 text-white shadow-md"
            onClick={() => scrollToTop(smooth)}
            aria-label="Scroll to top">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m18 15-6-6-6 6"
              />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}

export default ScrollToTop;

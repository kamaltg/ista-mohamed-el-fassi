import { fadeInUp } from "@/animations/motionVariants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

function RevealOnScroll({
  children,
  variant = fadeInUp,
  delay = 0.3,
  duration = 1,
  ...props
}) {
  const ref = useRef(null);

  // Trigger when element is roughly in the center of the screen
  const isInView = useInView(ref, {
    once: true,
    margin: "-30% 0px -30% 0px", // top and bottom margins to center the trigger zone
  });

  const variantWithDelayAndDuration = {
    ...variant,
    visible: {
      ...variant.visible,
      transition: {
        ...variant.visible.transition,
        delay,
        duration,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={variantWithDelayAndDuration}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      {...props}>
      {children}
    </motion.div>
  );
}

export default RevealOnScroll;

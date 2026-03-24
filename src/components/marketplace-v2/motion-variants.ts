import type { Variants } from "framer-motion";

export const cardHoverVariants: Variants = {
  rest: { scale: 1, y: 0 },
  hover: { scale: 1.03, y: -4 },
};

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

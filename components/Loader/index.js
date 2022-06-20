import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ORG_NAME } from "../../lib/constants";

const loadingContainer = {
  width: "4rem",
  height: "4rem",
  display: "flex",
  justifyContent: "space-around",
  backgroundColor: ""
};
const loadingCircle = {
  display: "block",
  width: "1rem",
  height: "1rem",
  backgroundColor: "#2e4a79",
  borderRadius: "0.5rem",
};

const loadingContainerVariants = {
  start: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  end: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const loadingCircleVariants = {
  start: {
    y: "0%",
  },
  end: {
    y: "60%",
  },
};
const loadingCircleTransition = {
  duration: 0.4,
  yoyo: Infinity,
  ease: 'easeInOut'
};

const Loader = () => {
  return (
    <div className="fixed top-0 bottom-0 bg-accent-1 z-10">
      <div className="flex fixed w-full justify-center items-center h-screen z-10 bg-accent-1 flex-col">
        <Link href={'/'}>
          <img src="/assets/TINEB.jpeg" alt={ORG_NAME} width={150} height={150} className="mb-5 cursor-pointer" />
        </Link>
        <motion.div
          style={loadingContainer}
          variants={loadingContainerVariants}
          initial="start"
          animate="end"
        >
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
          <motion.span
            style={loadingCircle}
            variants={loadingCircleVariants}
            transition={loadingCircleTransition}
          ></motion.span>
        </motion.div>
      </div>
      <div className="fixed w-full min-h-screen z-5 bg-accent-1" />
    </div>
  );
};

export default Loader;

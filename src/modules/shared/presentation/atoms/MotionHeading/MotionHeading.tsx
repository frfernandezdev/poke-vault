import { motion } from "framer-motion";
import {
  Heading as ChakraHeading,
} from "@chakra-ui/react";

const MotionHeading = motion(ChakraHeading, { forwardMotionProps: true });

export default MotionHeading;

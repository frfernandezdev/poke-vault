import { motion } from "framer-motion";
import { Container as ChakraContainer } from "@chakra-ui/react";

const MotionContainer = motion(ChakraContainer, { forwardMotionProps: true });

export default MotionContainer;

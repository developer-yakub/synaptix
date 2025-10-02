import { useScroll, useTransform } from "framer-motion";
import { isClient, isDesktop } from "./utils";

// Custom hook for 3D scroll transforms
export function use3DScrollTransform(targetRef) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"]
  });

  // Utility function to create conditional transforms
  const createConditionalTransform = (inputRange, outputRange, defaultValue = 0) => {
    if (!isClient()) {
      return defaultValue;
    }
    
    const transform = useTransform(scrollYProgress, inputRange, outputRange);
    return isDesktop() ? transform : defaultValue;
  };

  // Utility function for simple value transforms
  const createValueTransform = (inputRange, outputRange) => {
    return useTransform(scrollYProgress, inputRange, outputRange);
  };

  return {
    scrollYProgress,
    createConditionalTransform,
    createValueTransform
  };
}
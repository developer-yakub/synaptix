import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// Utility function to check if we're on the client side
export function isClient() {
  return typeof window !== 'undefined';
}

// Utility function to safely get window dimensions
export function getWindowDimensions() {
  if (!isClient()) {
    return { width: 1200, height: 800 }; // Default desktop dimensions
  }
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

// Utility function to check if device is desktop
export function isDesktop() {
  const { width } = getWindowDimensions();
  return width >= 1024;
}

// Utility function to conditionally apply 3D transforms
export function conditional3DTransform(transformValue, defaultValue = 0) {
  if (!isClient()) {
    return defaultValue;
  }
  return isDesktop() ? transformValue : defaultValue;
}
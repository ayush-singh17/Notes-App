// theme-provider.jsx
"use client";

import {
  ChakraProvider,
} from "@chakra-ui/react";

import { createSystem, defaultConfig } from "@chakra-ui/react";
import { defineConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        bg: {
          DEFAULT: { value: "{colors.gray.50}" }, // light background
          _dark: { value: "{colors.gray.900}" },  // dark background
        },
        text: {
          DEFAULT: { value: "{colors.black}" },
          _dark: { value: "{colors.white}" },
        },
      },
    },
  },
});

// 2. Create system
const system = createSystem(defaultConfig, config);

// 3. Wrap ChakraProvider
export function ThemeProvider({ children }) {
  return <ChakraProvider value={system}>{children}</ChakraProvider>;
}
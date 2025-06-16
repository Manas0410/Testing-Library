// vitest.config.ts
import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom", // ✅ This enables DOM support
    setupFiles: "tests/setup.ts", // ✅ This is where you import your setup file
    globals: true, // ✅ This allows using global variables like `describe`, `it`, etc.
  },
});

// matchers https://github.com/testing-library/jest-dom

const plugin = require("tailwindcss/plugin");

module.exports = {
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        "blue-500": "#3b82f6",
        "indigo-300": "#a5b4fc",
        "blue-300": "#93c5fd",
        "violet-200": "#c4b5fd",
        "blue-400": "#60a5fa",
      },
    },
  },
  plugins: [
    plugin(function ({ addBase }) {
      addBase({
        ":root": {
          "--white": "#ffffff",
          "--black": "#000000",
          "--blue-500": "#3b82f6",
          "--indigo-300": "#a5b4fc",
          "--blue-300": "#93c5fd",
          "--violet-200": "#c4b5fd",
          "--blue-400": "#60a5fa",
          "--transparent": "rgba(0, 0, 0, 0)",
        },
      });
    }),
  ],
};

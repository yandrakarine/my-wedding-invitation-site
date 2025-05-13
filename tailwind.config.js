/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        ebgregular: ['EBGaramondRegular', 'sans-serif'],
        ebgitalic: ['EbgaramondItalic', 'sans-serif'],
        malibu: ['MalibuRegular', 'sans-serif'],
      },
      colors: {
        primary: '#fff',
        secondary: '#505946',
      },
    },
  },
  plugins: [],
}



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,jsx}"],
//   theme: {
//     extend: {
//       fontFamily: {
//         ebgitalic: ["EBGaramondItalic"],
//         ebgregular: ["EBGaramonRegular"],
//         malibu: ["MalibuRegular"],
//       },
//       colors: {
//         olive: "#505946",
//       },
//     },
//   },
//   plugins: [],
// };

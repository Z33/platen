const typoMaxW = "65ch"

module.exports = {
  important: true,
  future: {
    removeDeprecatedGapUtilities: true,
  },
  purge: ["./src/**/*.html", "./src/**/*.js", "./src/**/*.jsx"],
  theme: {
    // debugScreens: {
    //   style: {
    //     backgroundColor: "black",
    //     color: "white",
    //   },
    // },
    extend: {
      maxWidth: {
        typo: typoMaxW,
      },
      fontFamily: {
        "open-sans": ["Open Sans", "sans-serif"],
        "fira-code": ["Fira Code", "monospace"],
      },
      borderWidth: {
        "3": "3px",
      },
      opacity: {
        "10": "0.1",
        "20": "0.2",
        "90": "0.90",
      },
      backgroundOpacity: {
        "10": "0.1",
        "20": "0.2",
        "90": "0.90",
      },
      colors: {
        primary: {
          100: "#cdb5ea",
          200: "#d3c1e8",
          300: "#b698d8",
          400: "#996fc9",
          500: "#6e32b3",
          600: "#58288f",
          700: "#421e6b",
          800: "#2c1447",
          900: "#160a23",
        },
        secondary: {
          100: "#5fd295",
          500: "#32b36e",
          900: "#217749",
        },
        // tertiary: {
        //   100: '#d2955f',
        //   500: '#b36e32',
        //   900: '#774921',
        // },
        tertiary: {
          100: "#F7F1EB",
          200: "#ECDBCC",
          300: "#E1C5AD",
          400: "#CA9A70",
          500: "#B36E32",
          600: "#A1632D",
          700: "#6B421E",
          800: "#513217",
          900: "#36210F",
        },
        cmykBlue: {
          100: "#cce9f6",
          200: "#99d4ed",
          300: "#66bee5",
          400: "#33a9dc",
          500: "#0093d3",
          600: "#0076a9",
          700: "#00587f",
          800: "#003b54",
          900: "#001d2a",
        },
        cmykRed: {
          100: "#f5cce1",
          200: "#eb99c4",
          300: "#e067a6",
          400: "#d63489",
          500: "#cc016b",
          600: "#a30156",
          700: "#7a0140",
          800: "#52002b",
          900: "#290015",
        },
        cmykYellow: {
          100: "#fffccf",
          200: "#fff99e",
          300: "#fff76e",
          400: "#fff43d",
          500: "#fff10d",
          600: "#ccc10a",
          700: "#999108",
          800: "#666005",
          900: "#333003",
        },
      },
    },
    //   typography: {
    //     default: {
    //       css: {
    //         maxWidth: false,
    //         p: { maxWidth: typoMaxW },
    //         strong: { maxWidth: typoMaxW },
    //         ul: { maxWidth: typoMaxW },
    //         ol: { maxWidth: typoMaxW },
    //         hr: { maxWidth: typoMaxW },
    //         blockquote: { maxWidth: typoMaxW },
    //         h1: { maxWidth: typoMaxW },
    //         h2: { maxWidth: typoMaxW },
    //         h3: { maxWidth: typoMaxW },
    //         h4: { maxWidth: typoMaxW },
    //         pre: { maxWidth: typoMaxW },
    //         code: { maxWidth: typoMaxW },
    //         table: { maxWidth: typoMaxW },
    //         "ol > li::before": false,
    //         "ol > li::after": false,
    //         "ul > li::before": false,
    //         "ul > li::after": false,
    //         "code::before": false,
    //         "code::after": false,
    //       },
    //     },
    //   },
  },
  variants: [
    "responsive",
    "odd",
    "even",
    "hover",
    "focus",
    "active",
    "visited",
    "disabled",
  ],
  // plugins: [require("@tailwindcss/typography")],
  // plugins: [require("tailwindcss-debug-screens")],
}

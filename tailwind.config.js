module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  // backgroundtheme: {
  //   extend: {
  //     backgroundImage: {
  //       'hero-pattern': "url('../doctors-portal-client/src/assets/images/bg.png')",
  //       'footer-texture': "url('/img/footer-texture.png')",
  //     }
  //   }
  // },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0FCFEC",
          secondary: "#19D3AE",
          accent: "#3A4256",
          neutral: "#3d4451",
          "base-100": "#ffffff",
        },
      },
      "dark",
      "cupcake",
    ],
  },

}
module.exports = {
  siteMetadata: {
    title: `Kominictví Radim Ďuriš`,
    description: `Kominictví Radim Ďuriš`,
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-smoothscroll`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kominictví Radim Ďuriš`,
        short_name: `Kominictví`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: "src/images/gatsby_icon.png",
      },
    },
    // ...
  ],
};

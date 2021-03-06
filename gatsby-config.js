module.exports = {
  siteMetadata: {
    title: `Kominictví Radomír Ďuriš`,
    description: `Kominictví Radomír Ďuriš, provádíme revize komínových částí, revize komínů, čištění spalinových cest a čištění všech typů komínů, také opravy nadstřešních částí komínů, frézování komínu a v neposlední řadě vložkování komínů.`,
    siteUrl: "https://www.kominictviduris.cz/",
  },
  plugins: [
    "gatsby-plugin-postcss",
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-smoothscroll`,
    `gatsby-transformer-sharp`,
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images/`,
        name: "images",
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kominictví Radomír Ďuriš`,
        short_name: `Kominictví`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
        icon: "src/images/gatsby_icon.png",
      },
    }
  ],
};

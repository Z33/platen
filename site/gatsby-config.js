const { typeNameFromFile } = require("gatsby-transformer-csv")

module.exports = {
  siteMetadata: {
    title: `Platen`,
    description: `Write your next game with Platen, a project for providing scaffolding of digital tabletop roleplaying tools and other interactive web books.`,
    author: `@Platen`,
  },
  plugins: [
    `gatsby-plugin-smoothscroll`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-remark-images`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/img`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `globals`,
        path: `${__dirname}/src/globals`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        // defaultLayouts: {
        //   default: require.resolve("./src/templates/Underpage.js"),
        // },
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
            },
          },
          {
            resolve: `gatsby-remark-copy-linked-files`,
            options: {
              ignoreFileExtensions: [`png`, `jpg`, `jpeg`, `bmp`, `tiff`],
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `csv`,
        path: `${__dirname}/static/csv`,
      },
    },
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        google: {
          families: ["Open Sans:400,700,800", "Fira Code:300,400,700"],
        },
      },
    },
    {
      resolve: `gatsby-plugin-postcss`,
    },
    `gatsby-plugin-emotion`,
    // // this (optional) plugin enables Progressive Web App + Offline functionality
    // // To learn more, visit: https://gatsby.dev/offline
    `gatsby-plugin-offline`,
  ],
}
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby-Ecommerce`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-postcss", "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/",
      "jpegQuality": "90",
    },
    __key: "images"
  }]
};
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `kehinde-blog`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`
        ],
        web: [
          {
            name: `DM Sans`,
            file: `https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;700&display=swap`
          },
          {
            name: `Raleway`,
            file: `https://fonts.googleapis.com/css2?family=Raleway:wght@400;700&display=swap`
          }
        ]
      }
    }
  ]
}

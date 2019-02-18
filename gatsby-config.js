module.exports = {
  siteMetadata: {
    title: "Rounds Chat",
    author: "Rounds Chat",
    description: "Rounds Chat - Secure and fast healthcare chat."
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rounds Chat',
        short_name: 'Rounds Chat',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}

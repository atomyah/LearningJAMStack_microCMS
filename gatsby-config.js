module.exports = {
  siteMetadata: {
    title: `ヤー・スペーステクノロジー`,
    description: `【架空の会社】宇宙工学と意識エネルギー循環研究でオンリーワンを目指します`,
    author: `@atomyah`,
    siteUrl: `https://yah-space.tech`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-basic-bootstrap`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: [require("path").resolve(__dirname, "node_modules")],
      },
    },
    // 4.1.2 gatsby-config.jsの編集で追加するmicroCMS用の設定
    {
      resolve: 'gatsby-source-microcms',
      options: {
        apiKey: '954d9b94-ff81-4630-a688-b8880cf42f7f',
        serviceId: 'yah-space',
        apis: [{
          endpoint: 'information',
        }],
      },
    }
    // microCMS用の設定 ここまで
  ],
  pathPrefix: "gatsby-starter-basic-bootstrap",
};

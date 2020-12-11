module.exports = {
  siteMetadata: {
    title: `Gdariodh`,
    description: `My website - gdariodh - frontend Developer`,
    author: `gdariodh`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      // TODO: CONFIG POR DEFAULT DEL LUGAR DONDE SE PUEDEN GUARDAR LAS IMAGENES EN GATSBY
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      // TODO: SI COMENTAS ESTO SE QUITA EL FAVICON DE GATSBY! 
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // PLUGIN Y CONFIG PARA USAR TAILWIND
    {
      // procesa el css de tailwind 
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss")("./tailwind.config.js")],
      },
    },
    {
      // limpia el css de tailwind que no se usa, para tener la app mas ligera y limpia
      resolve: `gatsby-plugin-purgecss`,
      options: { tailwind: true },
    },
    {
      resolve: 'gatsby-background-image-es5',
      options: {
        // add your own characters to escape, replacing the default ':/'
        specialChars: '/:',
      },
    },
    // conectar gatsby con strapi para obtener los datos de strapi
    {
      resolve: `gatsby-source-strapi`,
      options: {
        // si llevas el app de strapi a produccion, cambias el apiURL
        apiURL: `http://localhost:1337`,
        queryLimit: 1000, // Default to 100
        // los content que permitimos extraer
        contentTypes: [`category`,`info`,`projects`,`skills`],
      },
    },
    // declarar tag de lang html con plugin que accede a los meta datos
    {
      resolve: 'gatsby-plugin-html-attributes',
      options: {
        lang: 'es'
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}

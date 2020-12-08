// en gatsby-node sirve para generar paginas dinamicas y transformarlas en paginas estaticas, como haremos con "proyects"!
// TODO: cada vez que se haga cambios en gatsby-node, gatsby-config o gatsby-browser reiniciar la app de gatsby!
// A la hora de paginas dinamicas, en vez de usar el id es mejor usar un slug por eso instalamos npm i url-slug.
const urlSlug = require("url-slug") // recordar que gatsby-node tiene codigo de Nodejs

exports.createPages = async ({ actions, graphql, reporter }) => {
  const res = await graphql(`
    {
      allStrapiProjects {
        nodes {
          name
          id
        }
      }
    }
  `)

  /* console.log(JSON.stringify(res.data.allStrapiProjects)) -> TODO: Asi verificamos que datos obtenemos por console, 
 gatsby-node solo se ve por consola*/

  // verificamos si hay resultados - .errors viene de gatsby que sirve para verificar
  if (res.errors) {
    reporter.panic("No hubo resultados", res.errors)
  }

  // si hay resultados, generar paginas estaticas a las paginas dinamicas
  const projects = res.data.allStrapiProjects.nodes

  // crear los templates estaticos de proyectos
  projects.forEach(project => {
    actions.createPage({
      // path indica que url que se va generar cuando se sirva el estatico
      path: urlSlug(project.name),
      // cual componente se le va a inyectar la data de gatsby-node o va a ser el template de las paginas dinamicas que seran estaticas
      component: require.resolve("./src/components/projects/ProjectTemplate.js"),
      // context son variables o data que se van a pasar automaticamente al template que es "ProjectTemplate"
      context:{
        id: project.id
      }
    })
  })
}

/* los estaticos se crearan en public/page-data por el nombre del slug como por ejemplo marvel-app, etc.
pero donde estara servido la data dinamica de forma estatica es en el template que asignamos en la linea 33 que es /components/projects/Projects.js
*/

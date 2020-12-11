// TODO: Template asignado en gatsby-node cuando generamos las paginas estaticas de proyectos.
import React from "react"
// gatsby
import { graphql } from "gatsby"
import Image from "gatsby-image"
// components
import Layout from "../Layout/Layout"
// consulta graphql del proyecto por id que lo buscamos por la variable del context de gatsby-node que se genera dinamicamente.
// asi se trabaja con variables en graphql, la variable la sacamos del context de gatsby-node que se inyecta solo en este template de forma dinamica
export const query = graphql`
  query($id: String!) {
    allStrapiProjects(filter: { id: { eq: $id } }) {
      nodes {
        name
        description
        link
        email
        github
        github2
        hashtags
        picture {
          sharp: childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        picture2 {
          sharp: childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        picture3 {
          sharp: childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        picture4 {
          sharp: childImageSharp {
            fluid(quality: 100) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`

// data children proviene de la consulta de arriba
const Projects = ({ data }) => {
  // destructuring
  const {
    allStrapiProjects: { nodes },
  } = data
  // variable con la data del proyecto y simplicado gracias al destructuring
  const project = nodes[0]
  // TODO: encapsulamos las imagenes fluid en variables
  const picture = project.picture.sharp.fluid
  const picture2 = project.picture2.sharp.fluid
  const picture3 = project.picture3.sharp.fluid
  const picture4 = project.picture4.sharp.fluid
  // luego las encapsulamos en un arreglo vamos a iterar
  const gallery = [picture, picture2, picture3, picture4]

  return (
    <Layout>
      <section className="flex flex-wrap md:flex-row flex-col animate__animated animate__fadeInLeftBig animate__fast">
        {/** TODO: Info principal */}
        <div className="w-full md:p-6 mt-10 md:mt-0">
          <div className="flex flex-col justify-center md:flex-row md:justify-between">
            <Image
              className="md:w-4/5 w-full h-auto shadow-md rounded-lg mx-auto mb-6 md:mb-0 md:mr-6"
              fluid={picture}
            />

            <div>
              {/** TODO: LINKEIN, GITHUB */}
              <article className="max-w-xl">
                <div className="bg-white shadow-md  rounded-lg mb-6 tracking-wide ">
                  <div className="px-4 py-2">
                    <h2 className="font-bold text-2xl text-gray-800 tracking-normal truncate">
                      Nombre: {project.name}
                    </h2>
                    {/* <p class="text-sm text-gray-700 px-2 mr-1">
                    {project.email}
                  </p> */}
                  </div>
                </div>
              </article>
              {/** TODO: LINKS DE REPO Y APPS */}
              <article className="max-w-xl">
                <div className="bg-white shadow-md  rounded-lg mb-6 tracking-wide ">
                  <div className="px-4 py-2 mt-2 w-full">
                    {/** TODO: Nombre de la app */}
                    <div className="md:my-2 w-full">
                      <h2 className="font-bold text-2xl text-gray-800 tracking-normal truncate ">
                        Link de {project.name}:
                      </h2>
                      <a
                        target="_blank"
                        rel="noreferrer"
                        href={project.link}
                        className=" text-blue-500 text-lg md:text-base font-semibold px-2 mr-1"
                      >
                        {project.link}
                      </a>
                    </div>
                    {/** TODO: Github */}
                    <div className="md:my-2 w-full">
                      <h2 className="font-bold text-2xl text-gray-800 tracking-normal ">
                        GitHub:
                      </h2>
                      <div className="flex flex-wrap justify-center items-center ">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={project.github}
                          className="text-blue-500  text-lg md:text-base flex-wrap  font-semibold px-2 truncate"
                        >
                          {project.github}
                        </a>

                        {project.github2 && (
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href={project.github2}
                            className="mt-2 text-blue-500 text-lg   md:text-base font-semibold px-2 truncate "
                          >
                            {project.github2}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>

          <article className="w-full my-10 mx-auto">
            <div className="bg-white   rounded-lg mb-6 tracking-wide ">
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-2xl text-gray-800 tracking-normal text-center mb-2 underline">
                  Descripción
                </h2>
                <p className="text-sm text-gray-700 px-2 mr-1">
                  {project.description}
                </p>
              </div>
            </div>
          </article>
        </div>

        {/** TODO: Info secundaria more... */}
        <h3 className=" text-2xl font-bold text-gray-800 mx-auto mt-2">
          Más fotos
        </h3>
        <div className="w-full flex justify-center flex-wrap md:flex-row flex-col rounded-lg tracking-wide">
          {gallery.map((picture,i) => (
            <div key={`${picture}-${i}`} className="md:w-2/5 w-full shadow-md rounded-lg md:m-4 my-6">
              <Image fluid={picture} />
            </div>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default Projects

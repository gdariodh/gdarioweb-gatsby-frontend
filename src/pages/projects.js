import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import urlSlug from "url-slug" // lo usamos tambien en gatsby-node para las paginas dinamicas que seran estaticas
// custom hook obtiene data cms con graphql
import useProjects from "../hooks/useProjects"
// components
import Layout from "../components/Layout/Layout"
const Projects = () => {
  // data de la consulta graphql
  const { projects } = useProjects()

  return (
    <Layout>
      <section className=" flex  flex-wrap md:flex-row flex-col md:mt-16 mt-10 animate__animated animate__fadeIn animate__faster">
        {projects &&
          projects.map((project,i) => (
            <article key={`${project}-${i}`} className="mx-auto md:px-4 md:py-8 mb-3 md:mb-0 max-w-lg ">
              <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div className="md:flex-shrink-0">
                  <Image
                    fluid={project.picture.childImageSharp.fluid}
                    alt="app image"
                    className="w-full md:h-64 h-48 rounded-lg rounded-b-none"
                  />
                </div>
                <div className="px-4 py-2 mt-2">
                  <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-700 px-2 h-24 overflow-ellipsis overflow-hidden">
                    {project.description}
                  </p>

                  <p className="text-sm mt-3 font-semibold text-gray-800 text-center px-2 overflow-ellipsis overflow-hidden animate__animated animate__headShake animate__delay-3s">
                   Link de <span className='text-blue-500'>{project.name}</span> y GitHub en "Ver más" 🧐
                  </p>
                  <div className="flex items-center p-2 mt-2 justify-center ">
                    {/** TODO: para que vaya a la url con slug, y que sea igual que las se crean en gatsby-node */}
                    <Link
                      to={`/${urlSlug(project.name)}`}
                      className="text-blue-500 text-xl "
                    >
                      Ver más
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          ))}
      </section>
    </Layout>
  )
}

export default Projects

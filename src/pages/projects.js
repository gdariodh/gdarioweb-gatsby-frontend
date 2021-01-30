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
      <section className="flex flex-wrap sm:flex-row flex-col md:mt-6 mt-10 animate__animated animate__fadeIn animate__faster">
        {projects &&
          projects.map((project,i) => (
            <article key={`${project}-${i}`} className="mx-auto md:px-4 md:py-8 mb-3 md:mb-0 md:max-w-sm lg:max-w-md sm:max-w-xs xl:max-w-lg	 w-full">
              <div className="bg-white shadow-xl border-gray-100 border-2 rounded-lg mb-6 tracking-wide ">
                <div className="md:flex-shrink-0">
                <a
                 target="_blank"
                 rel="noreferrer"
                 href={project.link}
                 className='focus:outline-none'
                >
                <Image
                    fluid={project.picture.childImageSharp.fluid}
                    alt="app image"
                    className="w-full md:h-64 h-48 rounded-lg rounded-b-none"
                    fadeIn='soft'
                  />
                </a>
                 
                </div>
                <div className="px-4 py-2 mt-2">
                  <h2 className="font-bold text-2xl text-gray-900 h-8 truncate italic tracking-normal ml-1">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-900 px-4 py-2 h-20  overflow-ellipsis overflow-hidden tracking-wide text-justify	 leading-6" >
                    {project.description}
                  </p>

                  <p className="text-sm mt-3 font-semibold text-blue-500 text-center px-2 overflow-ellipsis h-10 overflow-hidden animate__animated animate__pulse animate__delay-3s animate__repeat-2">
                   Link de la app y GitHub en <span className='text-gray-900'>"Ver más"</span> 🧐
                  </p>
                  <div className="flex items-center p-2 my-2 justify-center ">
                    {/** TODO: para que vaya a la url con slug, y que sea igual que las se crean en gatsby-node */}
                    <Link
                      to={`/${urlSlug(project.name)}`}
                      className="text-center text-xl bg-blue-500 shadow-md text-white font-bold px-8 py-2 border rounded-md"
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

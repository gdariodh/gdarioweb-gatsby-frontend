import React from "react"
import {Link} from 'gatsby'
import Image from "gatsby-image"
import urlSlug from 'url-slug' // lo usamos tambien en gatsby-node para las paginas dinamicas que seran estaticas
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
          projects.map(project => (
            <article className="mx-auto md:px-4 md:py-8 mb-3 md:mb-0 max-w-lg ">
              <div className="bg-white shadow-2xl rounded-lg mb-6 tracking-wide">
                <div className="md:flex-shrink-0">
                  <Image
                    fluid={project.picture.childImageSharp.fluid}
                    alt="mountains"
                    className="w-full md:h-64 h-48 rounded-lg rounded-b-none"
                  />
                </div>
                <div className="px-4 py-2 mt-2">
                  <h2 className="font-bold text-2xl text-gray-800 tracking-normal">
                    {project.name}
                  </h2>
                  <p className="text-sm text-gray-700 px-2 mr-1">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Tempora reiciendis ad architecto at aut placeat quia, minus
                    dolor praesentium officia maxime deserunt porro amet ab
                    debitis deleniti modi soluta similique...
                  </p>
                  <div className="flex items-center justify-between mt-2 mx-6">
                    {/** TODO: para que vaya a la url con slug, y que sea igual que las se crean en gatsby-node */}
                    <Link to={`/${urlSlug(project.name)}`} className="text-blue-500 text-xs -ml-3 ">
                      Show More
                    </Link>
                    <a href="#" className="flex text-gray-700">
                      <svg
                        fill="none"
                        viewBox="0 0 24 24"
                        className="w-6 h-6 text-blue-500"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
                        />
                      </svg>
                      5
                    </a>
                  </div>
                  <div className="author flex items-center -ml-3 my-3">
                    <div className="user-logo">
                      <img
                        className="w-12 h-12 object-cover rounded-full mx-4  shadow"
                        src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=731&q=80"
                        alt="avatar"
                      />
                    </div>
                    <h2 className="text-sm tracking-tighter text-gray-900">
                      <a href="#">By Mohammed Ibrahim</a>{" "}
                      <span className="text-gray-600">21 SEP 2015.</span>
                    </h2>
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

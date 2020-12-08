import React from "react"
// gatsby
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"
import BackgroundImage from "gatsby-background-image"
// hook consulta graphql
import useIndex from "../hooks/useIndex"
// components
import Layout from "../components/Layout/Layout"
// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

const IndexPage = () => {
  // custom hook que hace la consulta de graphql para sacar la info de index page
  const { data } = useIndex()
  // consultar background
  const { file } = useStaticQuery(graphql`
    {
      file(relativePath: { eq: "home10.jpeg" }) {
        childImageSharp {
          fluid(
            quality: 90
            maxWidth: 1920
            duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 50 }
            toFormat: PNG
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = file.childImageSharp.fluid
  const avatar = data.picture.childImageSharp.fluid // viene de useIndex

  return (
    <Layout>
      <BackgroundImage
        className="w-full h-72  pt-24 pb-20 border-b-2 border-gray-200 shadow-lg"
        tag="section"
        fluid={imageData}
        fadeIn="soft"
        alt="background"
      >
        <div className="flex justify-center ">
          <div className="max-w-lg py-4 px-8 bg-white shadow-lg border-gray-200 border-2 rounded-lg my-20 animate__animated animate__fadeIn animate__faster">
            <div className="flex justify-center -mt-16">
              <Image
                className="flex justify-center w-56 h-auto object-cover rounded-full shadow-lg"
                fluid={avatar}
                alt="avatar"
              />
            </div>
            <div className="mt-3">
              <h2 className="text-3xl text-center font-semibold">
                {data.name}
              </h2>
              <p className="mt-2 text-gray-700 italic  text-center">
                Web Developer
              </p>
            </div>
            <div className="flex justify-between  mt-4">
              {/** TODO: target="_blank" abre otra ventana al hacer redirect */}
              <Link
                target="_blank"
                to="https://github.com/gdariodh"
                className="text-xl font-medium  flex"
              >
                <FaGithub className="mr-1 h-7" />
                Github
              </Link>
              <Link
                target="_blank"
                to={data.linkedin}
                className="text-xl font-medium  flex"
              >
                <FaLinkedin className="mr-1 h-7 text-blue-600" />
                Linkedin
              </Link>
              <Link
                target="_blank"
                to="https://twitter.com/gdariodh"
                className="text-xl font-medium  flex"
              >
                <FaTwitter className="mr-1 h-7 text-blue-500" />
                Twitter
              </Link>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div id="about" className="mt-72">
        <h2 className="text-3xl font-bold text-center pt-14 pb-2 italic">
          About me
        </h2>
        <section className=" md:p-2 py-6 flex md:flex-row flex-col animate__animated animate__fadeInLeftBig">
          {/** TODO: CARDS DE ABOUT */}

          {/** TODO: CARD */}

          <article class="mx-auto md:px-4 md:py-8 mb-3 md:mb-0 max-w-xl my-20 ">
            <div class="bg-white shadow-lg border-t-4 border-b-4 rounded-lg mb-6 tracking-wide ">
              <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-2xl text-gray-800 tracking-normal ">
                  My Amaizing Journey to the Mountains.
                </h2>
                <p class="text-sm text-gray-700 px-2 mr-1">
                  {data.description}
                </p>
                <div class="flex items-center justify-between mt-2 mx-6">
                  <a href="#" class="text-blue-500 text-xs -ml-3 ">
                    Show More
                  </a>
                  <a href="#" class="flex text-gray-700">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 text-blue-500"
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
                <div class="author flex items-center -ml-3 my-3">
                  <h2 class="text-sm tracking-tighter text-gray-900">
                    <a href="#">By Mohammed Ibrahim</a>{" "}
                    <span class="text-gray-600">21 SEP 2015.</span>
                  </h2>
                </div>
              </div>
            </div>
          </article>

          {/** TODO: CARD 2 */}
          <article class="mx-auto md:px-4  md:py-8 mb-3 my-20 md:mb-0 max-w-xl ">
            <div class="bg-white shadow-lg border-t-4 border-b-4 border-gray-200 rounded-lg mb-6 tracking-wide">
              <div class="px-4 py-2 mt-2">
                <h2 class="font-bold text-2xl text-gray-800 tracking-normal">
                  My Amaizing Journey to the Mountains.
                </h2>
                <p class="text-sm text-gray-700 px-2 mr-1">{data.about}</p>
                <div class="flex items-center justify-between mt-2 mx-6">
                  <a href="#" class="text-blue-500 text-xs -ml-3 ">
                    Show More
                  </a>
                  <a href="#" class="flex text-gray-700">
                    <svg
                      fill="none"
                      viewBox="0 0 24 24"
                      class="w-6 h-6 text-blue-500"
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
                <div class="author flex items-center -ml-3 my-3">
                  <h2 class="text-sm tracking-tighter text-gray-900">
                    <a href="#">By Mohammed Ibrahim</a>{" "}
                    <span class="text-gray-600">21 SEP 2015.</span>
                  </h2>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

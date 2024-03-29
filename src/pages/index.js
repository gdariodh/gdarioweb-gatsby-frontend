import React from "react"
// gatsby
import { useStaticQuery, graphql } from "gatsby"
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
      file(relativePath: { eq: "home10.jpg" }) {
        childImageSharp {
          fluid(
            quality: 80
            maxWidth: 1280
          ) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)

  const imageData = file.childImageSharp.fluid
  const avatar = data.picture.childImageSharp.fluid // viene de useIndex
  const cv = data.cv.publicURL


  return (
    <Layout>
      <BackgroundImage
        className="w-full h-72 pt-24 pb-20 border-b-2 border-gray-200 shadow-lg"
        tag="section"
        fluid={imageData}
        fadeIn="soft"
        alt="background"
      >
        <div className="flex justify-center">
          <div className="max-w-lg py-4 px-8 bg-white shadow-xl border-gray-200 border-2 rounded-lg my-20 md:my-10">
            <div className="flex justify-center -mt-16">
              <Image
                className="flex justify-center w-56 h-auto object-cover border-gray-50 border-4 rounded-full shadow-xl"
                fluid={avatar}
                alt="avatar"
                fadeIn='soft'
              />
            </div>
            <div className="mt-3">
              <h1 className="text-3xl text-center font-semibold">
                {data.name}
              </h1>
              <p className="mt-2 text-gray-700 italic  text-center">
                Front-End Developer 
              </p>
            </div>
            <div className="flex justify-between mt-4">
              {/** TODO: target="_blank" abre otra ventana al hacer redirect */}
              <a
                target="_blank"
                rel="noreferrer"
                href={data.github}
                className="text-xl font-medium flex"
              >
                <FaGithub className="mr-1 h-7" />
                Github
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={data.linkedin}
                className="text-xl font-medium flex"
              >
                <FaLinkedin className="mr-1 h-7 text-blue-600" />
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href={data.twitter}
                className="text-xl font-medium  flex"
              >
                <FaTwitter className="mr-1 h-7 text-blue-500" />
                Twitter
              </a>
            </div>
            <div className="flex justify-center mt-4">
              <a
                target="_blank"
                rel="noreferrer"
                href={`https://gdariodh.netlify.app${cv}`}
                className="text-center bg-blue-500 shadow-md text-white font-bold px-3 py-2 border rounded-md"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </BackgroundImage>

      <div id="about" className="md:mt-56 mt-72">
        <h2 className="text-3xl font-bold text-center pt-14 italic">
          Sobre mí
        </h2>
        <section className=" md:p-2 py-4 flex md:flex-row items-center flex-col animate__animated animate__zoomIn animate__fast">
          <article className="mx-auto md:p-0 mb-3 md:mb-0 max-w-xl my-10 md:my-6 md:mr-4 xl:mr-2">
            <div className="bg-white shadow-lg border-gray-200 border-2 rounded-lg mb-6 tracking-wide ">
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-2xl md:text-left text-center text-gray-900 tracking-normal ">
                  Resumen profesional
                </h2>
                <p className="text-sm px-4 text-gray-900 py-1 mr-1  tracking-wide	 leading-6	text-justify">
                  {data.description}
                </p>
              </div>
            </div>
          </article>

          {/** TODO: CARD 2 */}
          <article className="mx-auto md:p-0 mb-3 md:md:my-6 my-8 md:mb-0 max-w-xl">
            <div className="bg-white shadow-lg border-gray-200 border-2  rounded-lg mb-6 tracking-wide">
              <div className="px-4 py-2 mt-2">
                <h2 className="font-bold text-2xl md:text-left text-center text-gray-900 tracking-normal">
                  ¿Quién soy y qué me identifica?
                </h2>
                <p className="text-sm text-gray-900 px-4 py-1 mr-1 tracking-wide leading-6 text-justify">
                  {data.about}
                </p>
              </div>
            </div>
          </article>
        </section>
      </div>
    </Layout>
  )
}

export default IndexPage

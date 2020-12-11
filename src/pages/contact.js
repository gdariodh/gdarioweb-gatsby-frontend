import React from "react"
// custom hook que trae la consulta graphql
import Image from "gatsby-image"
// components
import Layout from "../components/Layout/Layout"
// icons
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

import useIndex from "../hooks/useIndex"
const Contact = () => {
  const { data } = useIndex()
  const avatar = data.picture.childImageSharp.fluid
  return (
    <Layout>
      <div className="w-full py-4 px-8 flex md:flex-row flex-col flex-wrap md:justify-around justify-center items-center  rounded-lg my-20 animate__animated animate__fadeIn animate__faster">
        <div className="-mt-16 flex justify-center md:block">
          <Image
            className="w-56 h-auto object-cover rounded-full shadow-lg"
            fluid={avatar}
            alt="avatar"
          />
        </div>
        <div>
          <div className="mb-3 mt-3 md:mt-0">
            {/** NOMBRE,EMAIL,PHONE*/}
            <h2 className="text-3xl text-center font-semibold">{data.name}</h2>
            <p className="mt-3 text-gray-700 italic md:text-lg text-md  text-center">
            <span className='text-gray-800'>email:</span> {data.email}
            </p>
            <p className="mt-3 text-gray-700 italic md:text-lg text-md  text-center">
             <span className='text-gray-800'>phone:</span>  {data.phone}
            </p>
          </div>

          {/** TODO: REDES */}
          <p className="text-gray-800 italic md:text-lg text-md text-center mb-2">
            redes sociales:
          </p>
          <div className="flex justify-between">
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
              className="text-xl font-medium  flex"
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
        </div>
      </div>
    </Layout>
  )
}

export default Contact

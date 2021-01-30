import React from "react"
import Image from "gatsby-image"
// hook - consulta graphql
import useSkills from "../hooks/useSkills"
// components
import Layout from "../components/Layout/Layout"
const Skills = () => {
  const { skills } = useSkills()

  return (
    <Layout>
      <div className="flex justify-center items-center  w-full">
        <div id="about" className="mt-4 animate__animated animate__fadeIn animate__faster">
          <section className=" md:p-2 mt-4 flex flex-row justify-center ml-4 flex-wrap ">
            {skills &&
              skills.map((skill,i) => (
                <article key={`${skill}-${i}`} className="w-40 md:w-64 mb-5 md:mb-4 bg-white  overflow-hidden  mr-4 animate__animated animate__pulse animate__delay-2s animate__repeat-2">
                  <div className="p-8 flex items-center justify-center  uppercase flex-wrap md:flex-nowrap">
                    {/** TODO: CARD */}
                    <Image
                      className="w-10 h-10 md:w-14 md:h-14 object-cover rounded-full shadow-md mb-2"
                      fluid={skill.picture.childImageSharp.fluid}
                    />
                    
                    <span className="ml-2  text-base md:text-xl leading-tight font-medium text-black hover:text-blue-500 text-center">
                      {skill.name}
                    </span>
                  </div>
                </article>
              ))}
          </section>
        </div>
      </div>
    </Layout>
  )
}

export default Skills

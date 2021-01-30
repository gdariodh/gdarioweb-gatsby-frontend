import { useStaticQuery, graphql } from "gatsby"

const Skills = () => {
  const {
    allStrapiSkills: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiSkills {
        nodes {
          id
          name
          picture {
            childImageSharp {
              fluid(quality: 80, maxWidth: 70, maxHeight: 70) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const skills = nodes
  return {
    skills,
  }
}

export default Skills

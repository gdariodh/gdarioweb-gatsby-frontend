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
              fluid(quality: 85, maxWidth: 64, maxHeight: 64) {
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

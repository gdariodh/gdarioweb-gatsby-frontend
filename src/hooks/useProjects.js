import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const {
    allStrapiProjects: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiProjects {
        nodes {
          description
          email
          github
          hashtags
          name
          picture {
            childImageSharp {
              fluid(quality: 80) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const projects = nodes
  return {
    projects,
  }
}

export default useProjects

import { useStaticQuery, graphql } from "gatsby"

const useProjects = () => {
  const {
    allStrapiProjects: { nodes },
  } = useStaticQuery(graphql`
    {
      allStrapiProjects {
        nodes {
          description
          github
          github2
          hashtags
          name
          link
          picture {
            childImageSharp {
              fluid(quality: 85) {
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

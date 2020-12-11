import { useStaticQuery, graphql } from "gatsby"

const useIndex = () => {
  const { allStrapiInfo: nodes } = useStaticQuery(graphql`
    {
      allStrapiInfo(filter: { page: { eq: "index" } }) {
        nodes {
          id
          name
          description
          about
          email
          phone
          linkedin
          twitter
          github
          cv {
            publicURL
          }
          picture {
            childImageSharp {
              fluid(quality: 95) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const data = nodes.nodes[0]

  return {
    data,
  }
}

export default useIndex

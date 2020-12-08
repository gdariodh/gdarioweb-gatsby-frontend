// TODO: Template asignado en gatsby-node cuando generamos las paginas estaticas de proyectos.
import React from "react"
// gatsby
import { Link, graphql } from "gatsby"
import Image from "gatsby-image"
// components
import Layout from "../Layout/Layout"

// consulta graphql del proyecto por id que lo buscamos por la variable del context de gatsby-node que se genera dinamicamente.

// asi se trabaja con variables en graphql, la variable la sacamos del context de gatsby-node que se inyecta solo en este template de forma dinamica
export const query = graphql`
  query($id: String!) {
    allStrapiProjects(filter: { id: { eq: $id } }) {
      nodes {
        name
        description
        email
          github
          hashtags
          picture {
            childImageSharp {
              fluid(quality: 90) {
                ...GatsbyImageSharpFluid_withWebp
              }
            }
          }
      }
    }
  }
`;

// data children proviene de la consulta de arriba
const Projects = ({data}) => {
    // destructuring
    const {allStrapiProjects:{nodes}} = data;
    // variable con la data del proyecto y simplicado gracias al destructuring
    const project = nodes[0]
  return (
    <Layout>
      <h2>{project.name}</h2>
    </Layout>
  )
}

export default Projects

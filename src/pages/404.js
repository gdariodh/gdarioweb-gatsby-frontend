import React from "react"

import Layout from "../components/Layout/Layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1 className='text-3xl text-center my-10'>404: Not Found</h1>
    <p className='text-3xl text-center'>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </Layout>
)

export default NotFoundPage
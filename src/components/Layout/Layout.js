import React from "react"
import Helmet from "react-helmet" // acceder al head html, para modifcarlo desde Layout
// components del Layout
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <title>Gdariodh</title>
        <meta name="description" content="react gatsby developer website" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Helmet>

      <Header />

      {children}
    </>
  )
}

export default Layout

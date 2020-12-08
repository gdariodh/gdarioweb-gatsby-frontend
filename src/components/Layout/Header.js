import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header className=" w-full flex justify-center items-center border-b-2 border-gray-200 shadow-lg">
      <div className="p-3">
        {/** TODO: Navegacion */}
        <nav className=" text-xl flex justify-between font-bold italic ">
        <Link to={"/skills"} className="mr-3" activeClassName="text-blue-500">
            Skills
          </Link>
          

          <Link to={"/"} className="mr-3" activeClassName="text-blue-500">
            Home
          </Link>

          <Link to={"/projects"} className="mr-3" activeClassName="text-blue-500">
            Projects
          </Link>

          <Link to={"/#about"}  activeClassName="text-blue-500">
            About
          </Link>

         
        </nav>
      </div>
    </header>
  )
}

export default Header

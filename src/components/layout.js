import React from "react"

import "./layout.css"
import { Link } from "gatsby"

export default function Layout({ pageTitle, children }) {
  return (
    <div className="container">
      <nav>
        <ul className="navLinks">
          <li className="navLink-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink-item">
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className="heading">{pageTitle}</h1>
        {children}
      </main>
    </div>
  )
}

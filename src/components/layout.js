import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

import "./layout.css"

export default function Layout({ pageTitle, children }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div className="container">
      <header className="siteTitle">{data.site.siteMetadata.title}</header>
      <nav>
        <ul className="navLinks">
          <li className="navLink-item">
            <Link to="/">Home</Link>
          </li>
          <li className="navLink-item">
            <Link to="/about">About</Link>
          </li>
          <li className="navLink-item">
            <Link to="/blog">Blog</Link>
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

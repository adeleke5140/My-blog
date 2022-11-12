//always remember to not repeat yourself

import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Head } from "gatsby"

export default function Seo({ title }) {
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
    <title>
      {title} | {data.site.siteMetadata.title}
    </title>
  )
}

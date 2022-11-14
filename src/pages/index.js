import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home">
        {/* <StaticImage
          alt="a black and white pixelated face of a man "
          src="../images/pfp.jpg"
          imgClassName="hero"
        /> */}
        <p>Welcome 👋🏼</p>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />

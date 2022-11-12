import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <StaticImage
          alt="a black and white pixelated face of a man "
          src="../images/pfp.jpg"
        />
        <p>This is the home page.</p>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Kehinde's blog</title>

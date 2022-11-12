import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <StaticImage
          alt="a black and white pixelated face of a man "
          src="https://pbs.twimg.com/profile_images/1543997404218793985/G_XvddcH_400x400.jpg"
        />
        <p>This is the home page.</p>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Kehinde's blog</title>

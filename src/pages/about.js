import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About me">
        <p>Hi there, welcome to my portfolio.</p>
        <p>
          I am a proud creator of this site, which I am building with Gatsby{" "}
        </p>
      </Layout>
    </main>
  )
}

export const Head = () => <title>About Me</title>

export default AboutPage

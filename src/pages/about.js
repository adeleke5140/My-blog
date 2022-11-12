import * as React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About me">
        <p>Hi there, welcome to my portfolio.</p>
        <p>
          I am a proud creator of this site, which I am building with Gatsby.
        </p>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="About me" />
export default AboutPage

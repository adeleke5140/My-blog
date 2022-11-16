import * as React from "react"
import Layout from "../components/layout"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"
import Seo from "../components/seo"

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home.">
        <div className="text-container">
          <p>Welcome 👋🏼, I'm Kehinde.</p>
          <p>
            I mostly do frontend stuff with <code>Typescript</code> and{" "}
            <code>React.</code>
          </p>
          <p>
            I'm reading through the <code>Redux Toolkit</code> docs, beta
            <code> React</code> docs as well as taking the fullStack Course on{" "}
            <a href="https://fullstackopen.com/en/">fullstackopen</a>.
          </p>
          <p>
            Learn more about me on the{" "}
            <span className="blog-date">
              <Link to="/about">About</Link>
            </span>{" "}
            page.
          </p>
        </div>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <Seo title="Home Page" />

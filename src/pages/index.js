import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const IndexPage = () => {
  return (
    <div>
      <Layout pageTitle="Home Page">
        <p>This is the home page</p>
      </Layout>
    </div>
  )
}

export default IndexPage

export const Head = () => <title>Kehinde's blog</title>

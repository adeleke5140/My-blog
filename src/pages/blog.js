import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  const blogs = data.allFile.nodes
  return (
    <Layout pageTitle="My Blog Posts">
      <p style={{ marginBottom: "2em" }}>My cool posts will go in here.</p>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.name}>{blog.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allFile {
      nodes {
        name
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage

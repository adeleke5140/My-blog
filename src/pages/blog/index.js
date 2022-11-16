import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { graphql, Link } from "gatsby"

const BlogPage = ({ data }) => {
  const blogs = data.allMdx.nodes

  return (
    <Layout pageTitle="My Blog Posts.">
      <p style={{ marginBottom: "2em" }}>My cool posts will go in here.</p>
      {blogs.map((blog) => (
        <article className="blog">
          <h2 className="blog-title">
            <Link to={`/blog/${blog.frontmatter.slug}`}>
              {blog.frontmatter.title}
            </Link>
          </h2>
          <p className="blog-date">posted: {blog.frontmatter.date}</p>
          <p className="blog-excerpt" style={{ maxWidth: "60ch" }}>
            {blog.excerpt}
          </p>
        </article>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "D MMMM, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
`

export const Head = () => <Seo title="Blog" />

export default BlogPage

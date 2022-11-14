import { graphql, Link } from "gatsby"
import * as React from "react"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const BlogPost = ({ data, children }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p className="blog-date">{data.mdx.frontmatter.date}</p>
      <article style={{ maxWidth: "60ch", lineHeight: "1.6" }}>
        {children}
      </article>
      <span className="blog-date">
        <Link to="/blog"> All blogs...</Link>
      </span>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
    }
  }
`

export const Head = ({ data }) => <Seo title={data.mdx.frontmatter.title} />

export default BlogPost

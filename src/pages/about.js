import * as React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"
import Seo from "../components/seo"

const functionalCode = `
  const compose = (f, g) => x => f(g(x))

  const double = n => n * 2

  const inc = n => n + 1

  const transform = compose(double, inc)

  transform(3) // 8
`

const AboutPage = () => {
  return (
    <main>
      <Layout pageTitle="About me.">
        <div className="text-container">
          <p>Hi there, welcome to my portfolio.</p>
          <p>
            I am a proud creator of this site, which I am building with Gatsby.
          </p>
          <p>
            I like functional programming a lot. There's just something about
            composition that's similar to alchemy. Alchemy? magic. It's like
            using basic magic blocks to build a golem. Functional libraries are
            stable golems that can still be dissembled and assembled with Ease.
          </p>
          <p>
            Just look at this gem:
            <br />
            <pre>
              <code>{functionalCode}</code>
            </pre>
          </p>
          <p>
            I believe the method of composing function is quite elegant. I
            haven't read enough of it to have an opinion but I'm looking forward
            to writing about it.
          </p>
          <p className="blog-date">My github is at the bottom btw.</p>
        </div>
      </Layout>
    </main>
  )
}

export const Head = () => <Seo title="About me" />
export default AboutPage

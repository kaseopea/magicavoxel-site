import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
          <p className="lead text-muted"> Welcome to this Boostrap 5 Gatsby Starter</p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">About</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Go to page 2</Link>
      </div>
    </section>
  </Layout>
)

export default IndexPage

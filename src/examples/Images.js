import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import img from "../images/img1.jpg"
import Image from "gatsby-image"

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "img3.jpg" }) {
      childImageSharp {
        fixed(width: 300, height: 400, grayscale: true) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "img1.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

const Images = () => {
  const data = useStaticQuery(getImages)
  return (
    <section className="images">
      <article className="single-image">
        <h3>basic image</h3>
        <img src={img} width="100%"></img>
      </article>
      <article className="single-image">
        <h3>fixed image/blur</h3>
        <Image fixed={data.fixed.childImageSharp.fixed} width="100%"></Image>
      </article>
      <article className="single-image">
        <h3>fluid image/svg</h3>
        <Image fluid={data.fluid.childImageSharp.fluid} width="100%"></Image>
      </article>
    </section>
  )
}

export default Images

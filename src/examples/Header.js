import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      siteMetadata {
        person {
          age
          name
        }
        title
        description
        author
        data
      }
    }
  }
`

const Header = () => {
  const {
    site: {
      siteMetadata: {
        title,
        person: { age },
      },
    },
  } = useStaticQuery(getData)
  return (
    <div>
      <h1>age: {age}</h1>
      <h1>title: {title}</h1>
    </div>
  )
}

export default Header

const path = require("path")

// create page dynamically
// return promise or asyn
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    {
      products: allContentfulProduct {
        nodes {
          slug
        }
      }
    }
  `)
  console.log("#######")
  console.log(JSON.stringify(result))
  console.log("#######")
  result.data.products.nodes.forEach((product) => {
    createPage({
      path: `/products/${product.slug}`,
      component: path.resolve(`src/templates/product-template.js`),
      context: {
        slug: product.slug,
      },
    })
  })
}

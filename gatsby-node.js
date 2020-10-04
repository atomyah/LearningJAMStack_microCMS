// 「5.3.3 インフォメーション詳細ページ（動的ページ）の作成」
const path = require("path")
exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
 
  return graphql(
    `
      {
        allMicrocmsInformation {
          edges {
            node {
                id
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

  result.data.allMicrocmsInformation.edges.forEach( edge => {
      createPage({
        path: `/information/${edge.node.id}`,
        component: path.resolve(`./src/templates/info-post.js`),
        context: {
          id: edge.node.id
        }
      })
  })

  })
}

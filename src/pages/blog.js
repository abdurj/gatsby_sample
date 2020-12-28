import React from 'react'

import Layout from '../components/layout'
import {useStaticQuery, graphql} from 'gatsby'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query{
            allMarkdownRemark{
                edges{
                    node{
                        frontmatter{
                            title
                            date
                        }
                        html
                        excerpt
                    }
                }
            }
        }
    `)
    const blogPosts = data.allMarkdownRemark.edges

    return (
        <Layout>
            <h1>
                Blog
            </h1>
            <p>
                I will post blog posts here
            </p>
            <ol>
                {blogPosts.map(post => {
                    return (
                    <li key={post.node.frontmatter.title}>
                        <h2>{post.node.frontmatter.title}</h2>
                        <p>{post.node.frontmatter.date}</p>
                    </li>
                    );
                })}
            </ol>
        </Layout>
    )
}

export default Blog
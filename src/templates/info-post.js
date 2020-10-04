import React from "react";
import { Link, graphql } from "gatsby";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";
import SEO from "../components/seo";

const InformationPost = ({ data }) => {
    const post = data.microcmsInformation // ㊟allMicrocmsInformationでない
    return (
        <Layout>
        <SEO title={post.title} />
            <Row>
                <Col className="space"></Col>
            </Row>
            <Row>
                <Col className="title-obi">
                <h1 className="h1-font">{post.title}</h1>
                </Col>
            </Row>
            <Row>
                <Col>
                {post.date}{` `}{post.category.category}
                </Col>
            </Row>
            <Row>
                <Col className="space"></Col>
            </Row>
            <Row>
                <Col>
                    <div dangerouslySetInnerHTML={{ __html: post.body }} />
                </Col>
            </Row>
            <Row>
            <Col className="space"></Col>
            </Row>
        </Layout>
    )
}

export default InformationPost;

export const query = graphql`
 query($id: String!) {
   microcmsInformation(id: { eq: $id }) {
    id
    title
    date(formatString: "YYYY年MM月DD日")
    body
    category {
       category
    }
   }
 }
`
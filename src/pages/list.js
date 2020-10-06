import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ListPage = () => {
  return (
    <Layout>
      <SEO title="List" />
      <ListWrapper>
        <h1>List</h1>
      </ListWrapper>
    </Layout>
  )
}

export default ListPage

const ListWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    line-height: 4rem;
  }
`

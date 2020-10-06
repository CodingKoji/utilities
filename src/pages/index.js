import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <HomeWrapper>
      <h1>Utilities App</h1>
      <p className="cta">Pick a Tool</p>
      <ToolsWrapper>
        <Link to="/timer">
          <img
            src="https://img.icons8.com/officel/80/000000/hourglass-sand-bottom.png"
            alt="hourglass timer"
          />
          <p>Timer</p>
        </Link>
        <Link to="/stopwatch">
          <img
            src="https://img.icons8.com/plasticine/100/000000/time.png"
            alt="stopwatch"
          />
          <p>Stopwatch</p>
        </Link>
      </ToolsWrapper>
    </HomeWrapper>
  </Layout>
)

export default IndexPage

const HomeWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .cta {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`

const ToolsWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  /* display: grid;
  grid-template-columns: repeat(3, 1fr); */
  a {
    display: flex;
    width: 40%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    color: #1c1c1c;
    background: #f7f7f7;
    padding: 1.3rem;

    border-radius: 10px;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    }
  }

  img {
    height: 80px;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.5rem;
  }
`

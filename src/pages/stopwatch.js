import React, { useState, useEffect } from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const StopwatchPage = () => {
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const handleToggle = () => {
    setIsActive(prevState => !prevState)
  }

  const handleReset = () => {
    setCount(0)
    setIsActive(false)
  }

  const handleSave = () => {
    console.log("save", count)
  }

  useEffect(() => {
    let interval = null
    if (isActive) {
      interval = setInterval(() => {
        setCount(count => count + 1)
      }, 1000)
    } else if (!isActive && count !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, count])

  return (
    <Layout>
      <SEO title="Stopwatch" />
      <StopwatchWrapper>
        <h1>Stopwatch</h1>

        <TimeWrapper>
          <p>
            <span>{count}</span>s
          </p>
        </TimeWrapper>
        <ActionsWrapper>
          <button onClick={handleToggle}>
            {!isActive ? (
              <img
                src="https://img.icons8.com/metro/52/000000/play.png"
                alt="play"
              />
            ) : (
              <img
                src="https://img.icons8.com/metro/52/000000/pause.png"
                alt="pause"
              />
            )}
          </button>
          <button onClick={handleReset}>Reset</button>
          <button onClick={handleSave}>Save</button>
        </ActionsWrapper>
      </StopwatchWrapper>
    </Layout>
  )
}

export default StopwatchPage

const StopwatchWrapper = styled.div`
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

const TimeWrapper = styled.div`
  margin: 1rem 0;
  p {
    font-size: 1.5rem;
    text-align: center;
  }
  span {
    font-size: 3rem;
  }
`

const ActionsWrapper = styled.div`
  display: flex;

  button {
    border: none;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    font-size: 1rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      transform: scale(1.1);
    }

    &:first-child {
      margin-right: 1rem;
    }
  }

  img {
    margin: 0;
    height: 40px;
  }
`

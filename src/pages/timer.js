import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const finishedVariants = {
  hidden: {
    y: "100vh",
  },
  visible: {
    y: 0,
  },
}

const TimerPage = () => {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [count, setCount] = useState(0)
  const [isActive, setIsActive] = useState(false)
  const [finished, setFinished] = useState(null)

  const handleToggle = () => {
    setIsActive(prevState => !prevState)
  }

  const handleReset = () => {
    setIsActive(false)
    setSeconds(0)
    setMinutes(0)
  }

  const handleClose = () => {
    setFinished(null)
  }

  useEffect(() => {
    let interval = null

    if (isActive) {
      setCount(minutes * 60 + seconds)

      interval = setInterval(() => {
        setCount(count => count - 1)
        if (seconds > 0) {
          setSeconds(seconds => seconds - 1)
        } else if (seconds === 0 && minutes > 0) {
          setSeconds(59)
          setMinutes(minutes => minutes - 1)
        } else if (seconds === 0 && minutes === 0) {
          setFinished("animate")
          setIsActive(false)
          clearInterval(interval)
        }
      }, 1000)
    } else if (!isActive && count !== 0) {
      clearInterval(interval)
    }

    return () => clearInterval(interval)
  }, [isActive, count, setCount, minutes, seconds])

  return (
    <Layout>
      <SEO title="Timer" />
      <TimerWrapper>
        <h1>Timer</h1>
        <TimeWrapper>
          <input
            type="number"
            value={minutes}
            onChange={e => setMinutes(e.target.value)}
          />
          <span>:</span>
          <input
            type="number"
            value={seconds}
            onChange={e => setSeconds(e.target.value)}
          />
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
          <button onClick={handleToggle}>Save</button>
        </ActionsWrapper>
      </TimerWrapper>

      {finished && (
        <Finished
          variants={finishedVariants}
          animate="visible"
          initial="hidden"
        >
          <h1>Timer Complete!</h1>
          <button onClick={handleClose}>Back</button>
        </Finished>
      )}
    </Layout>
  )
}

export default TimerPage

const TimerWrapper = styled.div`
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
  display: flex;
  margin: 1rem 0;
  input {
    border: none;
    font-size: 3rem;
    width: 4rem;
    text-align: right;
    margin-right: 0.3rem;

    &:focus {
      outline: none;
    }
  }
  span {
    line-height: 3rem;
    font-size: 3rem;
  }
  /* Chrome, Safari, Edge, Opera */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type="number"] {
    -moz-appearance: textfield;
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

    &:first-child,
    &:nth-child(2) {
      margin-right: 1rem;
    }
  }

  img {
    margin: 0;
    height: 40px;
  }
`

const Finished = styled(motion.div)`
  height: 100vh;
  width: 100vw;
  background: #ff8e3c;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;

  h1 {
    margin-bottom: 1rem;
  }
  button {
    border: none;
    border-radius: 10px;
    padding: 0.3rem 1rem;
    font-size: 1.5rem;
    font-weight: bold;
    background: white;
    cursor: pointer;

    &:hover {
      transform: scale(1.1);
    }
  }
`

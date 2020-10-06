import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

const Header = ({ siteTitle }) => (
  <HeaderWrapper>
    <nav>
      <h1 className="brand">
        <Link to="/">{siteTitle}</Link>
      </h1>
      <div>
        <Link to="/timer">Timer</Link>
        <Link to="/stopwatch" className="ml">
          Stopwatch
        </Link>
        <Link to="/list" className="ml">
          List
        </Link>
      </div>
    </nav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const HeaderWrapper = styled.header`
  background: #1c1c1c;

  width: 100%;
  position: absolute;
  nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2.5rem;
  }

  a {
    text-decoration: none;
    color: #ddd;
  }

  .ml {
    margin-left: 1.5rem;
  }
  .brand {
    font-size: 1.5rem;
  }
`

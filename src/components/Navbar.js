import React from "react";
import styled from "styled-components";
import { useSpring, animated, config } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagic } from "@fortawesome/free-solid-svg-icons";
import { Link, Element } from "react-scroll";

const Navbar = props => {
  const barAnimation = useSpring({
    from: { transform: "translate3d(0, -10rem, 0)" },
    transform: "translate3d(0, 0, 0)"
  });

  const linkAnimation = useSpring({
    from: { transform: "translate3d(0, 30px, 0)", opacity: 0 },
    to: { transform: "translate3d(0, 0, 0)", opacity: 1 },
    delay: 800,
    config: config.wobbly
  });

  return (
    <>
      <NavBar style={barAnimation}>
        <FlexContainer>
          <NavLinks style={linkAnimation}>
            <button onClick={props.randomColor}>
              Change theme <FontAwesomeIcon icon={faMagic} />
            </button>
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              offset={40}
              duration={500}
              //onSetActive={this.handleSetActive}
            >
              <a href="../sections/AboutSection">About</a>
            </Link>
            {/* <Element name="about" className="element"></Element> */}

           
            <Link
              activeClass="active"
              to="skills"
              spy={true}
              smooth={true}
              offset={1000}
              duration={500}
              //onSetActive={this.handleSetActive}
            >
              <a href="../sections/ُSkillSection">Skills</a>
            </Link>
            <Element name="skills" className="element"></Element>
          </NavLinks>
        </FlexContainer>
      </NavBar>
    </>
  );
};

export default Navbar;

const NavBar = styled(animated.nav)`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  background: #2d3436;
  z-index: 1;
  font-size: 1.4rem;
`;

const FlexContainer = styled.div`
  max-width: 120rem;
  display: flex;
  margin: auto;
  padding: 0 2rem;
  justify-content: space-between;
  height: 5rem;
`;

const NavLinks = styled(animated.ul)`
  justify-self: end;
  list-style-type: none;
  margin: auto 0;

  & a {
    color: #dfe6e9;
    text-transform: uppercase;
    font-weight: 600;
    border-bottom: 1px solid transparent;
    margin: 0 1.5rem;
    transition: all 300ms linear 0s;
    text-decoration: none;
    cursor: pointer;

    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }

    @media (max-width: 768px) {
      display: none;
    }
  }
  & button {
    color: #dfe6e9;
    background: #2d3436;
    border: 1px solid transparent;
    text-transform: uppercase;
    margin: 0 1.5rem;
    &:hover {
      color: #fdcb6e;
      border-bottom: 1px solid #fdcb6e;
    }
  }
`;

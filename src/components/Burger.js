import React from "react";
import styled from "styled-components";
import { pathList } from "../config/pathlist";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;

  background: #000;
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  overflow: scroll;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 1;
  @media (max-width: 576px) {
    width: 100%;
  }

  a {
    font-size: 1.5rem;
    text-transform: uppercase;
    padding: 1.5rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;
const StyledBurger = styled.button`
  position: absolute;
  top: 3%;
  left: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  visibility: hidden;
  &:focus {
    outline: none;
  }

  @media (max-width: 990px) {
    visibility: visible;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }) => (open ? "#0D0C1D" : "#EFFFFA")};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      opacity: ${({ open }) => (open ? "0" : "1")};
      transform: ${({ open }) => (open ? "translateX(20px)" : "translateX(0)")};
    }

    :nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger open={open} onClick={() => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

const useOnClickOutside = (ref, handler) => {
  React.useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export const Menu = ({ open, setOpen }) => {
  return (
    <StyledMenu open={open}>
      {pathList.map(({ path, name }) => {
        const id = nanoid();
        return (
          <NavLink key={id} to={path} onClick={() => setOpen(!open)}>
            {name}
          </NavLink>
        );
      })}
    </StyledMenu>
  );
};

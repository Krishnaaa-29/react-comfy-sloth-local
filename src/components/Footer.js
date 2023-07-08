import React from "react";
import styled from "styled-components";
import { Socials } from "../utils/constants";

const Footer = () => {
  return (
    <Wrapper>
      <div className="rights">
        <h5>&copy; {new Date().getFullYear()}</h5>
        <span> Comfy Sloth </span> <h5> All rights reserved.</h5>{" "}
        <h5>
          Developed by <span>Krishna Kulshreshtha</span>
        </h5>
      </div>
      <div className="socials">
        {Socials.map((item, index) => {
          const { title, url, icon } = item;
          return (
            <a key={index} href={url}>
              {icon}
            </a>
          );
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.footer`
  display: grid;
  grid-template-columns: 1fr auto;
  background: var(--clr-black);
  text-align: center;

  .rights {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .socials {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem;
  }

  .socials svg {
    font-size: 1rem;
    color: var(--clr-white);
    cursor: pointer;
  }

  span {
    color: var(--clr-primary-5);
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;
    font-size: 0.75rem;
    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  @media (min-width: 776px) {
    .rights {
      flex-direction: row;
    }

    .rights h5 {
      font-size: 1rem;
    }

    .socials {
      flex-direction: row;
      padding: 1rem 2rem;
      gap: 1rem;
    }

    .socials svg {
      font-size: 1.5rem;
    }
  }
`;

export default Footer;

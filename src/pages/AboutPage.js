import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg1 from "../assets/hero-bcg.jpeg";
import aboutImg2 from "../assets/hero-bcg-2.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title="about" />
      <Wrapper className="page section section-center">
        <div className="images">
          <img src={aboutImg1} alt="haha" style={{ marginBottom: "5rem" }} />
          <img src={aboutImg2} alt="haha" />
        </div>
        <article>
          <div className="title">
            <h2>Our Story</h2>
            <div className="underline"></div>
          </div>
          <p>
            Welcome to Home@7, your one-stop website for all your home decor
            needs in a lavish house. We cater to the demands of all individuals
            and offer a wide variety of products to suit every style and
            preference. <br /> <br /> Website Navigation: At Home@7, we've
            designed an intuitive page layout using React Router Dom, ensuring
            seamless navigation throughout the site. Start by visiting our
            Products page to explore the extensive range of offerings. You can
            easily filter the products based on your specific requirements. When
            you find a product of interest, click on it to access a detailed,
            informative page that provides more information about the product.
            From there, you can select your desired color and quantity before
            adding it to your cart.
            <br /> <br /> User Authentication and Cart Management: In the cart
            section, you'll find a login button. We've implemented a secure
            login/logout functionality using Auth0. After logging in, you'll
            gain access to the checkout page, which was previously hidden. This
            ensures a personalized shopping experience and allows you to proceed
            with the checkout process. <br /> <br /> Secure Payments with
            Stripe: Our checkout process is powered by Stripe, a trusted and
            secure payment gateway. You can easily fill in demo details of a
            card to complete your purchase. Upon successful payment, you'll be
            redirected back to the home page, where you can continue exploring
            our products or make additional purchases.
            <br /> <br /> Technologies Used: Home@7 leverages modern
            technologies to deliver a seamless and efficient user experience.
            Our frontend is developed using React.js and React Router Dom,
            providing a dynamic and interactive interface. We utilize the
            Airtable API to manage and retrieve product data, ensuring an
            up-to-date and comprehensive catalog. To manage state and data flow,
            we utilize React's useReducer and Context API. On the backend, we
            use Node.js for server-side functionalities. Our website is built
            with HTML and CSS, creating a visually appealing and responsive
            design.
            <br /> <br />
          </p>
        </article>
      </Wrapper>
      <p
        style={{
          maxWidth: "900px",
          textAlign: "center",
          margin: "-4rem auto 0",
          paddingBottom: "1rem",
          color: "var(--clr-grey-5)",
          lineHeight: "2",
        }}
      >
        At Home@7, we're committed to bringing you the best home decor products,
        a user-friendly experience, and a secure shopping environment. Enjoy
        browsing our extensive collection and transforming your house into the
        luxurious home of your dreams.
      </p>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;
export default AboutPage;

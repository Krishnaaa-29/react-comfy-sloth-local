import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <span>Home@7</span>
    </Wrapper>
  );
};

const Wrapper = styled.h3`
  color: var(--clr-primary-5);
  margin-bottom: 0;
  font-size: 50px;
  font-family: "Poppins", sans-serif;
`;
export default Logo;

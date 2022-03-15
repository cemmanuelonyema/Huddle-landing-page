import React from "react";
import {
  StyledHeader,
  Nav,
  Logo,
  Content,
  Illustration,
} from "../styles/StyledHeader.style";
import { Button } from "../styles/Button.style";
import { Container } from "../styles/Container.style";
import { FLex } from "../styles/Flex";
const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <Nav>
          <Logo src="/images/logo.svg" alt="huddle logo" />
          <Button>Try it for free</Button>
        </Nav>

        <FLex>
          <Content>
            <h1>Build The Community Your Fans Will Love</h1>

            <p>
              Huddle re-imagines the way we build communities. You have a voice,
              but so does your audience. Create connections with your users as
              you engage in genuine discussion.
            </p>

            <Button bg="#ff0099" color="#fff">
              Get Started For Free
            </Button>
          </Content>

          <Illustration>
            <img src="./images/illustration-mockups.svg" alt=" Illustration" />
          </Illustration>
        </FLex>
      </Container>
    </StyledHeader>
  );
};

// const headCta = styled.button``;

export default Header;

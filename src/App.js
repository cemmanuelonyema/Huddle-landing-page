import React from "react";
import { Fragment } from "react/cjs/react.production.min";
import Content from "./components/react/Content";
import Footer from "./components/react/Footer";
// import FooterCta from "./components/react/FooterCta";
// import FooterCta from "./components/react/FooterCta";
// import GlobalStyles from "./components/styles/Globalstyle";
import Header from "./components/react/Header";
import { Container } from "./components/styles/Container.style";

// const theme = {};

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <Content />
        {/* <FooterCta /> */}
      </Container>
      <Footer />
    </Fragment>
  );
};

export default App;

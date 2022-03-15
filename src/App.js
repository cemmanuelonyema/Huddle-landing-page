import React from "react";
import { Fragment } from "react/cjs/react.production.min";
// import GlobalStyles from "./components/styles/Globalstyle";
import Header from "./components/react/Header";
import { Container } from "./components/styles/Container.style";

// const theme = {};

const App = () => {
  return (
    <Fragment>
      <Header />
      <Container>
        <h1>Hello world</h1>
      </Container>
    </Fragment>
  );
};

export default App;

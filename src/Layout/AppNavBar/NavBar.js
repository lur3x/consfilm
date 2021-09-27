import React, { Fragment} from "react";
import Navbar from "react-bootstrap/Navbar";

import Container from "react-bootstrap/Container";

const AppNavBar = () => {
  return (
    <Fragment>
      <Navbar className="cbs-navbar" expand="lg">
        <Container fluid></Container>
      </Navbar>
    </Fragment>
  );
};

export default AppNavBar;

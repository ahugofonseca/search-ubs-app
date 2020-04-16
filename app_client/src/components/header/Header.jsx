import React from 'react';
import { Container, Icon, Row, Col } from 'react-materialize';

const Header = () => (
  <nav className="nav-wrapper header-app">
    <Row className="height-inherit">
      <Col m={1} className="bl-1 height-inherit">
        <Icon className="right" large>menu</Icon>
      </Col>
      <Col m={3}>
        <Icon large>search</Icon>
      </Col>
      <Col m={4}>
        <h5 className="ma-0 pt-1 center"><b>bionexo</b></h5>
      </Col>
      <Col m={3}>
        <div className="right pt-1">
          <h5 className="company-name">Nome da...presa Ipsu</h5>
          <h6 className="company-cnpj">79.424862/0001-00</h6>
        </div>
      </Col>
      <Col m={1} className="br-1 height-inherit">
        <Icon large>account_circle</Icon>
      </Col>
    </Row>
  </nav>
)

export default Header;

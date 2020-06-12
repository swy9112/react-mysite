import React from "react";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import styled from "styled-components";
import Home from "./Home";
import Intro from "./Intro";
import Photo from "./Photo";

const Wrap = styled.ul``;

const LinkWrap = styled.li``;

const Nav = () => {
  return (
    <BrowserRouter>
      <Wrap>
        <LinkWrap>
          <Link to="/">홈</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/intro">소개</Link>
        </LinkWrap>
        <LinkWrap>
          <Link to="/photo">사진</Link>
        </LinkWrap>
      </Wrap>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/intro" component={Intro} />
        <Route path="/photo" component={Photo} />
      </Switch>
    </BrowserRouter>
  );
};

export default Nav;

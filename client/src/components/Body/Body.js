import React from "react";
import "./Body.css";
import { Layout } from 'react-mdl'
import Header from "../Header";
import Main from "../Main";
import Footer from "../Footer";
// import { Switch, Route } from "react-router-dom";

const Body = props =>
  <Layout fixedHeader={true}>
    <Header />
    <Main>
    </Main>
    <Footer />
  </Layout>

export default Body;

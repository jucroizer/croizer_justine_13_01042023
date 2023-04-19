// import { Link } from "react-router-dom";
// import useFetch from "../API/FetchAPI";
// import { Component, useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

import "../styles/Login.css";
import SignIn from "../components/SignIn";
// import SignInTest from "../components/SignInTest";

function Login() {

  return (
    <div>
      <Header />
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <SignIn />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Login;
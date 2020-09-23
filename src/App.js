import React, { useState } from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./App.css";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function Great() {
  const params = useParams();
  console.log(params);
  return <h1>Hello {params.name}</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/greet/:name" component={Great} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;

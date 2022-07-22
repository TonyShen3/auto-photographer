import React, { useEffect } from "react";
import { Switch, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "./index.css";
import Camera from "./components/camera";
import Gallery from "./components/gallery";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

function App() {
  return (
    <div className="container-fluid no-padding bg-light">
      <Navbar />
      <Switch>
        <Route path="/gallery">
          <Gallery />
        </Route>
        <Route path="/">
          <Camera />
        </Route>
      </Switch>
      <Footer />
    </div>
  );
}

export default App;

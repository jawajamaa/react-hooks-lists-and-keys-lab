import React from "react";

function NavBar() {
  const Links = ["home", "about", "projects"];

  return <nav>
    <a href="#home" key = "home">Home</a>
    <a href="#about" key = "about">About</a>
    <a href="#projects" key = "projects">Projects</a>
  </nav>;
}

export default NavBar;

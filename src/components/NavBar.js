import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>
    {links.map((e, i) => {
    return ( <a href={`#${e}`} key={i}>{e}</a> )

    })}
    </nav>;

  }

export default NavBar;

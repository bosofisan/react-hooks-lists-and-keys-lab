import React from "react";

function NavBar() {
  // const links = ["home", "about", "projects"];
  const links = [
    {id: 1, label: "home"},
    {id: 2, label: "about"},
    {id: 3, label: "projects"}
  ]

  return (
  <nav>
    {links.map((link) => (
      <a key={link.id} href={`#${link.label}`}>{link.label}</a>
    ))}
  </nav>
  );
}

export default NavBar;

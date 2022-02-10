import Link from "next/link";
import React from "react";
import { Context } from "../lib/Context";

const Links = ({ query, children, name }) => {
  return query !== "" ? (
    <Link href={{ pathname: `/${name}`, query: { query: query } }}>
      {children}
    </Link>
  ) : (
    <Link href={{ pathname: `/${name}` }}>{children}</Link>
  );
};

const Header = () => {
  const {
    state: { links, active, query },
    setActive,
  } = React.useContext(Context);

  return (
    <ul className="nav nav-pills nav-fill" style={{ marginBottom: "20px" }}>
      {links.map((link, index) => {
        return (
          <li key={index} className="nav-item" onClick={() => setActive(link)}>
            <Links query={query} {...link}>
              <span
                className={`nav-link ${
                  link.name === active.name && "isActive"
                }`}
              >
                <i className={`fas fa-${link.icon}`}></i> &nbsp; {link.name}{" "}
              </span>
            </Links>
          </li>
        );
      })}
    </ul>
  );
};
export default Header;

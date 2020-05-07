import { h } from "preact";
import { Link } from "preact-router/match";
import style from "./style.css";

const Header = () => (
  <header class={style.header}>
    <h1>All Affiliate Links</h1>
    <nav>
      <Link activeClassName={style.active} href="/">
        Home
      </Link>
      <Link activeClassName={style.active} href="/submit">
        Submit
      </Link>
    </nav>
  </header>
);

export default Header;

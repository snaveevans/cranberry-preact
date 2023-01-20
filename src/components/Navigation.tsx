import { h } from "preact";

const Navigation = () => (
  <nav
    style={{
      position: "sticky",
      bottom: "0",
      left: "0",
      right: "0",
      backgroundColor: "#673ab8",
    }}
  >
    <ul>
      <li>Products</li>
      <li>Scan</li>
    </ul>
  </nav>
);

export default Navigation;

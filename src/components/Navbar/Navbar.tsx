import { Link } from "react-router";

export default function Navbar() {
  return (
    <div>
      <Link to={"/"}> home</Link>
      <Link to={"/shop"}> shop</Link>
      <Link to={"/cart"}> cart</Link>
    </div>
  );
}

import { Link } from "react-router-dom";
import useOnline from "../hooks/useOnline";
const Header = () => {
  const isOnline = useOnline();
  return (
    <div className="header">
      <div id="Logo">
        <h1>Logo</h1>
      </div>
      <div className="header-right">
        <ul>
          {/* //here Link instead of anchor tag, Link indicates */}
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <h2>{isOnline ? "✅ Online" : "❌ Disconnected"}</h2>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;

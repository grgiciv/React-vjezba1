import { Link } from "react-router-dom";

export function FaqPage() {
    return (
      <div>
        <h1>FAQ</h1>
        <Link to="/">Sign In</Link>
        <p>No funny jokes</p>
        <p>No lousy pants</p>
        <p>The fun stops <b>Here</b></p>
      </div>
    );
  }
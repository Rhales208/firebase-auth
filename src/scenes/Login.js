import { Link } from "react-router-dom";

export default function login() {
  return (
    <>
      <h1>Login</h1>
      <p>
        Not a user? <Link to="/signup"> </Link>{" "}
      </p>
    </>
  );
}

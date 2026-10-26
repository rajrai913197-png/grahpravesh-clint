import { Link } from "react-router-dom";

export default function Login() {
  return (
    <main className="simple-page auth-page">
      <Link to="/" className="back-link">← Grah Pravesh</Link>
      <p className="eyebrow">WELCOME BACK</p>
      <h1>Log in to your account.</h1>
      <p>The login form and backend authentication will be implemented in the authentication phase.</p>
      <Link to="/register" className="text-link">New here? Create an account →</Link>
    </main>
  );
}

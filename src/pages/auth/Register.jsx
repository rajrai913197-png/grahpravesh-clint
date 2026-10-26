import { Link } from "react-router-dom";

export default function Register() {
  return (
    <main className="simple-page auth-page">
      <Link to="/" className="back-link">← Grah Pravesh</Link>
      <p className="eyebrow">START YOUR JOURNEY</p>
      <h1>Create your account.</h1>
      <p>Registration and guest/host onboarding will be implemented in the authentication phase.</p>
      <Link to="/login" className="text-link">Already registered? Log in →</Link>
    </main>
  );
}

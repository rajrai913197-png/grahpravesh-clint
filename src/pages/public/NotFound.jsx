import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <main className="simple-page">
      <p className="eyebrow">404 — NOT FOUND</p>
      <h1>This page wandered off.</h1>
      <Link to="/" className="dark-button">Return home</Link>
    </main>
  );
}

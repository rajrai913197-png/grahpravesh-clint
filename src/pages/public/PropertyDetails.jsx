import { Link, useParams } from "react-router-dom";

export default function PropertyDetails() {
  const { id } = useParams();
  return (
    <main className="simple-page">
      <Link to="/explore" className="back-link">← Explore stays</Link>
      <p className="eyebrow">PROPERTY DETAILS</p>
      <h1>Your stay, up close.</h1>
      <p>Property ID: {id}. Property information and booking flow will be connected to the API next.</p>
    </main>
  );
}

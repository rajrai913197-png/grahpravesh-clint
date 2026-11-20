import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const MyProperties = () => {
  const navigate = useNavigate();

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProperties = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get("http://localhost:3000/find", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Properties:", res.data);
      console.log("Property Images:", res.data.map(p => p.images));

      setProperties(res.data || []);
    } catch (error) {
      console.log("Property Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperties();
  }, []);

  const activeProperties = properties.filter(
    (p) => p.status?.toLowerCase() === "active"
  );

  // Image URL Helper
  const getImageUrl = (image) => {
    if (!image) {
      return "https://placehold.co/600x400?text=Property";
    }

    // Cloudinary / Full URL
    if (image.startsWith("http")) {
      return image;
    }

    // Starting slash remove
    let imagePath = image.replace(/^\/+/, "");

    // Agar upload folder already present hai
    if (imagePath.startsWith("upload/")) {
      return `http://localhost:3000/${imagePath}`;
    }

    // Sirf filename hai
    return `http://localhost:3000/upload/${imagePath}`;
  };

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Header */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-gray-500 hover:text-[#E50909] font-medium text-sm mb-8 transition"
          >
            ← Back
          </button>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-7">
            <div>
              <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                <Link to="/" className="hover:text-[#E50909]">
                  Home
                </Link>

                <span>/</span>

                <span className="text-[#E50909] font-medium">
                  My Properties
                </span>
              </div>

              <span className="inline-flex items-center gap-2 bg-red-50 text-[#E50909] px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase">
                <span className="w-2 h-2 bg-[#E50909] rounded-full"></span>
                Host Workspace
              </span>

              <h1 className="text-4xl md:text-5xl font-extrabold text-[#17243B] mt-5 tracking-tight">
                Your Properties<span className="text-[#E50909">.</span>
              </h1>

              <p className="text-gray-500 mt-3 text-base md:text-lg">
                Manage your stays, track your listings and grow your hosting journey.
              </p>
            </div>

            <Link
              to="/add"
              className="inline-flex items-center justify-center gap-3 bg-[#E50909] text-white px-7 py-4 rounded-xl font-semibold shadow-lg shadow-red-200 hover:bg-red-700 transition"
            >
              + Add New Property
            </Link>
          </div>
        </div>
      </section>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-12">

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">

          <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <p className="text-gray-500 text-sm font-medium">
              Total Properties
            </p>

            <h2 className="text-4xl font-extrabold text-[#17243B] mt-3">
              {properties.length}
            </h2>

            <p className="text-gray-400 text-xs mt-5">
              Your complete property portfolio
            </p>
          </div>

          <div className="bg-white border border-gray-100 rounded-2xl p-7 shadow-sm">
            <p className="text-gray-500 text-sm font-medium">
              Active Listings
            </p>

            <h2 className="text-4xl font-extrabold text-green-600 mt-3">
              {activeProperties.length}
            </h2>

            <p className="text-gray-400 text-xs mt-5">
              Properties currently marked active
            </p>
          </div>

          <div className="bg-[#17243B] rounded-2xl p-7 shadow-lg">
            <p className="text-blue-200 text-sm font-medium">
              Your Hosting Journey
            </p>

            <h2 className="text-2xl font-bold text-white mt-4">
              Welcome, Host!
            </h2>

            <p className="text-gray-300 text-sm mt-3">
              Every great stay begins with a great place.
            </p>
          </div>

        </div>

        {/* Heading */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-end gap-4 mb-8">
          <div>
            <p className="text-[#E50909] text-xs font-bold uppercase tracking-[3px] mb-2">
              Your Portfolio
            </p>

            <h2 className="text-3xl font-bold text-[#17243B]">
              All Properties
            </h2>

            <p className="text-gray-500 text-sm mt-2">
              Explore and manage all your listed properties.
            </p>
          </div>

          <span className="text-sm text-gray-500">
            Showing {properties.length} properties
          </span>
        </div>

        {/* Loading */}
        {loading ? (
          <div className="flex justify-center py-24">
            <div className="w-10 h-10 border-4 border-red-100 border-t-[#E50909] rounded-full animate-spin"></div>
          </div>
        ) : properties.length === 0 ? (
          <div className="bg-white border border-gray-100 rounded-3xl px-6 py-20 text-center shadow-sm">
            <div className="w-24 h-24 mx-auto bg-blue-50 rounded-full flex items-center justify-center text-5xl mb-7">
              🏡
            </div>

            <h2 className="text-3xl font-bold text-[#17243B]">
              Your journey starts here.
            </h2>

            <p className="text-gray-500 max-w-md mx-auto mt-4">
              You haven't listed any properties yet. Add your first property
              and start welcoming guests to your space.
            </p>

            <Link
              to="/add"
              className="inline-flex items-center gap-2 mt-8 bg-[#E50909] text-white px-8 py-4 rounded-xl font-semibold"
            >
              + List Your Property
            </Link>
          </div>
        ) : (

          /* Cards */
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {properties.map((property) => (
              <div
                key={property._id}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition duration-500"
              >

                {/* Image */}
                <div className="relative overflow-hidden h-64 bg-gray-200">

                  <img
                    src={getImageUrl(property.images?.[0])}
                    alt={property.title || "Property"}
                    onError={(e) => {
                      console.log("Image Failed:", e.target.src);
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/600x400?text=Image+Not+Available";
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

                  <span className="absolute top-5 left-5 bg-white/95 px-4 py-2 rounded-full text-xs font-bold text-green-600">
                    ● {property.status || "Listed"}
                  </span>

                  <span className="absolute bottom-5 left-5 text-white text-sm font-medium">
                    📍 {property.city || property.location}
                  </span>
                </div>

                {/* Details */}
                <div className="p-6">

                  <h3 className="text-xl font-bold text-[#17243B] truncate">
                    {property.title}
                  </h3>

                  <p className="text-gray-400 text-sm mt-2 line-clamp-2">
                    {property.description ||
                      "A beautiful place for your next stay."}
                  </p>

                  <div className="border-t border-gray-100 my-5"></div>

                  {/* Price */}
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="text-gray-400 text-xs">
                        Price per night
                      </p>

                      <h3 className="text-2xl font-extrabold text-[#E50909] mt-1">
                        ₹{property.price}

                        <span className="text-xs text-gray-400 font-normal">
                          {" "} / night
                        </span>
                      </h3>
                    </div>

                    <span className="bg-blue-50 text-[#2672B8] px-4 py-2 rounded-lg text-xs font-semibold">
                      Property Listed
                    </span>
                  </div>

                  {/* Details Button */}
                  <button
                    onClick={() =>
                      navigate(`/property-details/${property._id}`)
                    }
                    className="w-full mt-5 flex items-center justify-center gap-2 bg-[#17243B] text-white py-3 rounded-xl font-semibold hover:bg-[#E50909] transition"
                  >
                    View Property Details →
                  </button>

                </div>
              </div>
            ))}

          </div>
        )}

      </main>
    </div>
  );
};

export default MyProperties;
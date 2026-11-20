import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const PropertyDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch Property
  const fetchProperty = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.get(
        `http://localhost:3000/propertyfind/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Property Data:", res.data);
      console.log("Images:", res.data.images);

      setProperty(res.data);
    } catch (error) {
      console.log("Property Details Error:", error.response?.data || error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProperty();
  }, [id]);

  // Image URL Helper
  const getImageUrl = (image) => {
    if (!image) {
      return "https://placehold.co/800x600?text=Property";
    }

    // Agar Cloudinary ya complete URL hai
    if (image.startsWith("http")) {
      return image;
    }

    // Starting slash remove karna
    let imagePath = image.replace(/^\/+/, "");

    // Agar path mein upload pehle se hai
    if (imagePath.startsWith("upload/")) {
      return `http://localhost:3000/${imagePath}`;
    }

    // Agar sirf image ka naam hai
    return `http://localhost:3000/upload/${imagePath}`;
  };

  // Loading
  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-50">
        <div className="w-10 h-10 border-4 border-red-100 border-t-[#E50909] rounded-full animate-spin"></div>
      </div>
    );
  }

  // Property Not Found
  if (!property) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50">
        <h1 className="text-3xl font-bold text-[#17243B]">
          Property Not Found
        </h1>

        <button
          onClick={() => navigate(-1)}
          className="mt-5 bg-[#E50909] text-white px-6 py-3 rounded-xl"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Header */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">

          <button
            onClick={() => navigate(-1)}
            className="text-gray-500 hover:text-[#E50909] font-medium transition"
          >
            ← Back to Properties
          </button>

          <div className="flex flex-col md:flex-row justify-between md:items-center gap-5 mt-6">

            <div>
              <h1 className="text-3xl md:text-4xl font-extrabold text-[#17243B]">
                {property.title}
              </h1>

              <p className="text-gray-500 mt-3">
                📍 {property.city || property.location}
              </p>
            </div>

            <span className="bg-green-50 text-green-600 px-5 py-3 rounded-xl font-semibold text-sm">
              ● {property.status || "Listed"}
            </span>

          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 lg:px-10 py-10">

        {/* Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {/* Main Image */}
          <div className="h-[350px] md:h-[450px] rounded-3xl overflow-hidden bg-gray-200">
            <img
              src={getImageUrl(property.images?.[0])}
              alt={property.title || "Property"}
              onError={(e) => {
                console.log("Image failed:", e.target.src);
                e.target.onerror = null;
                e.target.src = "https://placehold.co/800x600?text=Image+Not+Available";
              }}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Other Images */}
          <div className="grid grid-cols-2 gap-4">

            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="h-[170px] md:h-[217px] rounded-2xl overflow-hidden bg-gray-200"
              >
                {property.images?.[index] ? (
                  <img
                    src={getImageUrl(property.images[index])}
                    alt={`Property ${index + 1}`}
                    onError={(e) => {
                      console.log("Image failed:", e.target.src);
                      e.target.onerror = null;
                      e.target.src = "https://placehold.co/600x400?text=Image+Not+Available";
                    }}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex justify-center items-center text-gray-400">
                    No Image
                  </div>
                )}
              </div>
            ))}

          </div>
        </div>

        {/* Property Information */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">

          {/* Left Section */}
          <div className="lg:col-span-2 space-y-8">

            {/* Overview */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">

              <h2 className="text-2xl font-bold text-[#17243B]">
                Property Overview
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-7">

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">Guests</p>
                  <h3 className="text-xl font-bold mt-2">
                    {property.guests || property.maxGuests || "N/A"}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">Bedrooms</p>
                  <h3 className="text-xl font-bold mt-2">
                    {property.bedrooms || "N/A"}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">Bathrooms</p>
                  <h3 className="text-xl font-bold mt-2">
                    {property.bathrooms || "N/A"}
                  </h3>
                </div>

                <div className="bg-gray-50 rounded-2xl p-5">
                  <p className="text-gray-400 text-sm">Property Type</p>
                  <h3 className="text-xl font-bold mt-2">
                    {property.propertyType || property.type || "N/A"}
                  </h3>
                </div>

              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">

              <h2 className="text-2xl font-bold text-[#17243B]">
                About This Property
              </h2>

              <p className="text-gray-600 leading-8 mt-5 whitespace-pre-line">
                {property.description || "No description available."}
              </p>

            </div>

            {/* Location */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">

              <h2 className="text-2xl font-bold text-[#17243B]">
                Location
              </h2>

              <div className="mt-5 space-y-3 text-gray-600">
                <p>
                  📍 {property.address || property.location || "Address not available"}
                </p>

                <p>
                  🏙️ {property.city || "City not available"}
                </p>

                <p>
                  🌎 {property.state || ""} {property.country || ""}
                </p>
              </div>

            </div>

            {/* Amenities */}
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm">

              <h2 className="text-2xl font-bold text-[#17243B]">
                Amenities
              </h2>

              {property.amenities?.length > 0 ? (

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-6">

                  {property.amenities.map((amenity, index) => (
                    <div
                      key={index}
                      className="bg-gray-50 px-5 py-4 rounded-xl text-gray-700"
                    >
                      ✓ {amenity}
                    </div>
                  ))}

                </div>

              ) : (
                <p className="text-gray-400 mt-5">
                  No amenities added.
                </p>
              )}

            </div>

          </div>

          {/* Right Section - Price Card */}
          <div>
            <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm sticky top-24">

              <p className="text-gray-400 text-sm">
                Price per night
              </p>

              <h2 className="text-4xl font-extrabold text-[#E50909] mt-2">
                ₹{property.price}
              </h2>

              <p className="text-gray-400 text-sm mt-1">
                per night
              </p>

              <div className="border-t border-gray-100 my-7"></div>

              <div className="space-y-4 text-sm">

                <div className="flex justify-between">
                  <span className="text-gray-500">Property Status</span>
                  <span className="font-semibold text-green-600">
                    {property.status || "Listed"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">City</span>
                  <span className="font-semibold text-[#17243B]">
                    {property.city || "N/A"}
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-gray-500">Property Type</span>
                  <span className="font-semibold text-[#17243B]">
                    {property.propertyType || property.type || "N/A"}
                  </span>
                </div>

              </div>

              <div className="bg-blue-50 rounded-xl p-4 mt-7">
                <p className="text-blue-700 text-sm">
                  This is your listed property. You can manage it from your host dashboard.
                </p>
              </div>

              {/* Edit Button */}
              <button
                onClick={() => alert("Edit functionality will be added next")}
                className="w-full mt-5 border border-gray-200 py-3 rounded-xl font-semibold text-[#17243B] hover:bg-gray-50 transition"
              >
                ✏️ Edit Property
              </button>

              {/* Delete Button */}
              <button
                onClick={() => alert("Delete functionality will be added next")}
                className="w-full mt-3 border border-red-200 text-red-600 py-3 rounded-xl font-semibold hover:bg-red-50 transition"
              >
                🗑️ Delete Property
              </button>

            </div>
          </div>

        </div>

      </main>
    </div>
  );
};

export default PropertyDetails;
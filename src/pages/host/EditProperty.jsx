import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProperty = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    propertyType: "",
    city: "",
    address: "",
    guests: "",
    bedrooms: "",
    bathrooms: "",
    price: "",
    amenities: [],
  });

  // Fetch Existing Property
  useEffect(() => {
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

        const p = res.data;

        setFormData({
          title: p.title || "",
          description: p.description || "",
          propertyType: p.propertyType || "",
          city: p.city || "",
          address: p.address || "",
          guests: p.guests || p.maxGuests || "",
          bedrooms: p.bedrooms || "",
          bathrooms: p.bathrooms || "",
          price: p.price || "",
          amenities: p.amenities || [],
        });
      } catch (error) {
        console.log("Property Fetch Error:", error);
        alert("Property load failed!");
      } finally {
        setLoading(false);
      }
    };

    fetchProperty();
  }, [id]);

  // Handle Inputs
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Property Type
  const handleType = (type) => {
    setFormData((prev) => ({
      ...prev,
      propertyType: type,
    }));
  };

  // Amenities
  const handleAmenity = (item) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(item)
        ? prev.amenities.filter((a) => a !== item)
        : [...prev.amenities, item],
    }));
  };

  // Update Property
  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      setUpdating(true);

      const token = localStorage.getItem("token");

      await axios.put(
        `http://localhost:3000/propertyupdate/${id}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert("Property updated successfully!");

      navigate(-1);
    } catch (error) {
      console.log("Update Error:", error.response?.data || error.message);
      alert("Property update failed!");
    } finally {
      setUpdating(false);
    }
  };

  // Common Classes
  const inputClass =
    "w-full bg-[#F8FAFC] border border-gray-200 rounded-xl px-4 py-3.5 text-sm sm:text-base outline-none focus:border-red-500 focus:ring-2 focus:ring-red-50 transition";

  const cardClass =
    "bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-sm";

  const amenitiesList = [
    "WiFi",
    "AC",
    "Parking",
    "TV",
    "Kitchen",
    "Swimming Pool",
    "Gym",
    "Washing Machine",
    "Refrigerator",
    "Pet Friendly",
  ];

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex justify-center items-center">
        <div className="w-10 h-10 border-4 border-red-100 border-t-red-600 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* Navbar */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">

          <div className="flex justify-between items-center">

            {/* Logo */}
            <div
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => navigate("/")}
            >
              <div className="bg-red-600 text-white w-9 h-9 sm:w-10 sm:h-10 rounded-xl flex items-center justify-center text-lg">
                🏠
              </div>

              <div>
                <h2 className="font-extrabold text-gray-900 text-sm sm:text-base">
                  Grah<span className="text-red-600">Pravesh</span>
                </h2>

                <p className="text-[8px] sm:text-[9px] tracking-[2px] text-gray-400">
                  STAY. EXPLORE. EXPERIENCE.
                </p>
              </div>
            </div>

            {/* Right Buttons */}
            <div className="flex items-center gap-2 sm:gap-3">

              <span className="hidden sm:block text-xs bg-blue-50 text-blue-700 px-3 py-2 rounded-full font-semibold">
                HOST PORTAL
              </span>

              <button
                onClick={() => navigate(-1)}
                className="border border-gray-200 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 text-xs sm:text-sm font-semibold hover:bg-gray-50 transition"
              >
                ← Dashboard
              </button>

            </div>

          </div>

        </div>
      </nav>

      {/* Main Container */}
      <main className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8 lg:py-10">

        {/* Heading */}
        <div className="mb-7 sm:mb-9">

          <span className="inline-flex bg-blue-50 text-blue-700 text-[10px] sm:text-xs font-bold px-3 py-2 rounded-full mb-3">
            ✨ EDIT YOUR PROPERTY
          </span>

          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#17243B]">
            Edit Your <span className="text-red-600">Property</span>
          </h1>

          <p className="text-gray-500 text-xs sm:text-sm lg:text-base leading-6 mt-2 max-w-2xl">
            Update your property details and keep your listing up to date.
          </p>

        </div>

        {/* Form */}
        <form onSubmit={handleUpdate} className="space-y-5 sm:space-y-6">

          {/* Basic Information */}
          <section className={cardClass}>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
                🏠
              </div>

              <div>
                <h2 className="font-bold text-gray-900 text-sm sm:text-base">
                  Basic Information
                </h2>

                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                  Tell us something about your property.
                </p>
              </div>

            </div>

            {/* Title */}
            <div className="mb-5">

              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Property Title *
              </label>

              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                placeholder="e.g. Luxury Villa in Bhopal"
                className={`${inputClass} mt-2`}
              />

            </div>

            {/* Description */}
            <div className="mb-5">

              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Description *
              </label>

              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
                rows={4}
                placeholder="Describe your property, facilities and special features..."
                className={`${inputClass} mt-2 resize-y min-h-[120px]`}
              />

            </div>

            {/* Property Type */}
            <div>

              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Property Type *
              </label>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mt-3">

                {["Apartment", "Villa", "Hotel", "House", "Room"].map(
                  (type) => (
                    <button
                      type="button"
                      key={type}
                      onClick={() => handleType(type)}
                      className={`py-3 sm:py-4 rounded-xl border text-xs sm:text-sm font-semibold transition ${
                        formData.propertyType === type
                          ? "bg-red-50 border-red-500 text-red-600"
                          : "bg-[#F8FAFC] border-gray-200 text-gray-600 hover:border-red-300 hover:bg-red-50"
                      }`}
                    >
                      {type}
                    </button>
                  )
                )}

              </div>

            </div>

          </section>

          {/* Location Details */}
          <section className={cardClass}>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
                📍
              </div>

              <div>
                <h2 className="font-bold text-gray-900 text-sm sm:text-base">
                  Location Details
                </h2>

                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                  Where is your property located?
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">

              {/* City */}
              <div>

                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  City *
                </label>

                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                  placeholder="e.g. Bhopal"
                  className={`${inputClass} mt-2`}
                />

              </div>

              {/* Address */}
              <div>

                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Full Address *
                </label>

                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  placeholder="Area, Street, Landmark"
                  className={`${inputClass} mt-2`}
                />

              </div>

            </div>

          </section>

          {/* Property Details */}
          <section className={cardClass}>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
                👥
              </div>

              <div>
                <h2 className="font-bold text-gray-900 text-sm sm:text-base">
                  Property Details
                </h2>

                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                  Add accommodation and guest information.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

              {/* Guests */}
              <div>

                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Maximum Guests *
                </label>

                <input
                  type="number"
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  min="1"
                  required
                  className={`${inputClass} mt-2`}
                />

              </div>

              {/* Bedrooms */}
              <div>

                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Bedrooms *
                </label>

                <input
                  type="number"
                  name="bedrooms"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  min="1"
                  required
                  className={`${inputClass} mt-2`}
                />

              </div>

              {/* Bathrooms */}
              <div>

                <label className="text-xs sm:text-sm font-semibold text-gray-700">
                  Bathrooms *
                </label>

                <input
                  type="number"
                  name="bathrooms"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  min="1"
                  required
                  className={`${inputClass} mt-2`}
                />

              </div>

            </div>

          </section>

          {/* Pricing */}
          <section className={cardClass}>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
                💰
              </div>

              <div>
                <h2 className="font-bold text-gray-900 text-sm sm:text-base">
                  Pricing
                </h2>

                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                  Set your property's nightly price.
                </p>
              </div>

            </div>

            <div>

              <label className="text-xs sm:text-sm font-semibold text-gray-700">
                Price Per Night (₹) *
              </label>

              <input
                type="number"
                name="price"
                value={formData.price}
                onChange={handleChange}
                min="1"
                required
                placeholder="Enter price"
                className={`${inputClass} mt-2`}
              />

            </div>

          </section>

          {/* Amenities */}
          <section className={cardClass}>

            <div className="flex items-center gap-3 mb-6">

              <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-blue-50 flex items-center justify-center text-lg">
                ✨
              </div>

              <div>
                <h2 className="font-bold text-gray-900 text-sm sm:text-base">
                  Amenities
                </h2>

                <p className="text-[10px] sm:text-xs text-gray-400 mt-1">
                  Select facilities available at your property.
                </p>
              </div>

            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">

              {amenitiesList.map((amenity) => (
                <label
                  key={amenity}
                  className={`flex items-center gap-2 p-3 sm:p-4 rounded-xl border cursor-pointer transition text-xs sm:text-sm ${
                    formData.amenities.includes(amenity)
                      ? "border-red-500 bg-red-50 text-red-600"
                      : "border-gray-200 bg-[#F8FAFC] text-gray-600 hover:border-red-300"
                  }`}
                >

                  <input
                    type="checkbox"
                    checked={formData.amenities.includes(amenity)}
                    onChange={() => handleAmenity(amenity)}
                    className="accent-red-600 w-4 h-4 flex-shrink-0"
                  />

                  <span>{amenity}</span>

                </label>
              ))}

            </div>

          </section>

          {/* Action Buttons */}
          <section className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-sm">

            <div className="flex flex-col-reverse sm:flex-row gap-3 sm:gap-4">

              <button
                type="button"
                onClick={() => navigate(-1)}
                className="w-full sm:w-auto sm:flex-1 border border-gray-200 rounded-xl py-3.5 text-sm font-semibold text-gray-600 hover:bg-gray-50 transition"
              >
                Cancel
              </button>

              <button
                type="submit"
                disabled={updating}
                className="w-full sm:w-auto sm:flex-1 bg-red-600 text-white rounded-xl py-3.5 text-sm font-bold hover:bg-red-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {updating ? "Updating Property..." : "Update Property →"}
              </button>

            </div>

          </section>

        </form>

      </main>

    </div>
  );
};

export default EditProperty;
import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Home, MapPin, IndianRupee, Users, BedDouble, Bath,
  Wifi, Car, Tv, Wind, Waves, Dumbbell, Coffee,
  Trash2, ArrowLeft, CheckCircle, ImagePlus, ArrowRight, Sparkles
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const AddProperty = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    location: "",
    city: "",
    price: "",
    propertyType: "",
    maxGuests: "",
    bedrooms: "",
    bathrooms: "",
    images: [],
    amenities: [],
  });

  const [loading, setLoading] = useState(false);

  // Image preview URLs
  const [previewImages, setPreviewImages] = useState([]);

  const propertyTypes = ["Apartment", "Villa", "Hotel", "House", "Room"];

  const amenitiesList = [
    { name: "WiFi", icon: <Wifi size={20} /> },
    { name: "AC", icon: <Wind size={20} /> },
    { name: "Parking", icon: <Car size={20} /> },
    { name: "TV", icon: <Tv size={20} /> },
    { name: "Swimming Pool", icon: <Waves size={20} /> },
    { name: "Gym", icon: <Dumbbell size={20} /> },
    { name: "Coffee", icon: <Coffee size={20} /> },
  ];

  // Create preview URLs
  useEffect(() => {
    const urls = formData.images.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviewImages(urls);

    return () => {
      urls.forEach((url) => URL.revokeObjectURL(url));
    };
  }, [formData.images]);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle property type
  const handlePropertyType = (type) => {
    setFormData((prev) => ({
      ...prev,
      propertyType: type,
    }));
  };

  // Handle amenities
  const handleAmenity = (amenity) => {
    setFormData((prev) => ({
      ...prev,
      amenities: prev.amenities.includes(amenity)
        ? prev.amenities.filter((item) => item !== amenity)
        : [...prev.amenities, amenity],
    }));
  };

  // Add images
  const addImage = (e) => {
    const files = Array.from(e.target.files || []);

    if (!files.length) return;

    setFormData((prev) => {
      const remaining = 5 - prev.images.length;

      if (remaining <= 0) {
        alert("Maximum 5 images allowed!");
        return prev;
      }

      const selectedFiles = files.slice(0, remaining);

      if (files.length > remaining) {
        alert("You can upload maximum 5 images!");
      }

      return {
        ...prev,
        images: [...prev.images, ...selectedFiles],
      };
    });

    e.target.value = "";
  };

  // Remove image
  const removeImage = (index) => {
    setFormData((prev) => ({
      ...prev,
      images: prev.images.filter((_, i) => i !== index),
    }));
  };

  // Submit property
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.propertyType) {
      alert("Please select property type");
      return;
    }

    if (formData.images.length === 0) {
      alert("Please select at least one property image");
      return;
    }

    if (formData.images.length > 5) {
      alert("Maximum 5 images allowed");
      return;
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      if (!token) {
        alert("Please login first");
        navigate("/login");
        return;
      }

      const data = new FormData();

      data.append("title", formData.title);
      data.append("description", formData.description);
      data.append("location", formData.location);
      data.append("city", formData.city);
      data.append("price", formData.price);
      data.append("propertyType", formData.propertyType);
      data.append("maxGuests", formData.maxGuests);
      data.append("bedrooms", formData.bedrooms);
      data.append("bathrooms", formData.bathrooms);

      data.append("amenities", JSON.stringify(formData.amenities));

      // Append each image individually
      formData.images.forEach((image) => {
        data.append("images", image);
      });

      // Debug FormData
      console.log("----- FormData -----");

      for (const [key, value] of data.entries()) {
        console.log(
          key,
          value instanceof File
            ? `${value.name} (${value.size} bytes)`
            : value
        );
      }

      const response = await axios.post(
        "http://localhost:3000/add",
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Property added:", response.data);

      alert("Property added successfully!");

      navigate("/my-properties");

    } catch (error) {
      console.error("Add property error:", error);

      alert(
        error.response?.data?.message ||
        error.message ||
        "Something went wrong!"
      );

    } finally {
      setLoading(false);
    }
  };

  const inputStyle = `
    w-full rounded-xl border border-gray-200
    bg-[#F8FAFC] px-4 py-3.5 text-sm
    text-[#111827] outline-none transition-all
    placeholder:text-gray-400
    focus:border-[#E50909]
    focus:bg-white
    focus:ring-4 focus:ring-red-100
  `;

  const labelStyle = `
    mb-2.5 block text-sm font-bold text-[#111827]
  `;

  const SectionHeading = ({ icon, title, subtitle }) => (
    <div className="mb-7 flex items-center gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#B9D9F3]/40 text-[#111827]">
        {icon}
      </div>

      <div>
        <h3 className="text-lg font-extrabold text-[#111827]">
          {title}
        </h3>

        <p className="mt-1 text-xs text-gray-400">
          {subtitle}
        </p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-[#111827]">

      {/* NAVBAR */}
      <header className="sticky top-0 z-30 border-b border-gray-100 bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1450px] items-center justify-between px-5 py-4 md:px-10">

          <Link to="/host-dashboard" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#E50909] text-white shadow-lg shadow-red-100">
              <Home size={23} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                Grah<span className="text-[#E50909]">Pravesh</span>
              </h1>

              <p className="text-[9px] font-bold tracking-[2px] text-gray-400">
                STAY. EXPLORE. EXPERIENCE.
              </p>
            </div>
          </Link>

          <div className="flex items-center gap-3">
            <span className="hidden rounded-full bg-[#B9D9F3]/30 px-4 py-2 text-xs font-bold sm:block">
              HOST PORTAL
            </span>

            <Link
              to="/host-dashboard"
              className="flex items-center gap-2 rounded-xl border border-gray-200 px-4 py-2.5 text-sm font-bold text-gray-600 transition hover:border-[#E50909] hover:text-[#E50909]"
            >
              <ArrowLeft size={16} />
              <span className="hidden sm:block">Dashboard</span>
            </Link>
          </div>
        </div>
      </header>

      {/* MAIN */}
      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6 md:py-14">

        {/* HEADING */}
        <div className="mb-10">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#B9D9F3] bg-[#B9D9F3]/25 px-4 py-2 text-xs font-extrabold">
            <Sparkles size={15} className="text-[#E50909]" />
            HOST YOUR PROPERTY
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
            Add Your <span className="text-[#E50909]">Property</span>
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-500">
            Share your beautiful space with travellers.
            Create your listing and start your hosting journey
            with Grah Pravesh.
          </p>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} className="space-y-7">

          {/* BASIC INFORMATION */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

            <SectionHeading
              icon={<Home size={23} />}
              title="Basic Information"
              subtitle="Tell us something about your property."
            />

            <div className="space-y-6">

              <div>
                <label className={labelStyle}>Property Title *</label>

                <input
                  type="text"
                  name="title"
                  placeholder="e.g. Luxury Villa in Bhopal"
                  value={formData.title}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Description *</label>

                <textarea
                  name="description"
                  rows="5"
                  placeholder="Describe your property, facilities and special features..."
                  value={formData.description}
                  onChange={handleChange}
                  className={`${inputStyle} resize-none`}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Property Type *</label>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                  {propertyTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => handlePropertyType(type)}
                      className={`rounded-xl border p-4 text-sm font-bold transition-all ${
                        formData.propertyType === type
                          ? "border-[#E50909] bg-[#E50909] text-white"
                          : "border-gray-200 bg-[#F8FAFC] text-gray-600 hover:border-[#E50909]"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* LOCATION */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

            <SectionHeading
              icon={<MapPin size={23} />}
              title="Location Details"
              subtitle="Where is your property located?"
            />

            <div className="grid gap-6 sm:grid-cols-2">

              <div>
                <label className={labelStyle}>City *</label>

                <input
                  type="text"
                  name="city"
                  placeholder="e.g. Bhopal"
                  value={formData.city}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Full Address *</label>

                <input
                  type="text"
                  name="location"
                  placeholder="Area, Street, Landmark"
                  value={formData.location}
                  onChange={handleChange}
                  className={inputStyle}
                  required
                />
              </div>

            </div>
          </section>

          {/* DETAILS */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

            <SectionHeading
              icon={<Users size={23} />}
              title="Property Details"
              subtitle="Add accommodation and guest information."
            />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

              <div>
                <label className={labelStyle}>Maximum Guests *</label>

                <input
                  type="number"
                  name="maxGuests"
                  min="1"
                  value={formData.maxGuests}
                  onChange={handleChange}
                  placeholder="4"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Bedrooms *</label>

                <input
                  type="number"
                  name="bedrooms"
                  min="0"
                  value={formData.bedrooms}
                  onChange={handleChange}
                  placeholder="2"
                  className={inputStyle}
                  required
                />
              </div>

              <div>
                <label className={labelStyle}>Bathrooms *</label>

                <input
                  type="number"
                  name="bathrooms"
                  min="0"
                  value={formData.bathrooms}
                  onChange={handleChange}
                  placeholder="2"
                  className={inputStyle}
                  required
                />
              </div>

            </div>
          </section>

          {/* PRICING */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

            <SectionHeading
              icon={<IndianRupee size={23} />}
              title="Pricing Details"
              subtitle="Set your property's nightly price."
            />

            <div className="max-w-md">
              <label className={labelStyle}>Price Per Night (₹) *</label>

              <input
                type="number"
                name="price"
                min="1"
                placeholder="2500"
                value={formData.price}
                onChange={handleChange}
                className={inputStyle}
                required
              />
            </div>
          </section>

          {/* AMENITIES */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

            <SectionHeading
              icon={<Sparkles size={23} />}
              title="Property Amenities"
              subtitle="Select all facilities available at your property."
            />

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
              {amenitiesList.map((item) => (
                <button
                  key={item.name}
                  type="button"
                  onClick={() => handleAmenity(item.name)}
                  className={`flex items-center gap-3 rounded-xl border p-4 text-sm font-bold transition-all ${
                    formData.amenities.includes(item.name)
                      ? "border-[#E50909] bg-red-50 text-[#E50909]"
                      : "border-gray-200 bg-[#F8FAFC] text-gray-600 hover:border-[#E50909]"
                  }`}
                >
                  {item.icon}
                  <span>{item.name}</span>

                  {formData.amenities.includes(item.name) && (
                    <CheckCircle size={16} className="ml-auto" />
                  )}
                </button>
              ))}
            </div>

            <p className="mt-5 text-xs text-gray-400">
              Selected amenities: {formData.amenities.length}
            </p>
          </section>

          {/* IMAGES */}
          <section className="rounded-3xl border border-gray-100 bg-white p-6 shadow-sm sm:p-9">

            <SectionHeading
              icon={<ImagePlus size={23} />}
              title="Property Images"
              subtitle="Upload attractive images of your property."
            />

            <div className="rounded-2xl border-2 border-dashed border-[#B9D9F3] bg-[#F8FAFC] p-5 sm:p-7">

              <input
                type="file"
                accept="image/*"
                multiple
                onChange={addImage}
                disabled={formData.images.length >= 5}
                className={`${inputStyle} cursor-pointer`}
              />

              <p className="mt-3 text-xs text-gray-400">
                Maximum 5 images. {formData.images.length}/5 selected.
              </p>
            </div>

            {formData.images.length > 0 && (
              <div className="mt-6">

                <h4 className="mb-4 text-sm font-bold">
                  Selected Images
                </h4>

                <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
                  {formData.images.map((image, index) => (
                    <div
                      key={`${image.name}-${index}`}
                      className="group relative h-36 overflow-hidden rounded-2xl border bg-gray-100"
                    >
                      <img
                        src={previewImages[index]}
                        alt={`Property ${index + 1}`}
                        className="h-full w-full object-cover"
                      />

                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute right-2 top-2 rounded-lg bg-white p-2 text-red-500 shadow-md hover:bg-red-50"
                      >
                        <Trash2 size={17} />
                      </button>

                      <div className="absolute bottom-0 w-full truncate bg-black/50 px-2 py-1 text-xs text-white">
                        {image.name}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </section>

          {/* SUBMIT */}
          <section className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm">

            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">

              <div>
                <div className="flex items-center gap-2">
                  <CheckCircle size={20} className="text-[#E50909]" />

                  <h3 className="font-extrabold">
                    Ready to publish?
                  </h3>
                </div>

                <p className="mt-2 text-xs leading-6 text-gray-400">
                  Review your property information before submitting.
                </p>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="flex items-center justify-center gap-3 rounded-xl bg-[#E50909] px-8 py-4 text-sm font-extrabold text-white shadow-lg transition hover:bg-red-700 disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent"></span>
                    Publishing...
                  </>
                ) : (
                  <>
                    Publish Property
                    <ArrowRight size={19} />
                  </>
                )}
              </button>

            </div>

            <div className="h-1.5 w-full bg-[#B9D9F3]">
              <div className="h-full w-2/3 bg-[#E50909]"></div>
            </div>
          </section>

        </form>

        {/* FOOTER */}
        <footer className="mt-12 border-t border-gray-200 py-7 text-center">
          <p className="text-xs text-gray-400">
            © 2026 Grah Pravesh. All rights reserved.
          </p>

          <p className="mt-2 text-xs font-semibold text-[#E50909]">
            Stay. Explore. Experience.
          </p>
        </footer>

      </main>
    </div>
  );
};

export default AddProperty;
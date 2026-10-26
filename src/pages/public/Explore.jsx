import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import {
  MapPin,
  Heart,
  Star,
  BedDouble,
  Bath,
  Users,
  SlidersHorizontal,
  ArrowUpDown,
  Map,
  LayoutGrid,
  House,
  Building2,
  Trees,
  TentTree,
  Wifi,
  Car,
  Waves,
  Wind,
  Utensils,
  Check,
  RotateCcw,
  ArrowRight,
  ShieldCheck,
  X,
  ChevronRight,
  Sparkles,
} from "lucide-react";

/* ----------------------------------
   DEMO PROPERTY DATA
---------------------------------- */

const PROPERTIES = [
  {
    id: "stay-101",
    title: "Luxury Mountain Villa",
    city: "Manali",
    location: "Manali, Himachal Pradesh",
    type: "Villa",
    price: 8500,
    rating: 4.92,
    reviews: 128,
    guests: 6,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Parking", "Kitchen", "AC", "Pool"],
    badge: "Guest favourite",
    image:
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-102",
    title: "Private Poolside Retreat",
    city: "Lonavala",
    location: "Lonavala, Maharashtra",
    type: "Villa",
    price: 6200,
    rating: 4.88,
    reviews: 96,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Parking", "Kitchen", "Pool", "AC"],
    badge: "Popular choice",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-103",
    title: "Serene Forest Cottage",
    city: "Coorg",
    location: "Coorg, Karnataka",
    type: "Cottage",
    price: 4800,
    rating: 4.95,
    reviews: 84,
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wi-Fi", "Kitchen", "Parking"],
    badge: "Rare find",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-104",
    title: "Modern City Apartment",
    city: "Indore",
    location: "Indore, Madhya Pradesh",
    type: "Apartment",
    price: 3200,
    rating: 4.81,
    reviews: 67,
    guests: 4,
    bedrooms: 2,
    bathrooms: 1,
    amenities: ["Wi-Fi", "Kitchen", "AC"],
    badge: "Great value",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-105",
    title: "Beachside Holiday Villa",
    city: "Goa",
    location: "North Goa, Goa",
    type: "Villa",
    price: 7200,
    rating: 4.89,
    reviews: 112,
    guests: 5,
    bedrooms: 3,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Parking", "Pool", "AC"],
    badge: "Top rated",
    image:
      "https://images.unsplash.com/photo-1602343168117-bb8ffe3e2e9f?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-106",
    title: "Elegant Heritage Apartment",
    city: "Udaipur",
    location: "Udaipur, Rajasthan",
    type: "Apartment",
    price: 5400,
    rating: 4.86,
    reviews: 75,
    guests: 4,
    bedrooms: 2,
    bathrooms: 2,
    amenities: ["Wi-Fi", "Kitchen", "AC"],
    badge: "",
    image:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-107",
    title: "Peaceful Riverside Cottage",
    city: "Rishikesh",
    location: "Rishikesh, Uttarakhand",
    type: "Cottage",
    price: 3900,
    rating: 4.91,
    reviews: 58,
    guests: 3,
    bedrooms: 1,
    bathrooms: 1,
    amenities: ["Wi-Fi", "Parking", "Kitchen"],
    badge: "Nature escape",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: "stay-108",
    title: "Spacious Family Farmhouse",
    city: "Bhopal",
    location: "Bhopal, Madhya Pradesh",
    type: "Farmhouse",
    price: 6800,
    rating: 4.87,
    reviews: 43,
    guests: 8,
    bedrooms: 4,
    bathrooms: 3,
    amenities: ["Wi-Fi", "Parking", "Kitchen", "Pool"],
    badge: "Family favourite",
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=85",
  },
];

const CATEGORIES = [
  { name: "All stays", icon: House },
  { name: "Villa", icon: House },
  { name: "Apartment", icon: Building2 },
  { name: "Cottage", icon: Trees },
  { name: "Farmhouse", icon: TentTree },
];

const AMENITIES = [
  { name: "Wi-Fi", icon: Wifi },
  { name: "Parking", icon: Car },
  { name: "Pool", icon: Waves },
  { name: "AC", icon: Wind },
  { name: "Kitchen", icon: Utensils },
];

const SORT_OPTIONS = [
  { value: "recommended", label: "Recommended" },
  { value: "price-low", label: "Price: Low to high" },
  { value: "price-high", label: "Price: High to low" },
  { value: "rating", label: "Highest rated" },
];

const formatPrice = (price) =>
  `₹${Number(price).toLocaleString("en-IN")}`;

/* ----------------------------------
   SECTION HEADING
---------------------------------- */

function FilterHeading({ children }) {
  return (
    <h3 className="mb-4 text-sm font-bold text-[#0B1424]">
      {children}
    </h3>
  );
}

/* ----------------------------------
   PROPERTY CARD
---------------------------------- */

function PropertyCard({ property, saved, onToggleSave }) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-3xl border border-gray-200 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B1424]/10">
      <div className="relative h-56 overflow-hidden sm:h-60">
        <Link
          to={`/property/${property.id}`}
          className="block h-full"
          aria-label={`View ${property.title}`}
        >
          <img
            src={property.image}
            alt={property.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {property.badge && (
          <span className="absolute left-4 top-4 max-w-[75%] truncate rounded-full bg-white px-3 py-2 text-xs font-bold text-[#0B1424] shadow-md">
            {property.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleSave(property.id)}
          aria-label={saved ? "Remove from wishlist" : "Save property"}
          aria-pressed={saved}
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full shadow-md transition ${
            saved
              ? "bg-[#E10600] text-white"
              : "bg-white/95 text-[#0B1424] hover:scale-110"
          }`}
        >
          <Heart size={19} fill={saved ? "currentColor" : "none"} />
        </button>

        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full bg-[#0B1424]/85 px-3 py-2 text-xs font-semibold text-white backdrop-blur">
          <Users size={14} />
          {property.guests} guests
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <p className="mb-2 flex items-center gap-1.5 text-xs text-gray-500">
              <MapPin size={14} className="shrink-0 text-[#E10600]" />
              <span className="truncate">{property.location}</span>
            </p>

            <Link
              to={`/property/${property.id}`}
              className="line-clamp-1 text-lg font-bold text-[#0B1424] transition hover:text-[#E10600]"
            >
              {property.title}
            </Link>
          </div>

          <span className="flex shrink-0 items-center gap-1 text-sm font-bold text-[#0B1424]">
            <Star size={15} fill="#FFD700" stroke="#D4A900" />
            {property.rating.toFixed(2)}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
          <span className="flex items-center gap-1.5">
            <BedDouble size={15} />
            {property.bedrooms} bedrooms
          </span>

          <span className="flex items-center gap-1.5">
            <Bath size={15} />
            {property.bathrooms} bathrooms
          </span>
        </div>

        <div className="mt-4 flex items-end justify-between gap-2 border-t border-gray-100 pt-4">
          <div>
            <span className="text-xl font-extrabold text-[#0B1424]">
              {formatPrice(property.price)}
            </span>
            <span className="text-xs text-gray-500"> / night</span>
          </div>

          <span className="text-xs text-gray-400">
            {property.reviews} reviews
          </span>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-[#0B1424]/15 py-3 text-sm font-bold text-[#0B1424] transition hover:border-[#0B1424] hover:bg-[#0B1424] hover:text-white"
        >
          View details
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

/* ----------------------------------
   MAP PREVIEW
---------------------------------- */

function MapPreview({ properties, onClose }) {
  return (
    <div className="relative min-h-[460px] overflow-hidden rounded-3xl border border-gray-200 bg-[#E7F0E5]">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          backgroundImage:
            "linear-gradient(30deg, transparent 46%, white 47%, white 49%, transparent 50%), linear-gradient(120deg, transparent 45%, white 46%, white 48%, transparent 49%)",
          backgroundSize: "95px 85px",
        }}
      />

      <div className="absolute left-[10%] top-[25%] h-28 w-36 rounded-full bg-[#B7D8F5] blur-2xl" />

      <div className="absolute bottom-[20%] right-[10%] h-40 w-40 rounded-full bg-[#B7D8F5] blur-2xl" />

      <div className="absolute left-4 right-4 top-4 z-10 flex items-center justify-between gap-3">
        <span className="rounded-xl bg-white px-4 py-3 text-sm font-bold shadow-md">
          Property map preview
        </span>

        <button
          type="button"
          onClick={onClose}
          className="flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-bold shadow-md"
        >
          <LayoutGrid size={16} />
          List view
        </button>
      </div>

      <div className="relative z-10 grid min-h-[460px] grid-cols-2 gap-5 p-5 pt-24 sm:grid-cols-3 sm:gap-8 sm:p-10 sm:pt-24">
        {properties.slice(0, 6).map((property, index) => (
          <Link
            key={property.id}
            to={`/property/${property.id}`}
            className={`flex h-fit items-center gap-2 rounded-full border border-white bg-white px-4 py-3 text-sm font-extrabold shadow-lg transition hover:scale-105 hover:bg-[#0B1424] hover:text-white ${
              index % 2 === 0 ? "self-start" : "mt-8 self-center"
            }`}
          >
            <MapPin size={16} className="shrink-0 text-[#E10600]" />
            {formatPrice(property.price)}
          </Link>
        ))}
      </div>

      <div className="absolute bottom-4 left-4 right-4 rounded-xl bg-white/95 p-3 text-xs leading-5 text-gray-500 shadow-md">
        This is a visual preview. Real geographic locations require
        integration with a map provider.
      </div>
    </div>
  );
}

/* ----------------------------------
   MAIN EXPLORE PAGE
---------------------------------- */

export default function Explore() {
  const [searchParams] = useSearchParams();

  // Read the search values sent by the existing navbar.
  const initialLocation = searchParams.get("location") || "";
  const initialGuests = searchParams.get("guests") || "1";

  const [location, setLocation] = useState(initialLocation);
  const [guests, setGuests] = useState(initialGuests);

  const [selectedCategory, setSelectedCategory] = useState("All stays");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(15000);
  const [selectedTypes, setSelectedTypes] = useState([]);
  const [selectedAmenities, setSelectedAmenities] = useState([]);
  const [minBedrooms, setMinBedrooms] = useState("Any");
  const [minRating, setMinRating] = useState(0);
  const [sortBy, setSortBy] = useState("recommended");

  const [showFilters, setShowFilters] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [savedProperties, setSavedProperties] = useState([]);

  const [activeSearch, setActiveSearch] = useState({
    location: initialLocation,
    guests: initialGuests,
  });

  const filteredProperties = useMemo(() => {
    const query = activeSearch.location.trim().toLowerCase();

    let result = PROPERTIES.filter((property) => {
      const matchesLocation =
        !query ||
        property.city.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        property.title.toLowerCase().includes(query);

      const matchesGuests =
        property.guests >= Number(activeSearch.guests || 1);

      const matchesPrice =
        property.price >= minPrice && property.price <= maxPrice;

      const matchesCategory =
        selectedCategory === "All stays" ||
        property.type === selectedCategory;

      const matchesTypes =
        selectedTypes.length === 0 ||
        selectedTypes.includes(property.type);

      const matchesAmenities = selectedAmenities.every((amenity) =>
        property.amenities.includes(amenity)
      );

      const matchesBedrooms =
        minBedrooms === "Any" ||
        property.bedrooms >= Number(minBedrooms);

      const matchesRating = property.rating >= minRating;

      return (
        matchesLocation &&
        matchesGuests &&
        matchesPrice &&
        matchesCategory &&
        matchesTypes &&
        matchesAmenities &&
        matchesBedrooms &&
        matchesRating
      );
    });

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    return result;
  }, [
    activeSearch,
    minPrice,
    maxPrice,
    selectedCategory,
    selectedTypes,
    selectedAmenities,
    minBedrooms,
    minRating,
    sortBy,
  ]);

  const toggleType = (type) => {
    setSelectedTypes((previous) =>
      previous.includes(type)
        ? previous.filter((item) => item !== type)
        : [...previous, type]
    );
  };

  const toggleAmenity = (amenity) => {
    setSelectedAmenities((previous) =>
      previous.includes(amenity)
        ? previous.filter((item) => item !== amenity)
        : [...previous, amenity]
    );
  };

  const toggleSave = (id) => {
    setSavedProperties((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    );
  };

  const resetFilters = () => {
    setLocation("");
    setGuests("1");

    setActiveSearch({
      location: "",
      guests: "1",
    });

    setSelectedCategory("All stays");
    setMinPrice(0);
    setMaxPrice(15000);
    setSelectedTypes([]);
    setSelectedAmenities([]);
    setMinBedrooms("Any");
    setMinRating(0);
    setSortBy("recommended");
    setShowMap(false);
  };

  const activeFiltersCount =
    selectedTypes.length +
    selectedAmenities.length +
    (selectedCategory !== "All stays" ? 1 : 0) +
    (minPrice > 0 ? 1 : 0) +
    (maxPrice < 15000 ? 1 : 0) +
    (minBedrooms !== "Any" ? 1 : 0) +
    (minRating > 0 ? 1 : 0);

  return (
    <main className="min-h-screen bg-[#F8FAFD] text-[#0B1424]">
      {/* PAGE INTRO — NO DUPLICATE SEARCH BAR */}

      <section className="border-b border-gray-200 bg-white px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[1440px]">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#B7D8F5]/35 px-3 py-1.5 text-xs font-bold text-[#0B1424]">
                <Sparkles size={14} />
                FIND YOUR NEXT ESCAPE
              </div>

              <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
                Explore stays<span className="text-[#E10600]">.</span>
              </h1>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
                From peaceful cottages to luxury villas, discover
                spaces that make every journey special.
              </p>
            </div>

            <div className="flex items-center gap-3 rounded-2xl border border-gray-200 bg-[#F8FAFD] px-4 py-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#B7D8F5]/50">
                <House size={20} />
              </div>

              <div>
                <p className="text-lg font-extrabold">
                  {filteredProperties.length}
                </p>
                <p className="text-xs text-gray-500">
                  Matching stays
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROPERTY CATEGORIES */}

      <section className="border-b border-gray-200 bg-white px-4 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] gap-7 overflow-x-auto py-5">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            const active = selectedCategory === category.name;

            return (
              <button
                type="button"
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`group flex min-w-fit flex-col items-center gap-2 border-b-2 pb-3 text-xs font-semibold transition ${
                  active
                    ? "border-[#E10600] text-[#0B1424]"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-[#0B1424]"
                }`}
              >
                <Icon
                  size={23}
                  className={`transition ${
                    active
                      ? "text-[#E10600]"
                      : "text-gray-400 group-hover:text-[#0B1424]"
                  }`}
                />

                {category.name}
              </button>
            );
          })}
        </div>
      </section>

      {/* MAIN CONTENT */}

      <section className="px-4 py-8 sm:px-6 lg:px-10 lg:py-10">
        <div className="mx-auto max-w-[1440px]">
          {/* RESULTS TOOLBAR */}

          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-xl font-extrabold sm:text-2xl">
                {activeSearch.location
                  ? `Stays in ${activeSearch.location}`
                  : "Handpicked places for you"}
              </h2>

              <p className="mt-1.5 text-sm text-gray-500">
                {filteredProperties.length} properties to explore
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => setShowFilters((value) => !value)}
                className={`inline-flex items-center gap-2 rounded-xl border px-4 py-3 text-sm font-bold transition lg:hidden ${
                  showFilters
                    ? "border-[#0B1424] bg-[#0B1424] text-white"
                    : "border-gray-200 bg-white"
                }`}
              >
                <SlidersHorizontal size={17} />
                Filters

                {activeFiltersCount > 0 && (
                  <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#E10600] px-1 text-xs text-white">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              <label className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-3 text-sm">
                <ArrowUpDown size={16} className="text-gray-500" />

                <span className="hidden text-gray-500 sm:inline">
                  Sort:
                </span>

                <select
                  value={sortBy}
                  onChange={(event) => setSortBy(event.target.value)}
                  className="max-w-[155px] bg-transparent font-semibold outline-none"
                >
                  {SORT_OPTIONS.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </label>

              <button
                type="button"
                onClick={() => setShowMap((value) => !value)}
                className="inline-flex items-center gap-2 rounded-xl bg-[#0B1424] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#172a47]"
              >
                {showMap ? (
                  <LayoutGrid size={17} />
                ) : (
                  <Map size={17} />
                )}

                {showMap ? "List view" : "Map view"}
              </button>
            </div>
          </div>

          <div className="grid items-start gap-7 lg:grid-cols-[250px_minmax(0,1fr)]">
            {/* FILTER SIDEBAR */}

            <aside
              className={`${
                showFilters ? "block" : "hidden"
              } rounded-3xl border border-gray-200 bg-white p-5 lg:sticky lg:top-5 lg:block`}
            >
              <div className="mb-6 flex items-center justify-between">
                <h2 className="flex items-center gap-2 text-lg font-extrabold">
                  <SlidersHorizontal size={19} />
                  Filters
                </h2>

                <button
                  type="button"
                  onClick={resetFilters}
                  className="flex items-center gap-1.5 text-xs font-bold text-[#E10600] hover:underline"
                >
                  <RotateCcw size={13} />
                  Reset all
                </button>
              </div>

              {/* PRICE RANGE */}

              <div className="border-b border-gray-100 pb-6">
                <FilterHeading>Price per night</FilterHeading>

                <div className="grid grid-cols-2 gap-3">
                  <label className="rounded-xl border border-gray-200 p-3">
                    <span className="block text-[11px] text-gray-500">
                      Minimum
                    </span>

                    <span className="mt-1 flex items-center gap-1 text-sm font-bold">
                      ₹
                      <input
                        type="number"
                        min="0"
                        max={maxPrice}
                        step="500"
                        value={minPrice}
                        onChange={(event) =>
                          setMinPrice(
                            Math.max(
                              0,
                              Number(event.target.value) || 0
                            )
                          )
                        }
                        className="w-full min-w-0 outline-none"
                      />
                    </span>
                  </label>

                  <label className="rounded-xl border border-gray-200 p-3">
                    <span className="block text-[11px] text-gray-500">
                      Maximum
                    </span>

                    <span className="mt-1 flex items-center gap-1 text-sm font-bold">
                      ₹
                      <input
                        type="number"
                        min={minPrice}
                        step="500"
                        value={maxPrice}
                        onChange={(event) =>
                          setMaxPrice(
                            Math.max(
                              minPrice,
                              Number(event.target.value) || 0
                            )
                          )
                        }
                        className="w-full min-w-0 outline-none"
                      />
                    </span>
                  </label>
                </div>

                <p className="mt-3 text-xs text-gray-400">
                  Set your preferred nightly budget.
                </p>
              </div>

              {/* PROPERTY TYPE */}

              <div className="border-b border-gray-100 py-6">
                <FilterHeading>Property type</FilterHeading>

                <div className="space-y-3">
                  {CATEGORIES.filter(
                    (category) => category.name !== "All stays"
                  ).map((category) => {
                    const Icon = category.icon;
                    const checked = selectedTypes.includes(
                      category.name
                    );

                    return (
                      <button
                        type="button"
                        key={category.name}
                        onClick={() => toggleType(category.name)}
                        className="flex w-full items-center justify-between gap-3 text-left"
                      >
                        <span className="flex items-center gap-3 text-sm text-gray-600">
                          <Icon size={18} className="text-gray-400" />
                          {category.name}
                        </span>

                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded border ${
                            checked
                              ? "border-[#0B1424] bg-[#0B1424] text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {checked && <Check size={13} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* BEDROOMS */}

              <div className="border-b border-gray-100 py-6">
                <FilterHeading>Bedrooms</FilterHeading>

                <div className="flex flex-wrap gap-2">
                  {["Any", "1", "2", "3", "4"].map((bedroom) => (
                    <button
                      type="button"
                      key={bedroom}
                      onClick={() => setMinBedrooms(bedroom)}
                      className={`min-w-11 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                        minBedrooms === bedroom
                          ? "border-[#0B1424] bg-[#0B1424] text-white"
                          : "border-gray-200 text-gray-600 hover:border-[#B7D8F5]"
                      }`}
                    >
                      {bedroom === "Any" ? "Any" : `${bedroom}+`}
                    </button>
                  ))}
                </div>
              </div>

              {/* GUEST RATING */}

              <div className="border-b border-gray-100 py-6">
                <FilterHeading>Guest rating</FilterHeading>

                <div className="space-y-3">
                  {[0, 4, 4.5, 4.8].map((rating) => (
                    <button
                      type="button"
                      key={rating}
                      onClick={() => setMinRating(rating)}
                      className="flex w-full items-center justify-between gap-2 text-sm"
                    >
                      <span className="flex items-center gap-2 text-gray-600">
                        {rating === 0 ? (
                          "Any rating"
                        ) : (
                          <>
                            <Star
                              size={15}
                              fill="#FFD700"
                              stroke="#D4A900"
                            />
                            {rating}+ rating
                          </>
                        )}
                      </span>

                      <span
                        className={`h-4 w-4 rounded-full border ${
                          minRating === rating
                            ? "border-[5px] border-[#0B1424]"
                            : "border-gray-300"
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              {/* AMENITIES */}

              <div className="pt-6">
                <FilterHeading>Amenities</FilterHeading>

                <div className="space-y-3">
                  {AMENITIES.map((amenity) => {
                    const Icon = amenity.icon;
                    const checked = selectedAmenities.includes(
                      amenity.name
                    );

                    return (
                      <button
                        type="button"
                        key={amenity.name}
                        onClick={() => toggleAmenity(amenity.name)}
                        className="flex w-full items-center justify-between gap-3 text-left"
                      >
                        <span className="flex items-center gap-3 text-sm text-gray-600">
                          <Icon size={17} className="text-gray-400" />
                          {amenity.name}
                        </span>

                        <span
                          className={`flex h-5 w-5 items-center justify-center rounded border ${
                            checked
                              ? "border-[#0B1424] bg-[#0B1424] text-white"
                              : "border-gray-300"
                          }`}
                        >
                          {checked && <Check size={13} />}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setShowFilters(false)}
                className="mt-6 w-full rounded-xl bg-[#0B1424] py-3 text-sm font-bold text-white lg:hidden"
              >
                Show {filteredProperties.length} stays
              </button>
            </aside>

            {/* PROPERTY GRID */}

            <div className="min-w-0">
              {showMap ? (
                <MapPreview
                  properties={filteredProperties}
                  onClose={() => setShowMap(false)}
                />
              ) : filteredProperties.length > 0 ? (
                <>
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <p className="text-sm text-gray-500">
                      Showing{" "}
                      <span className="font-bold text-[#0B1424]">
                        {filteredProperties.length}
                      </span>{" "}
                      matching stays
                    </p>

                    <span className="flex items-center gap-1.5 text-xs text-gray-500">
                      <ShieldCheck
                        size={15}
                        className="text-[#E10600]"
                      />
                      Find your next favourite
                    </span>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
                    {filteredProperties.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        saved={savedProperties.includes(property.id)}
                        onToggleSave={toggleSave}
                      />
                    ))}
                  </div>

                  <div className="mt-8 rounded-3xl border border-[#B7D8F5] bg-[#B7D8F5]/20 p-6 sm:p-8">
                    <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-center">
                      <div>
                        <h3 className="text-lg font-extrabold">
                          Your next adventure starts here.
                        </h3>

                        <p className="mt-2 max-w-lg text-sm leading-6 text-gray-600">
                          Explore different stays, compare your
                          options and find a place that fits your trip.
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={resetFilters}
                        className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-[#0B1424] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#172a47]"
                      >
                        Explore all stays
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </>
              ) : (
                <div className="rounded-3xl border border-gray-200 bg-white px-5 py-16 text-center sm:px-10">
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#B7D8F5]/40">
                    <House size={28} />
                  </div>

                  <h3 className="mt-5 text-2xl font-extrabold">
                    No stays found
                  </h3>

                  <p className="mx-auto mt-3 max-w-md text-sm leading-7 text-gray-500">
                    No properties match all your selected filters.
                    Try another destination or relax your filters.
                  </p>

                  <button
                    type="button"
                    onClick={resetFilters}
                    className="mt-6 inline-flex items-center gap-2 rounded-xl bg-[#E10600] px-6 py-3.5 text-sm font-bold text-white transition hover:bg-[#bd0500]"
                  >
                    <RotateCcw size={16} />
                    Reset filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM BANNER */}

      <section className="border-t border-gray-200 bg-white px-4 py-10 sm:px-6 lg:px-10">
        <div className="mx-auto flex max-w-[1440px] flex-col justify-between gap-5 rounded-3xl bg-[#0B1424] p-7 text-white sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#B7D8F5]">
              GRAH PRAVESH
            </p>

            <h2 className="text-2xl font-extrabold sm:text-3xl">
              Find a place that feels like home.
            </h2>

            <p className="mt-3 max-w-xl text-sm leading-6 text-gray-300">
              Discover memorable stays for your next getaway.
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex shrink-0 items-center justify-center gap-2 self-start rounded-xl bg-[#FFD700] px-5 py-3.5 text-sm font-extrabold text-[#0B1424] transition hover:bg-yellow-300 sm:self-auto"
          >
            Back to Home
            <ChevronRight size={17} />
          </Link>
        </div>
      </section>
    </main>
  );
}
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  House,
  MapPin,
  Users,
  ShieldCheck,
  Sparkles,
  Star,
  Wallet,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Waves,
  Trees,
  Building2,
  TentTree,
  Quote,
} from "lucide-react";

const categories = [
  { name: "All stays", icon: House },
  { name: "Villas", icon: Building2 },
  { name: "Apartments", icon: Building2 },
  { name: "Nature stays", icon: Trees },
  { name: "Beach stays", icon: Waves },
  { name: "Cottages", icon: TentTree },
];

const properties = [
  {
    id: 1,
    title: "Luxury Mountain Villa",
    location: "Manali, Himachal Pradesh",
    price: 8500,
    rating: 4.92,
    reviews: 128,
    guests: 6,
    category: "Villas",
    badge: "Guest favourite",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 2,
    title: "Modern Poolside Escape",
    location: "Lonavala, Maharashtra",
    price: 6200,
    rating: 4.88,
    reviews: 96,
    guests: 4,
    category: "Villas",
    badge: "Popular choice",
    image:
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 3,
    title: "Serene Forest Cottage",
    location: "Coorg, Karnataka",
    price: 4800,
    rating: 4.95,
    reviews: 84,
    guests: 3,
    category: "Cottages",
    badge: "Rare find",
    image:
      "https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=1000&q=85",
  },
  {
    id: 4,
    title: "Contemporary City Apartment",
    location: "Indore, Madhya Pradesh",
    price: 3200,
    rating: 4.81,
    reviews: 67,
    guests: 4,
    category: "Apartments",
    badge: "Great value",
    image:
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=85",
  },
];

const destinations = [
  {
    name: "Manali",
    description: "Mountain adventures",
    image:
      "https://images.unsplash.com/photo-1626621341517-bbf3d9990a23?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Goa",
    description: "Sun, sand & sea",
    image:
      "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Udaipur",
    description: "Royal experiences",
    image:
      "https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?auto=format&fit=crop&w=800&q=85",
  },
  {
    name: "Rishikesh",
    description: "Peace & nature",
    image:
      "https://images.unsplash.com/photo-1544735716-392fe2489ffa?auto=format&fit=crop&w=800&q=85",
  },
];

const benefits = [
  {
    icon: ShieldCheck,
    title: "Stays you can trust",
    description:
      "Explore clearly presented properties with useful details to help you make informed decisions.",
  },
  {
    icon: Wallet,
    title: "Options for every budget",
    description:
      "From cosy cottages to luxury villas, discover a stay that suits your travel plans.",
  },
  {
    icon: CheckCircle2,
    title: "A simpler booking journey",
    description:
      "Explore properties, compare options and organise your travel plans in one place.",
  },
];

const reviews = [
  {
    name: "Aarav Sharma",
    location: "Delhi, India",
    text: "The property was exactly what we needed for a peaceful weekend. The discovery experience felt simple and smooth.",
    initials: "AS",
  },
  {
    name: "Priya Verma",
    location: "Bhopal, India",
    text: "I loved exploring different stays and comparing the options. It made planning our family trip easier.",
    initials: "PV",
  },
  {
    name: "Rohan Mehta",
    location: "Mumbai, India",
    text: "Found a beautiful place for our getaway. The property details helped us understand the stay before booking.",
    initials: "RM",
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
  action,
}) {
  return (
    <div className="mb-8 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
      <div className="max-w-2xl">
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-[#E10600]">
          {eyebrow}
        </p>

        <h2 className="text-3xl font-extrabold tracking-tight text-[#0B1424] sm:text-4xl">
          {title}
        </h2>

        {description && (
          <p className="mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            {description}
          </p>
        )}
      </div>

      {action}
    </div>
  );
}

function PropertyCard({
  property,
  isSaved,
  onToggleSave,
}) {
  return (
    <article className="group min-w-0 overflow-hidden rounded-3xl border border-gray-100 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-[#0B1424]/10">
      <div className="relative h-60 overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
        />

        <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-2 text-xs font-bold text-[#0B1424] shadow-sm">
          {property.badge}
        </span>

        <button
          type="button"
          onClick={() => onToggleSave(property.id)}
          aria-label={
            isSaved
              ? "Remove from wishlist"
              : "Add to wishlist"
          }
          className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full backdrop-blur transition ${
            isSaved
              ? "bg-[#E10600] text-white"
              : "bg-white/90 text-[#0B1424] hover:bg-white"
          }`}
        >
          <Heart
            size={19}
            fill={isSaved ? "currentColor" : "none"}
          />
        </button>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-[#0B1424]/85 px-3 py-2 text-xs font-medium text-white backdrop-blur">
          <Users size={14} />
          Up to {property.guests} guests
        </div>
      </div>

      <div className="p-5">
        <div className="mb-3 flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-bold text-[#0B1424]">
              {property.title}
            </h3>

            <p className="mt-2 flex items-center gap-1.5 text-sm text-gray-500">
              <MapPin
                size={15}
                className="shrink-0 text-[#E10600]"
              />
              <span className="truncate">
                {property.location}
              </span>
            </p>
          </div>

          <div className="flex shrink-0 items-center gap-1 text-sm font-bold text-[#0B1424]">
            <Star
              size={15}
              fill="#FFD700"
              stroke="#D4A900"
            />
            {property.rating}
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between border-t border-gray-100 pt-4">
          <p className="text-sm text-gray-500">
            <span className="text-xl font-extrabold text-[#0B1424]">
              ₹{property.price.toLocaleString("en-IN")}
            </span>
            <span> / night</span>
          </p>

          <span className="text-xs text-gray-400">
            {property.reviews} reviews
          </span>
        </div>

        <Link
          to={`/property/${property.id}`}
          className="flex w-full items-center justify-center gap-2 rounded-xl border border-[#0B1424]/15 py-3 text-sm font-bold text-[#0B1424] transition hover:border-[#0B1424] hover:bg-[#0B1424] hover:text-white"
        >
          View property
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default function Home() {
  const navigate = useNavigate();

  const [activeCategory, setActiveCategory] =
    useState("All stays");

  const [savedProperties, setSavedProperties] =
    useState([]);

  const filteredProperties =
    activeCategory === "All stays"
      ? properties
      : activeCategory === "Nature stays"
        ? properties.filter((property) =>
            ["Cottages", "Villas"].includes(
              property.category
            )
          )
        : activeCategory === "Beach stays"
          ? []
          : properties.filter(
              (property) =>
                property.category === activeCategory
            );

  const toggleSave = (id) => {
    setSavedProperties((previous) =>
      previous.includes(id)
        ? previous.filter((savedId) => savedId !== id)
        : [...previous, id]
    );
  };

  const exploreDestination = (destination) => {
    const params = new URLSearchParams({
      location: destination,
    });

    navigate(`/explore?${params.toString()}`);
  };

  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0B1424]">
      {/* HERO BANNER — NO SEARCH BAR */}

      <section className="px-4 pb-14 pt-6 sm:px-6 lg:px-10 lg:pb-20">
        <div className="relative mx-auto min-h-[560px] max-w-[1440px] overflow-hidden rounded-[30px] bg-[#0B1424] sm:rounded-[40px] lg:min-h-[650px]">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2200&q=90"
            alt="Beautiful holiday home surrounded by nature"
            className="absolute inset-0 h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-gradient-to-r from-[#07111f]/95 via-[#07111f]/70 to-[#07111f]/15" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/60 via-transparent to-[#07111f]/10" />

          <div className="relative z-10 flex min-h-[560px] flex-col justify-center px-5 py-14 sm:px-10 lg:min-h-[650px] lg:px-16">
            <div className="max-w-3xl">
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2.5 text-xs font-semibold text-white backdrop-blur-md sm:text-sm">
                <Sparkles
                  size={16}
                  className="text-[#FFD700]"
                />
                Find a place that feels like home
              </div>

              <h1 className="max-w-3xl text-4xl font-black leading-[1.12] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Your next escape,
                <br />
                <span className="text-[#B7D8F5]">
                  your kind of place.
                </span>
              </h1>

              <p className="mt-6 max-w-xl text-sm leading-7 text-white/80 sm:text-lg sm:leading-8">
                From peaceful mountain retreats to
                unforgettable luxury stays, discover spaces
                where your best memories begin.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-white/90">
                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[#FFD700]"
                  />
                  Stays for every journey
                </span>

                <span className="flex items-center gap-2">
                  <CheckCircle2
                    size={17}
                    className="text-[#FFD700]"
                  />
                  Explore your possibilities
                </span>
              </div>

              {/* HERO BUTTONS */}

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link
                  to="/explore"
                  className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#E10600] px-7 py-4 text-sm font-bold text-white shadow-lg shadow-black/20 transition hover:-translate-y-0.5 hover:bg-[#bd0500]"
                >
                  Explore stays
                  <ArrowRight size={18} />
                </Link>

                <a
                  href="#popular-destinations"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/40 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur transition hover:bg-white/20"
                >
                  Discover destinations
                  <MapPin size={17} />
                </a>
              </div>

              {/* TRUST INDICATORS */}

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-white/85">
                <span className="flex items-center gap-2">
                  <ShieldCheck
                    size={17}
                    className="text-[#FFD700]"
                  />
                  Explore with confidence
                </span>

                <span className="flex items-center gap-2">
                  <House
                    size={17}
                    className="text-[#FFD700]"
                  />
                  Find your kind of stay
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STAY CATEGORIES */}

      <section className="px-4 pb-12 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-[1280px]">
          <div className="mb-6 flex items-end justify-between gap-4">
            <div>
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#E10600]">
                Find your vibe
              </p>

              <h2 className="text-2xl font-extrabold sm:text-3xl">
                Explore by stay type
              </h2>
            </div>

            <div className="hidden items-center gap-2 sm:flex">
              <button
                type="button"
                aria-label="Scroll categories left"
                onClick={() =>
                  document
                    .getElementById("stay-categories")
                    ?.scrollBy({
                      left: -250,
                      behavior: "smooth",
                    })
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                type="button"
                aria-label="Scroll categories right"
                onClick={() =>
                  document
                    .getElementById("stay-categories")
                    ?.scrollBy({
                      left: 250,
                      behavior: "smooth",
                    })
                }
                className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 transition hover:bg-gray-100"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div
            id="stay-categories"
            className="flex gap-3 overflow-x-auto pb-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {categories.map((category) => {
              const Icon = category.icon;

              const active =
                activeCategory === category.name;

              return (
                <button
                  key={category.name}
                  type="button"
                  onClick={() =>
                    setActiveCategory(category.name)
                  }
                  className={`flex shrink-0 items-center gap-3 rounded-2xl border px-5 py-4 transition ${
                    active
                      ? "border-[#0B1424] bg-[#0B1424] text-white shadow-lg shadow-[#0B1424]/10"
                      : "border-gray-200 bg-white text-[#0B1424] hover:border-[#B7D8F5] hover:bg-[#B7D8F5]/20"
                  }`}
                >
                  <Icon
                    size={21}
                    className={
                      active
                        ? "text-[#FFD700]"
                        : "text-[#E10600]"
                    }
                  />

                  <span className="whitespace-nowrap text-sm font-semibold">
                    {category.name}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}

      <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Handpicked for you"
            title="Stays worth travelling for."
            description="Explore inspiring places for your next weekend escape or longer holiday."
            action={
              <Link
                to="/explore"
                className="inline-flex shrink-0 items-center gap-2 self-start text-sm font-bold text-[#E10600] transition hover:gap-3 sm:self-auto"
              >
                Explore all stays
                <ArrowRight size={17} />
              </Link>
            }
          />

          {filteredProperties.length > 0 ? (
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {filteredProperties.map((property) => (
                <PropertyCard
                  key={property.id}
                  property={property}
                  isSaved={savedProperties.includes(
                    property.id
                  )}
                  onToggleSave={toggleSave}
                />
              ))}
            </div>
          ) : (
            <div className="rounded-3xl border border-dashed border-gray-300 bg-white px-6 py-14 text-center">
              <Waves
                size={35}
                className="mx-auto text-[#E10600]"
              />

              <h3 className="mt-4 text-xl font-bold">
                More stays coming soon
              </h3>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-gray-500">
                This collection is being expanded. Explore
                all available properties to discover another
                great place.
              </p>

              <Link
                to="/explore"
                className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#0B1424] px-5 py-3 text-sm font-bold text-white hover:bg-[#172a47]"
              >
                Explore stays
                <ArrowRight size={16} />
              </Link>
            </div>
          )}

          <p className="mt-5 text-xs text-gray-400">
            Demo properties and prices are illustrative.
            Connect these cards to your database before launch.
          </p>
        </div>
      </section>

      {/* POPULAR DESTINATIONS */}

      <section
        id="popular-destinations"
        className="scroll-mt-6 px-4 py-16 sm:px-6 lg:px-10 lg:py-20"
      >
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Go somewhere memorable"
            title="Popular destinations."
            description="Discover mountain adventures, coastal sunsets and peaceful retreats for your next trip."
            action={
              <Link
                to="/explore"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#E10600]"
              >
                Discover more
                <ArrowRight size={17} />
              </Link>
            }
          />

          <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            {destinations.map((destination, index) => (
              <button
                type="button"
                key={destination.name}
                onClick={() =>
                  exploreDestination(destination.name)
                }
                className={`group relative overflow-hidden rounded-3xl text-left ${
                  index % 2 === 0
                    ? "h-64 sm:h-80"
                    : "mt-6 h-64 sm:mt-10 sm:h-80"
                }`}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#07111f]/90 via-[#07111f]/10 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6">
                  <span className="mb-2 block text-xs font-medium text-white/80 sm:text-sm">
                    {destination.description}
                  </span>

                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-xl font-extrabold text-white sm:text-2xl">
                      {destination.name}
                    </h3>

                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-[#0B1424] transition group-hover:bg-[#FFD700]">
                      <ArrowUpRight size={18} />
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* WHY GRAH PRAVESH */}

      <section className="bg-[#0B1424] px-4 py-16 text-white sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-semibold text-[#B7D8F5]">
              <Sparkles size={15} />
              The Grah Pravesh difference
            </span>

            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              Travel better.
              <span className="block text-[#B7D8F5]">
                Stay your way.
              </span>
            </h2>

            <p className="mt-4 text-sm leading-7 text-white/60 sm:text-base">
              Finding a place to stay should be part of the
              excitement, not another thing to worry about.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <article
                  key={benefit.title}
                  className="rounded-3xl border border-white/10 bg-white/[0.04] p-7 transition hover:border-[#B7D8F5]/40 hover:bg-white/[0.07] sm:p-8"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                      index === 1
                        ? "bg-[#FFD700]/15 text-[#FFD700]"
                        : "bg-[#B7D8F5]/15 text-[#B7D8F5]"
                    }`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-6 text-xl font-bold">
                    {benefit.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-white/60">
                    {benefit.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* BECOME A HOST */}

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="relative mx-auto max-w-[1280px] overflow-hidden rounded-[32px] bg-[#B7D8F5]">
          <div className="absolute -right-16 -top-24 h-72 w-72 rounded-full border-[40px] border-white/25" />

          <div className="absolute -bottom-28 right-1/3 h-72 w-72 rounded-full bg-white/20 blur-2xl" />

          <div className="relative grid items-center gap-10 px-6 py-10 sm:px-10 sm:py-14 lg:grid-cols-[1.1fr_0.9fr] lg:px-16 lg:py-16">
            <div>
              <span className="inline-flex items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-xs font-bold text-[#0B1424]">
                <House size={15} />
                For property owners
              </span>

              <h2 className="mt-6 max-w-xl text-3xl font-black leading-tight tracking-tight text-[#0B1424] sm:text-4xl lg:text-5xl">
                Your property could be someone's next favourite stay.
              </h2>

              <p className="mt-5 max-w-lg text-sm leading-7 text-[#0B1424]/75 sm:text-base">
                Share your space with travellers, showcase
                what makes it special and take the first step
                towards hosting.
              </p>

              <Link
                to="/become-host"
                className="mt-7 inline-flex items-center gap-3 rounded-xl bg-[#0B1424] px-6 py-4 text-sm font-bold text-white transition hover:bg-[#172a47]"
              >
                Become a host
                <ArrowRight size={18} />
              </Link>
            </div>

            <div className="relative min-h-[280px] overflow-hidden rounded-3xl sm:min-h-[350px]">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
                alt="Beautiful property interior"
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1424]/60 to-transparent" />

              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/30 bg-white/90 p-4 backdrop-blur-md sm:bottom-6 sm:left-6 sm:right-6 sm:p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B7D8F5] text-[#0B1424]">
                    <House size={22} />
                  </div>

                  <div>
                    <p className="font-bold text-[#0B1424]">
                      Make room for new possibilities.
                    </p>

                    <p className="mt-1 text-xs text-gray-500">
                      Your space. Your hosting journey.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GUEST REVIEWS */}

      <section className="bg-[#F7F9FC] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px]">
          <SectionHeading
            eyebrow="Experiences that matter"
            title="Stories from fellow travellers."
            description="Every great trip begins with finding a place that feels right."
          />

          <div className="grid gap-5 md:grid-cols-3">
            {reviews.map((review) => (
              <article
                key={review.name}
                className="rounded-3xl border border-gray-100 bg-white p-6 sm:p-8"
              >
                <Quote
                  size={28}
                  className="text-[#B7D8F5]"
                />

                <div className="mt-5 flex gap-1 text-[#D4A900]">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      size={16}
                      fill="currentColor"
                      strokeWidth={1}
                    />
                  ))}
                </div>

                <p className="mt-4 text-sm leading-7 text-gray-600">
                  “{review.text}”
                </p>

                <div className="mt-7 flex items-center gap-3 border-t border-gray-100 pt-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#B7D8F5] text-sm font-extrabold text-[#0B1424]">
                    {review.initials}
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-[#0B1424]">
                      {review.name}
                    </h3>

                    <p className="mt-1 text-xs text-gray-500">
                      {review.location}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-5 text-center text-xs text-gray-400">
            Sample testimonials for the design preview.
            Replace them with genuine guest reviews before launch.
          </p>
        </div>
      </section>

      {/* FINAL CTA */}

      <section className="px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
        <div className="mx-auto max-w-[1280px] rounded-[30px] bg-[#0B1424] px-6 py-12 text-center sm:px-12 sm:py-16">
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-[#FFD700]">
            <Sparkles size={17} />
            Your next chapter starts somewhere
          </span>

          <h2 className="mx-auto mt-5 max-w-3xl text-3xl font-black leading-tight text-white sm:text-5xl">
            A little change of place can make a big difference.
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/60 sm:text-base">
            Take a break, explore somewhere new and find
            a stay that makes your next journey memorable.
          </p>

          <Link
            to="/explore"
            className="mt-8 inline-flex items-center gap-3 rounded-xl bg-[#E10600] px-7 py-4 text-sm font-bold text-white transition hover:bg-[#bd0500]"
          >
            Find your stay
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </main>
  );
}
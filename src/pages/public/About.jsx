import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  Heart,
  ShieldCheck,
  Sparkles,
  Users,
  Home,
  MapPin,
  CheckCircle2,
  Star,
  Compass,
  HandHeart,
  Quote,
} from "lucide-react";

const values = [
  {
    icon: Heart,
    number: "01",
    title: "Feel at home",
    description:
      "Every journey deserves a place where you can relax, recharge, and feel completely at home.",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Trust comes first",
    description:
      "We believe great stays begin with transparency, thoughtful experiences, and peace of mind.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "Stay extraordinary",
    description:
      "From peaceful escapes to memorable adventures, we make room for experiences worth remembering.",
  },
];

const steps = [
  {
    number: "01",
    title: "Discover",
    description:
      "Explore unique stays, hidden gems, and destinations that match your travel style.",
  },
  {
    number: "02",
    title: "Book with confidence",
    description:
      "Find the right place for your trip and plan your stay with clarity and convenience.",
  },
  {
    number: "03",
    title: "Make memories",
    description:
      "Arrive, settle in, and turn an ordinary trip into a meaningful experience.",
  },
];

const highlights = [
  { icon: Home, label: "Unique places to stay" },
  { icon: ShieldCheck, label: "Trust-focused experience" },
  { icon: Heart, label: "Made for memorable trips" },
];

export default function About() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-[#0B1424]">
      {/* HERO SECTION */}
      <section className="relative isolate overflow-hidden bg-[#0B1424]">
        {/* Decorative background */}
        <div className="absolute -right-40 -top-40 -z-10 h-[500px] w-[500px] rounded-full bg-[#B7D8F5]/10 blur-3xl" />
        <div className="absolute -bottom-40 -left-20 -z-10 h-[400px] w-[400px] rounded-full bg-[#E10600]/10 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:px-12 lg:py-28">
          {/* Hero Content */}
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-[#B7D8F5]">
              <Sparkles size={15} className="text-[#FFD700]" />
              More than just a place to stay
            </div>

            <h1 className="max-w-2xl text-4xl font-bold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-7xl">
              Every stay has a story.
              <span className="mt-2 block text-[#B7D8F5]">
                Let's make yours unforgettable.
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-white/65 sm:text-lg">
              Welcome to Grah Pravesh — a place to discover stays that feel
              special, explore destinations that inspire you, and make every
              journey a little more meaningful.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/explore"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-[#E10600] px-6 py-4 font-semibold text-white shadow-lg shadow-red-950/20 transition hover:-translate-y-0.5 hover:bg-red-700"
              >
                Explore stays
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>

              <a
                href="#our-story"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-6 py-4 font-semibold text-white transition hover:border-white/40 hover:bg-white/5"
              >
                Discover our story
                <ArrowUpRight size={18} />
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-4 text-sm text-white/65">
              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#FFD700]" />
                Thoughtful stays
              </span>

              <span className="flex items-center gap-2">
                <CheckCircle2 size={17} className="text-[#FFD700]" />
                Memorable journeys
              </span>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative mx-auto w-full max-w-xl lg:ml-auto">
            <div className="absolute -right-4 -top-4 h-28 w-28 rounded-3xl border border-[#FFD700]/30 sm:-right-6 sm:-top-6" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=85"
                alt="Beautiful holiday villa surrounded by nature"
                className="h-[360px] w-full rounded-[1.5rem] object-cover sm:h-[480px]"
              />

              <div className="absolute inset-x-5 bottom-5 rounded-2xl border border-white/20 bg-[#0B1424]/85 p-5 backdrop-blur-xl sm:inset-x-7 sm:bottom-7">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#FFD700]/15 text-[#FFD700]">
                    <Compass size={24} />
                  </div>

                  <div>
                    <p className="text-sm text-white/60">
                      Your next adventure
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-white">
                      Starts with a stay.
                    </h3>
                  </div>

                  <ArrowUpRight
                    size={22}
                    className="ml-auto shrink-0 text-[#FFD700]"
                  />
                </div>
              </div>
            </div>

            <div className="absolute -bottom-5 -left-3 hidden rounded-2xl border border-gray-100 bg-white p-4 shadow-xl sm:block md:-left-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#B7D8F5]/40 text-[#0B1424]">
                  <Heart size={21} />
                </div>
                <div>
                  <p className="text-sm font-bold text-[#0B1424]">
                    Made for memories
                  </p>
                  <p className="mt-1 text-xs text-gray-500">
                    Every journey matters
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section id="our-story" className="scroll-mt-8 bg-white py-20 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-2 lg:items-center lg:gap-20 lg:px-12">
          <div>
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#E10600]">
              Our story
            </p>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Travel is about how a place makes you feel.
            </h2>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-600">
              <p>
                A great journey is about more than reaching a destination. It
                is about the quiet mornings, the people you meet, and the
                little moments that stay with you long after you return home.
              </p>

              <p>
                Grah Pravesh is built around a simple idea: finding the right
                place should be an exciting part of the journey, not a
                stressful one.
              </p>

              <p>
                We are creating a platform where travellers can discover
                interesting stays and hosts can share spaces that make
                someone's journey special.
              </p>
            </div>

            <Link
              to="/explore"
              className="mt-8 inline-flex items-center gap-2 font-bold text-[#0B1424] transition hover:text-[#E10600]"
            >
              Find your next stay
              <ArrowRight size={18} />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:gap-5">
            <div className="space-y-4 pt-10 sm:space-y-5 sm:pt-14">
              <img
                src="https://images.unsplash.com/photo-1449158743715-0a90ebb6d2d8?auto=format&fit=crop&w=700&q=80"
                alt="A peaceful home surrounded by greenery"
                loading="lazy"
                className="h-48 w-full rounded-2xl object-cover sm:h-64"
              />

              <div className="rounded-2xl bg-[#B7D8F5]/35 p-5 sm:p-7">
                <MapPin size={25} className="text-[#0B1424]" />

                <h3 className="mt-4 text-lg font-bold sm:text-xl">
                  Discover more
                </h3>

                <p className="mt-2 text-sm leading-6 text-gray-600">
                  Find places that make you want to explore.
                </p>
              </div>
            </div>

            <div className="space-y-4 sm:space-y-5">
              <div className="rounded-2xl bg-[#0B1424] p-5 text-white sm:p-7">
                <HandHeart size={27} className="text-[#FFD700]" />

                <h3 className="mt-4 text-lg font-bold sm:text-xl">
                  Feel welcome
                </h3>

                <p className="mt-2 text-sm leading-6 text-white/60">
                  Because the right stay can change your whole trip.
                </p>
              </div>

              <img
                src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=700&q=80"
                alt="Warm and comfortable modern holiday accommodation"
                loading="lazy"
                className="h-56 w-full rounded-2xl object-cover sm:h-72"
              />
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="bg-[#F6F8FB] py-20 sm:py-24">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#E10600]">
              What matters to us
            </p>

            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Built around the way you travel.
            </h2>

            <p className="mt-5 leading-7 text-gray-600">
              Every detail starts with one question: how can we make your
              journey feel better?
            </p>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {values.map((value) => {
              const Icon = value.icon;

              return (
                <article
                  key={value.number}
                  className="group rounded-3xl border border-gray-200/80 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:border-[#B7D8F5] hover:shadow-xl hover:shadow-[#0B1424]/5 sm:p-9"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#B7D8F5]/35 text-[#0B1424] transition group-hover:bg-[#0B1424] group-hover:text-white">
                      <Icon size={26} />
                    </div>

                    <span className="text-sm font-bold tracking-widest text-gray-300">
                      {value.number}
                    </span>
                  </div>

                  <h3 className="mt-8 text-xl font-bold sm:text-2xl">
                    {value.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-gray-600 sm:text-base">
                    {value.description}
                  </p>

                  <div className="mt-7 h-1 w-12 rounded-full bg-[#FFD700] transition-all duration-300 group-hover:w-20" />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-white py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#E10600]">
                Your journey, simplified
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Three steps to your next great stay.
              </h2>

              <p className="mt-6 max-w-lg leading-8 text-gray-600">
                From the first search to the moment you arrive, we want your
                stay-planning experience to feel simple, intuitive, and
                enjoyable.
              </p>

              <div className="mt-8 overflow-hidden rounded-3xl">
                <img
                  src="https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1000&q=85"
                  alt="A peaceful cabin surrounded by trees"
                  loading="lazy"
                  className="h-64 w-full object-cover transition duration-700 hover:scale-105 sm:h-80"
                />
              </div>
            </div>

            <div className="flex flex-col justify-center">
              {steps.map((step, index) => (
                <div
                  key={step.number}
                  className={`relative flex gap-5 py-7 sm:gap-7 ${
                    index !== steps.length - 1
                      ? "border-b border-gray-200"
                      : ""
                  }`}
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#0B1424] text-sm font-bold tracking-wider text-[#FFD700] sm:h-16 sm:w-16">
                    {step.number}
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold sm:text-2xl">
                      {step.title}
                    </h3>

                    <p className="mt-3 max-w-md text-sm leading-7 text-gray-600 sm:text-base">
                      {step.description}
                    </p>
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="mt-1 shrink-0 text-gray-400"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* OUR PROMISE */}
      <section className="relative overflow-hidden bg-[#0B1424] py-20 sm:py-24">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#B7D8F5]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="mb-4 text-sm font-bold uppercase tracking-[0.22em] text-[#FFD700]">
                Our promise
              </p>

              <h2 className="text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
                A better stay begins with a better experience.
              </h2>

              <p className="mt-6 max-w-xl leading-8 text-white/65">
                We want Grah Pravesh to be a place where discovering
                accommodation feels effortless, where hosts feel valued, and
                where every journey has the potential to become a beautiful
                memory.
              </p>

              <div className="mt-8 space-y-4">
                {highlights.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm font-medium text-white/85 sm:text-base"
                    >
                      <Icon size={20} className="shrink-0 text-[#FFD700]" />
                      {item.label}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative rounded-3xl border border-white/10 bg-white/[0.04] p-7 sm:p-10">
              <Quote size={38} className="text-[#FFD700]" />

              <p className="mt-6 text-2xl font-semibold leading-relaxed text-white sm:text-3xl">
                "The best journeys don't just take you somewhere. They make
                you feel something."
              </p>

              <div className="mt-8 h-px bg-white/15" />

              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#B7D8F5]/15 text-[#B7D8F5]">
                  <Star size={23} />
                </div>

                <div>
                  <p className="font-semibold text-white">The Grah Pravesh</p>
                  <p className="mt-1 text-sm text-white/50">
                    Travel with meaning
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOST SECTION */}
      <section className="bg-[#F6F8FB] py-20 sm:py-24">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:px-12">
          <div className="overflow-hidden rounded-3xl">
            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
              alt="A beautifully designed home ready to welcome guests"
              loading="lazy"
              className="h-72 w-full object-cover sm:h-[420px]"
            />
          </div>

          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#B7D8F5]/40 px-4 py-2 text-sm font-semibold text-[#0B1424]">
              <Users size={17} />
              For property owners
            </div>

            <h2 className="text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
              Your space could be someone's favourite place.
            </h2>

            <p className="mt-6 leading-8 text-gray-600">
              Have a beautiful property, a cosy apartment, or a peaceful
              getaway? Share your space with travellers looking for their next
              memorable experience.
            </p>

            <p className="mt-4 leading-8 text-gray-600">
              We're building tools to help hosts showcase their properties,
              manage bookings, and welcome guests with confidence.
            </p>

            <Link
              to="/become-host"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#0B1424] px-6 py-4 font-semibold text-white transition hover:bg-[#152640]"
            >
              Become a host
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-white px-5 py-20 sm:px-8 sm:py-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#B7D8F5]/35 px-6 py-14 text-center sm:px-12 sm:py-20">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full border-[35px] border-white/30" />

          <div className="absolute -bottom-20 -left-10 h-48 w-48 rounded-full border-[35px] border-white/30" />

          <div className="relative mx-auto max-w-2xl">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0B1424] text-[#FFD700]">
              <Compass size={28} />
            </div>

            <h2 className="mt-7 text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              Your next chapter starts somewhere.
            </h2>

            <p className="mx-auto mt-5 max-w-xl leading-7 text-gray-700">
              Find a place that inspires you, discover somewhere new, and make
              your next journey count.
            </p>

            <Link
              to="/explore"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-[#E10600] px-7 py-4 font-semibold text-white shadow-lg shadow-red-950/10 transition hover:-translate-y-0.5 hover:bg-red-700"
            >
              Find your stay
              <ArrowRight
                size={18}
                className="transition-transform group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
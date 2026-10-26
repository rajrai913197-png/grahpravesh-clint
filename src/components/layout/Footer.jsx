import { useState } from "react";
import { Link } from "react-router-dom";
import {
  House,
  MapPin,
  ArrowUpRight,
  Instagram,
  Facebook,
  Twitter,
  Youtube,
  Mail,
  Phone,
  Heart,
  ShieldCheck,
  ArrowRight,
  Globe,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();

    if (!email.trim()) return;

    // Connect this to your backend/newsletter API later.
    setSubscribed(true);
    setEmail("");
  };

  const footerLinks = {
    Explore: [
      { label: "Discover Stays", to: "/explore" },
      { label: "Popular Destinations", to: "/explore" },
      { label: "Unique Homes", to: "/explore" },
      { label: "Weekend Getaways", to: "/explore" },
    ],
    "For Hosts": [
      { label: "Become a Host", to: "/become-host" },
      { label: "List Your Property", to: "/become-host" },
      { label: "Host Resources", to: "/help" },
      { label: "Hosting Guidelines", to: "/help" },
    ],
    "About Us": [
      { label: "Our Story", to: "/about" },
      { label: "Contact Us", to: "/contact" },
      { label: "Help Centre", to: "/help" },
      { label: "FAQs", to: "/help" },
    ],
  };

  return (
    <footer className="relative overflow-hidden bg-[#0b1424] text-white">
      {/* Decorative Background */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#b7d8f5]/10 blur-[100px]" />
      <div className="pointer-events-none absolute -right-20 top-0 h-80 w-80 rounded-full bg-[#ffd700]/[0.07] blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Newsletter Section */}
        <div className="grid gap-8 border-b border-white/10 py-12 md:grid-cols-2 md:items-center md:py-16">
          <div>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#ffd700]/30 bg-[#ffd700]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#ffd700]">
              <Mail size={14} />
              The Grah Pravesh Edit
            </span>

            <h2 className="max-w-xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl">
              Find your next
              <span className="block text-[#b7d8f5]">
                favourite place.
              </span>
            </h2>

            <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
              Get inspiring stays, hidden gems and exclusive travel updates
              delivered straight to your inbox.
            </p>
          </div>

          <div className="md:justify-self-end md:w-full md:max-w-md">
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-white/[0.05] p-3 sm:flex-row"
            >
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>

              <input
                id="footer-email"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setSubscribed(false);
                }}
                placeholder="Enter your email address"
                required
                className="min-w-0 flex-1 bg-transparent px-3 py-3 text-sm text-white outline-none placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#ffd700] px-5 py-3 text-sm font-bold text-[#0b1424] transition hover:bg-white"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>

            {subscribed ? (
              <p role="status" className="mt-3 text-sm text-[#b7d8f5]">
                Thanks! Newsletter signup UI is complete. Connect an API to
                save your subscription.
              </p>
            ) : (
              <p className="mt-3 text-xs leading-5 text-slate-500">
                By subscribing, you agree to receive travel updates from us.
              </p>
            )}
          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-5 lg:gap-8 lg:py-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="group inline-flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#b7d8f5] text-[#0b1424] shadow-lg shadow-[#b7d8f5]/10 transition group-hover:rotate-[-5deg]">
                <House size={25} strokeWidth={2.3} />
              </span>

              <span>
                <span className="block text-xl font-extrabold tracking-tight">
                  Grah <span className="text-[#b7d8f5]">Pravesh</span>
                </span>
                <span className="mt-0.5 block text-[10px] font-medium uppercase tracking-[0.24em] text-[#ffd700]">
                  Stay somewhere special
                </span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              More than a stay. A place to feel at home. Discover beautiful
              spaces, meaningful journeys and memorable experiences with
              Grah Pravesh.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#b7d8f5]/50 hover:bg-[#b7d8f5] hover:text-[#0b1424]"
              >
                <Instagram size={18} />
              </a>

              <a
                href="https://www.facebook.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#b7d8f5]/50 hover:bg-[#b7d8f5] hover:text-[#0b1424]"
              >
                <Facebook size={18} />
              </a>

              <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="X"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#b7d8f5]/50 hover:bg-[#b7d8f5] hover:text-[#0b1424]"
              >
                <Twitter size={18} />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition hover:border-[#b7d8f5]/50 hover:bg-[#b7d8f5] hover:text-[#0b1424]"
              >
                <Youtube size={18} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="mb-5 text-sm font-bold tracking-wide text-white">
                {heading}
              </h3>

              <ul className="space-y-4">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.to}
                      className="group inline-flex items-center gap-1 text-sm text-slate-400 transition hover:text-[#b7d8f5]"
                    >
                      {link.label}
                      <ArrowUpRight
                        size={13}
                        className="opacity-0 transition group-hover:translate-x-0.5 group-hover:opacity-100"
                      />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Trust Strip */}
        <div className="grid gap-4 border-y border-white/10 py-6 sm:grid-cols-3 sm:gap-6">
          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#b7d8f5]/10 text-[#b7d8f5]">
              <ShieldCheck size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Secure Booking
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Built with your safety in mind
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#ffd700]/10 text-[#ffd700]">
              <MapPin size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Stays Worth Exploring
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Discover places to remember
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-red-500/10 text-red-400">
              <Heart size={20} />
            </span>
            <div>
              <p className="text-sm font-semibold text-white">
                Made for Every Journey
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Your next story starts here
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 py-7 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs leading-6 text-slate-500">
            © {new Date().getFullYear()} Grah Pravesh. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-slate-400">
            <Link
              to="/privacy"
              className="transition hover:text-white"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </Link>

            <Link
              to="/contact"
              className="transition hover:text-white"
            >
              Contact
            </Link>

            <span className="inline-flex items-center gap-1.5">
              <Globe size={14} />
              India · English
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
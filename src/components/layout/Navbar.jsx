import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  House,
  Search,
  MapPin,
  CalendarDays,
  Users,
  Menu,
  X,
  Globe,
  Building2,
  CircleUserRound,
  Heart,
  BriefcaseBusiness,
  LogIn,
  UserPlus,
  Headset,
  LogOut,
  UserRound,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileMenuOpen, setProfileMenuOpen] = useState(false);
  const [location, setLocation] = useState("");
  const [checkIn, setCheckIn] = useState("");
  const [guests, setGuests] = useState("2");

  // Authentication will be connected through AuthContext later.
  const user = null;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Explore Stays", path: "/explore" },
    { name: "About Us", path: "/about" },
    { name: "Help & Support", path: "/contact" },
  ];

  const closeMenus = () => {
    setMobileMenuOpen(false);
    setProfileMenuOpen(false);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams();

    if (location.trim()) params.set("location", location.trim());
    if (checkIn) params.set("checkIn", checkIn);
    if (guests) params.set("guests", guests);

    setMobileMenuOpen(false);

    navigate(`/explore?${params.toString()}`);
  };

  return (
    <header className="relative top-0 z-50 w-full bg-white">
      {/* Announcement Bar */}
      <div className="flex min-h-[36px] flex-wrap items-center justify-center gap-x-2 gap-y-1 bg-[#B7D8F5] px-3 py-2 text-center text-[11px] font-semibold text-[#0B1424] sm:text-xs">
        <span>Find your perfect stay, wherever life takes you.</span>

        <Link
          to="/explore"
          onClick={closeMenus}
          className="inline-flex items-center gap-1 font-bold text-[#E10600] transition hover:text-[#0B1424]"
        >
          Explore stays <ArrowRight size={13} />
        </Link>
      </div>

      {/* Main Navigation */}
      <div className="border-b border-[#0B1424]/[0.08] bg-white">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8 xl:px-10">
          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenus}
            className="group flex min-w-0 shrink-0 items-center gap-2"
          >
            <span className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#E10600] text-white shadow-sm transition group-hover:-translate-y-0.5">
              <House size={22} strokeWidth={2.4} />

              <span className="absolute right-1 top-1 h-2 w-2 rounded-full border border-white bg-[#FFD700]" />
            </span>

            <span className="min-w-0 leading-tight">
              <span className="block whitespace-nowrap text-[17px] font-extrabold tracking-tight text-[#0B1424] sm:text-xl">
                Grah<span className="text-[#E10600]">Pravesh</span>
              </span>

              <span className="mt-1 hidden text-[8px] font-bold uppercase tracking-[0.18em] text-slate-500 sm:block">
                Stay. Explore. Experience.
              </span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-4 lg:flex xl:gap-6">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `relative whitespace-nowrap py-2 text-xs font-semibold transition xl:text-[13px] ${
                    isActive
                      ? "text-[#E10600] after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-[#E10600]"
                      : "text-[#0B1424]/80 hover:text-[#E10600]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex shrink-0 items-center gap-1 sm:gap-2">
            {!user && (
              <Link
                to="/become-host"
                className="hidden items-center gap-1.5 whitespace-nowrap rounded-full px-2 py-2 text-xs font-bold text-[#0B1424] transition hover:bg-[#F0F7FD] hover:text-[#E10600] xl:flex"
              >
                <Building2 size={16} />
                Become a Host
              </Link>
            )}

            {/* Language Button */}
            <button
              type="button"
              aria-label="Language settings"
              className="hidden h-9 w-9 items-center justify-center rounded-full text-[#0B1424] transition hover:bg-[#F0F7FD] hover:text-[#E10600] sm:flex"
            >
              <Globe size={18} />
            </button>

            {/* Profile Dropdown */}
            <div className="relative">
              <button
                type="button"
                aria-label="Open profile menu"
                aria-expanded={profileMenuOpen}
                onClick={() => {
                  setProfileMenuOpen((prev) => !prev);
                  setMobileMenuOpen(false);
                }}
                className="flex h-10 items-center gap-2 rounded-full border border-[#0B1424]/10 bg-white py-1 pl-2.5 pr-1.5 transition hover:border-[#B7D8F5] hover:bg-[#F0F7FD] sm:pl-3"
              >
                {profileMenuOpen ? (
                  <X size={17} className="text-[#0B1424]" />
                ) : (
                  <Menu size={18} className="text-[#0B1424]" />
                )}

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#B7D8F5] text-[#0B1424]">
                  <CircleUserRound size={21} />
                </span>
              </button>

              {profileMenuOpen && (
                <div className="absolute right-0 top-[calc(100%+12px)] z-50 w-[min(280px,calc(100vw-24px))] overflow-hidden rounded-2xl border border-[#0B1424]/10 bg-white p-2 shadow-xl shadow-[#0B1424]/10">
                  {!user ? (
                    <>
                      <div className="border-b border-slate-100 px-4 py-3">
                        <p className="text-sm font-bold text-[#0B1424]">
                          Welcome to Grah Pravesh
                        </p>

                        <p className="mt-1 text-xs text-slate-500">
                          Sign in to plan your next stay.
                        </p>
                      </div>

                      <Link
                        to="/login"
                        onClick={closeMenus}
                        className="mt-2 flex items-center gap-3 rounded-xl bg-[#E10600] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#C10500]"
                      >
                        <LogIn size={17} />
                        Log in
                      </Link>

                      <Link
                        to="/register"
                        onClick={closeMenus}
                        className="mt-1 flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#0B1424] transition hover:bg-[#F0F7FD]"
                      >
                        <UserPlus size={17} />
                        Create an account
                      </Link>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/myprofile"
                        onClick={closeMenus}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#0B1424] hover:bg-[#F0F7FD]"
                      >
                        <UserRound size={17} />
                        My Profile
                      </Link>

                      <Link
                        to="/my-bookings"
                        onClick={closeMenus}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#0B1424] hover:bg-[#F0F7FD]"
                      >
                        <BriefcaseBusiness size={17} />
                        My Bookings
                      </Link>

                      <Link
                        to="/wishlist"
                        onClick={closeMenus}
                        className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#0B1424] hover:bg-[#F0F7FD]"
                      >
                        <Heart size={17} />
                        Wishlist
                      </Link>

                      <button
                        type="button"
                        onClick={closeMenus}
                        className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-sm font-semibold text-[#E10600] hover:bg-red-50"
                      >
                        <LogOut size={17} />
                        Log out
                      </button>
                    </>
                  )}

                  <div className="mt-1 border-t border-slate-100 pt-1">
                    <Link
                      to="/contact"
                      onClick={closeMenus}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-slate-600 transition hover:bg-[#F0F7FD] hover:text-[#0B1424]"
                    >
                      <Headset size={17} />
                      Help & Support
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Mobile Menu Toggle */}
            <button
              type="button"
              aria-label={
                mobileMenuOpen ? "Close navigation" : "Open navigation"
              }
              aria-expanded={mobileMenuOpen}
              onClick={() => {
                setMobileMenuOpen((prev) => !prev);
                setProfileMenuOpen(false);
              }}
              className="flex h-10 w-10 items-center justify-center rounded-full text-[#0B1424] transition hover:bg-[#F0F7FD] lg:hidden"
            >
              {mobileMenuOpen ? <X size={21} /> : <Menu size={21} />}
            </button>
          </div>
        </div>

        {/* Responsive Search Bar
            Mobile: hides when hamburger menu is open.
            Desktop: always visible. */}
        <div
          className={`border-t border-[#0B1424]/[0.05] px-3 py-3 sm:px-6 lg:py-4 ${
            mobileMenuOpen ? "hidden lg:block" : "block"
          }`}
        >
          <form
            onSubmit={handleSearch}
            className="mx-auto grid w-full max-w-3xl grid-cols-1 gap-1.5 rounded-2xl border border-[#0B1424]/10 bg-white p-2 shadow-[0_5px_25px_rgba(11,20,36,0.06)] transition focus-within:border-[#B7D8F5] sm:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)_minmax(0,0.8fr)_48px] sm:items-center sm:gap-0 sm:rounded-full sm:py-1.5 sm:pl-3 sm:pr-2"
          >
            {/* Location */}
            <label className="flex min-w-0 items-center gap-2.5 rounded-xl px-3 py-2.5 transition hover:bg-[#F0F7FD] sm:px-2 sm:py-2">
              <MapPin size={18} className="shrink-0 text-[#E10600]" />

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold text-[#0B1424]">
                  Location
                </span>

                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  placeholder="Where do you want to go?"
                  aria-label="Destination"
                  className="mt-1 block w-full min-w-0 truncate border-0 bg-transparent p-0 text-xs leading-5 text-[#0B1424] outline-none placeholder:text-slate-400 focus:ring-0"
                />
              </span>
            </label>

            {/* Check-in */}
            <label className="flex min-w-0 items-center gap-2.5 rounded-xl px-3 py-2.5 transition hover:bg-[#F0F7FD] sm:border-l sm:border-[#0B1424]/10 sm:px-3 sm:py-2">
              <CalendarDays size={18} className="shrink-0 text-[#E10600]" />

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold text-[#0B1424]">
                  Check-in
                </span>

                <input
                  type="date"
                  value={checkIn}
                  min={new Date().toLocaleDateString("en-CA")}
                  onChange={(e) => setCheckIn(e.target.value)}
                  aria-label="Check-in date"
                  className="mt-1 block w-full min-w-0 border-0 bg-transparent p-0 text-xs leading-5 text-slate-500 outline-none focus:ring-0"
                />
              </span>
            </label>

            {/* Guests */}
            <label className="flex min-w-0 items-center gap-2.5 rounded-xl px-3 py-2.5 transition hover:bg-[#F0F7FD] sm:border-l sm:border-[#0B1424]/10 sm:px-3 sm:py-2">
              <Users size={18} className="shrink-0 text-[#E10600]" />

              <span className="min-w-0 flex-1">
                <span className="block text-[11px] font-bold text-[#0B1424]">
                  Guests
                </span>

                <select
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  aria-label="Number of guests"
                  className="mt-1 block w-full min-w-0 cursor-pointer border-0 bg-transparent p-0 text-xs leading-5 text-slate-500 outline-none focus:ring-0"
                >
                  <option value="1">1 guest</option>
                  <option value="2">2 guests</option>
                  <option value="3">3 guests</option>
                  <option value="4">4 guests</option>
                  <option value="5">5 guests</option>
                  <option value="6">6+ guests</option>
                </select>
              </span>
            </label>

            {/* Search Button */}
            <button
              type="submit"
              aria-label="Search stays"
              className="flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-[#E10600] text-white transition hover:bg-[#C10500] active:scale-[0.99] sm:h-11 sm:w-11 sm:rounded-full"
            >
              <Search size={19} strokeWidth={2.5} />
              <span className="text-sm font-bold sm:hidden">Search stays</span>
            </button>
          </form>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="absolute left-0 right-0 top-full z-40 border-t border-[#0B1424]/10 bg-white px-4 pb-5 pt-3 shadow-xl lg:hidden">
          <nav className="mx-auto max-w-7xl">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-semibold transition ${
                    isActive
                      ? "bg-[#F0F7FD] text-[#E10600]"
                      : "text-[#0B1424] hover:bg-[#F0F7FD]"
                  }`
                }
              >
                {link.name}
                <ArrowRight size={16} />
              </NavLink>
            ))}

            <Link
              to="/become-host"
              onClick={closeMenus}
              className="mt-2 flex items-center gap-3 rounded-xl border border-[#B7D8F5] bg-[#F0F7FD] px-4 py-3.5 text-sm font-bold text-[#0B1424] transition hover:border-[#FFD700]"
            >
              <Building2 size={18} />
              Become a Host
            </Link>

            <Link
              to="/contact"
              onClick={closeMenus}
              className="mt-2 flex items-center gap-3 rounded-xl px-4 py-3.5 text-sm font-semibold text-slate-600 transition hover:bg-[#F0F7FD]"
            >
              <Headset size={18} />
              Help & Support
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
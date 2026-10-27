import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Eye,
  EyeOff,
  Home,
  Mail,
  ShieldCheck,
  UserRound,
  Building2,
  Sparkles,
  MapPin,
  KeyRound,
} from "lucide-react";

const Register = () => {
  const [role, setRole] = useState("guest");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { fullName, email, password, confirmPassword } = formData;

    if (
      !fullName.trim() ||
      !email.trim() ||
      !password ||
      !confirmPassword
    ) {
      setError("Please fill in all fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 8) {
      setError("Password must contain at least 8 characters.");
      return;
    }

    if (!/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
      setError("Include at least one uppercase letter and one number.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");

    // Frontend validation only.
    // Connect the backend API here when it is ready.
    console.log("Registration details:", {
      fullName: fullName.trim(),
      email: email.trim(),
      role,
      password,
    });

    setSuccess(
      "Your details are valid! Backend integration is the next step."
    );
  };

  const inputClass =
    "w-full min-w-0 rounded-xl border border-slate-300 bg-slate-50/50 py-3.5 pl-11 pr-11 text-sm font-medium text-[#172033] placeholder:font-normal placeholder:text-slate-400 outline-none transition-all duration-200 hover:border-slate-400 focus:border-[#E50909] focus:bg-white focus:ring-4 focus:ring-[#E50909]/10";

  return (
    <main className="min-h-screen bg-white font-sans text-[#172033]">
      {/* Announcement bar */}
      <div className="flex min-h-9 items-center justify-center bg-[#B8D9F2] px-3 py-2 text-center text-[10px] font-semibold text-[#172033] sm:text-xs">
        <Sparkles size={14} className="mr-2 shrink-0 text-[#E50909]" />

        <span>Find your perfect stay, wherever life takes you.</span>

        <Link
          to="/explore"
          className="ml-2 shrink-0 font-bold text-[#E50909] hover:underline"
        >
          Explore stays →
        </Link>
      </div>

      {/* Navbar: single logo for desktop and mobile */}
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex h-[68px] max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-10">
          <Link to="/" className="flex items-center gap-2.5">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E50909] text-white shadow-md shadow-red-500/20">
              <Home size={22} strokeWidth={2.5} />
            </span>

            <span>
              <span className="block text-base font-extrabold tracking-tight sm:text-lg">
                Grah<span className="text-[#E50909]">Pravesh</span>
              </span>

              <span className="block text-[8px] font-bold uppercase tracking-[0.2em] text-slate-500">
                Stay. Explore. Experience.
              </span>
            </span>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-1.5 rounded-lg px-2 py-2 text-xs font-semibold text-slate-600 transition hover:bg-slate-50 hover:text-[#E50909] sm:px-3 sm:text-sm"
          >
            <ArrowLeft size={16} />
            <span>Back to home</span>
          </Link>
        </div>
      </header>

      {/* Registration section */}
      <section className="relative isolate overflow-hidden bg-white">
        {/* Background decorations */}
        <div className="pointer-events-none absolute -left-32 top-20 -z-10 h-72 w-72 rounded-full bg-[#B8D9F2]/40 blur-3xl" />

        <div className="pointer-events-none absolute -right-32 bottom-0 -z-10 h-80 w-80 rounded-full bg-red-50 blur-3xl" />

        <div className="mx-auto grid max-w-7xl items-center gap-8 px-3 py-6 sm:px-6 sm:py-10 lg:min-h-[calc(100vh-105px)] lg:grid-cols-2 lg:gap-16 lg:px-10 lg:py-12">
          {/* Left branding panel - desktop only */}
          <div className="relative hidden min-h-[570px] overflow-hidden rounded-[28px] border border-[#29364E] bg-[#172033] p-9 text-white shadow-xl shadow-slate-900/10 lg:flex lg:flex-col lg:justify-between xl:p-12">
            <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -right-8 -top-8 h-48 w-48 rounded-full border border-white/10" />

            <div className="pointer-events-none absolute -bottom-24 -left-20 h-72 w-72 rounded-full bg-[#B8D9F2]/10 blur-2xl" />

            {/* Top content */}
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-4 py-2 text-xs font-semibold text-slate-200">
                <Sparkles size={15} className="text-[#B8D9F2]" />
                Your journey starts here
              </div>

              <h1 className="mt-9 text-4xl font-extrabold leading-[1.17] tracking-tight xl:text-5xl">
                Find a place
                <br />
                that feels like
                <br />
                <span className="text-[#B8D9F2]">home.</span>
              </h1>

              <p className="mt-5 max-w-md text-sm leading-7 text-slate-300 xl:text-base">
                From peaceful getaways to beautiful city stays, discover
                spaces where your next great memory begins.
              </p>
            </div>

            {/* Feature card */}
            <div className="relative z-10 rounded-2xl border border-white/10 bg-white/[0.06] p-5">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#E50909] text-white">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="text-sm font-bold">
                    Your next escape awaits
                  </h3>

                  <p className="mt-1 text-xs leading-5 text-slate-300">
                    Discover stays that match your style and budget.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3 border-t border-white/10 pt-4">
                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={15} className="text-[#B8D9F2]" />
                  Find your perfect stay
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-200">
                  <Check size={15} className="text-[#B8D9F2]" />
                  Become a host
                </div>
              </div>
            </div>

            {/* Bottom content */}
            <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-5">
              <div>
                <p className="text-sm font-bold">Grah Pravesh</p>
                <p className="mt-1 text-[10px] text-slate-400">
                  Your space. Your story.
                </p>
              </div>

              <span className="rounded-full bg-[#B8D9F2] px-3 py-1.5 text-[10px] font-extrabold uppercase tracking-wider text-[#172033]">
                Welcome home
              </span>
            </div>
          </div>

          {/* Registration form card */}
          <div className="mx-auto w-full max-w-[480px] rounded-2xl border border-slate-200 bg-white p-4 shadow-[0_12px_40px_-12px_rgba(23,32,51,0.12)] sm:rounded-3xl sm:p-7 md:p-8">
            {/* Heading: no duplicate logo on mobile */}
            <div className="mb-6">
              <div className="mb-3 h-1 w-11 rounded-full bg-[#E50909]" />

              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#E50909] sm:text-xs">
                Create your account
              </p>

              <h2 className="mt-2 text-[27px] font-extrabold leading-tight tracking-tight text-[#172033] sm:text-3xl">
                Join us today
                <span className="text-[#E50909]">.</span>
              </h2>

              <p className="mt-2 text-[13px] leading-6 text-slate-500 sm:text-sm">
                A few details and you're ready to get started.
              </p>
            </div>

            {/* Account type */}
            <div className="mb-6">
              <p className="mb-2.5 text-xs font-semibold text-slate-700 sm:text-[13px]">
                Choose your account type
              </p>

              <div className="grid grid-cols-2 gap-2.5 sm:gap-3">
                {/* Guest */}
                <button
                  type="button"
                  onClick={() => setRole("guest")}
                  aria-pressed={role === "guest"}
                  className={`flex min-w-0 items-center gap-2 rounded-xl border p-3 text-left transition-all duration-200 sm:gap-3 sm:p-3.5 ${
                    role === "guest"
                      ? "border-[#E50909] bg-red-50 ring-2 ring-[#E50909]/10"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${
                      role === "guest"
                        ? "bg-[#E50909] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <UserRound size={19} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-bold text-[#172033] sm:text-sm">
                      Guest
                    </span>

                    <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-[11px]">
                      Find a stay
                    </span>
                  </span>

                  {role === "guest" && (
                    <Check
                      size={14}
                      className="ml-auto shrink-0 text-[#E50909]"
                    />
                  )}
                </button>

                {/* Host */}
                <button
                  type="button"
                  onClick={() => setRole("host")}
                  aria-pressed={role === "host"}
                  className={`flex min-w-0 items-center gap-2 rounded-xl border p-3 text-left transition-all duration-200 sm:gap-3 sm:p-3.5 ${
                    role === "host"
                      ? "border-[#E50909] bg-red-50 ring-2 ring-[#E50909]/10"
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                >
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-lg sm:h-10 sm:w-10 ${
                      role === "host"
                        ? "bg-[#E50909] text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Building2 size={19} />
                  </span>

                  <span className="min-w-0">
                    <span className="block text-xs font-bold text-[#172033] sm:text-sm">
                      Host
                    </span>

                    <span className="mt-0.5 block text-[10px] text-slate-500 sm:text-[11px]">
                      List property
                    </span>
                  </span>

                  {role === "host" && (
                    <Check
                      size={14}
                      className="ml-auto shrink-0 text-[#E50909]"
                    />
                  )}
                </button>
              </div>
            </div>

            {/* Registration form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              {/* Full name */}
              <div>
                <label
                  htmlFor="fullName"
                  className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-700 sm:text-[13px]"
                >
                  Full name
                </label>

                <div className="relative">
                  <UserRound
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="fullName"
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-700 sm:text-[13px]"
                >
                  Email address
                </label>

                <div className="relative">
                  <Mail
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />

                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    className={inputClass}
                  />
                </div>
              </div>

              {/* Password and Confirm Password */}
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Password */}
                <div className="min-w-0">
                  <label
                    htmlFor="password"
                    className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-700 sm:text-[13px]"
                  >
                    Password
                  </label>

                  <div className="relative">
                    <KeyRound
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Min. 8 characters"
                      autoComplete="new-password"
                      className={inputClass}
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#E50909]"
                    >
                      {showPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Confirm password */}
                <div className="min-w-0">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-[12px] font-semibold tracking-wide text-slate-700 sm:text-[13px]"
                  >
                    Confirm password
                  </label>

                  <div className="relative">
                    <ShieldCheck
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />

                    <input
                      id="confirmPassword"
                      type={showConfirmPassword ? "text" : "password"}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="Re-enter password"
                      autoComplete="new-password"
                      className={`w-full min-w-0 rounded-xl border bg-slate-50/50 py-3.5 pl-11 pr-10 text-sm font-medium text-[#172033] placeholder:font-normal placeholder:text-slate-400 outline-none transition-all duration-200 focus:bg-white focus:ring-4 ${
                        formData.confirmPassword &&
                        formData.password === formData.confirmPassword
                          ? "border-green-500 focus:border-green-500 focus:ring-green-500/10"
                          : formData.confirmPassword
                            ? "border-red-400 focus:border-red-500 focus:ring-red-500/10"
                            : "border-slate-300 hover:border-slate-400 focus:border-[#E50909] focus:ring-[#E50909]/10"
                      }`}
                    />

                    <button
                      type="button"
                      onClick={() =>
                        setShowConfirmPassword((prev) => !prev)
                      }
                      aria-label={
                        showConfirmPassword
                          ? "Hide confirm password"
                          : "Show confirm password"
                      }
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 transition hover:text-[#E50909]"
                    >
                      {showConfirmPassword ? (
                        <EyeOff size={16} />
                      ) : (
                        <Eye size={16} />
                      )}
                    </button>
                  </div>

                  {formData.confirmPassword && (
                    <p
                      className={`mt-1.5 text-[10px] font-medium ${
                        formData.password === formData.confirmPassword
                          ? "text-green-600"
                          : "text-red-500"
                      }`}
                    >
                      {formData.password === formData.confirmPassword
                        ? "Passwords match"
                        : "Passwords don't match"}
                    </p>
                  )}
                </div>
              </div>

              {/* Error message */}
              {error && (
                <div
                  role="alert"
                  className="rounded-xl border border-red-200 bg-red-50 px-3.5 py-3 text-xs leading-5 text-red-700 sm:px-4"
                >
                  {error}
                </div>
              )}

              {/* Success message */}
              {success && (
                <div
                  role="status"
                  className="rounded-xl border border-green-200 bg-green-50 px-3.5 py-3 text-xs leading-5 text-green-800 sm:px-4"
                >
                  {success}
                </div>
              )}

              {/* Terms and privacy */}
              <p className="text-[11px] leading-5 text-slate-500 sm:text-xs">
                By creating an account, you agree to our{" "}
                <Link
                  to="/terms"
                  className="font-semibold text-[#E50909] hover:underline"
                >
                  Terms
                </Link>{" "}
                and{" "}
                <Link
                  to="/privacy"
                  className="font-semibold text-[#E50909] hover:underline"
                >
                  Privacy Policy
                </Link>
                .
              </p>

              {/* Submit */}
              <button
                type="submit"
                className="group flex min-h-[48px] w-full items-center justify-center gap-2 rounded-xl bg-[#E50909] px-5 py-3.5 text-sm font-bold tracking-wide text-white shadow-md shadow-red-500/20 transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#C90000] hover:shadow-lg active:translate-y-0"
              >
                Create your account

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </button>
            </form>

            {/* Login link */}
            <div className="mt-5 text-center sm:mt-6">
              <p className="text-xs text-slate-500 sm:text-sm">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="font-bold text-[#E50909] hover:underline"
                >
                  Log in
                </Link>
              </p>
            </div>

            {/* Footer */}
            <div className="mt-5 flex items-center justify-center gap-2 border-t border-slate-100 pt-4 text-center text-[10px] font-medium text-slate-400 sm:mt-6 sm:pt-5 sm:text-[11px]">
              <ShieldCheck size={14} className="shrink-0 text-[#E50909]" />
              A better stay begins with a better experience.
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Register;
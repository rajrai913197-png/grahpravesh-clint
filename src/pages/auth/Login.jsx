import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Eye,
  EyeOff,
  Home,
  Mail,
  LockKeyhole,
  ShieldCheck,
  MapPin,
  Sparkles,
} from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please enter your email and password.");
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "http://localhost:3000/userLogin",
        {
          email: formData.email.trim(),
          password: formData.password,
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      setSuccess("Login successful! Welcome to Grah Pravesh.");

      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Login failed. Please check your credentials."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#FFFDFC] text-[#172033]">
      {/* Announcement Bar */}
      <div className="flex min-h-10 items-center justify-center gap-2 bg-[#B8D9F2] px-4 py-2 text-center text-xs font-medium text-[#172033] sm:text-sm">
        <Sparkles size={15} />

        <p>
          Find your perfect stay, wherever life takes you.
        </p>

        <Link
          to="/"
          className="hidden items-center gap-1 font-bold underline underline-offset-4 sm:flex"
        >
          Explore stays <ArrowRight size={14} />
        </Link>
      </div>

      {/* Navbar */}
      <header className="border-b border-gray-100 bg-white">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#172033] text-white">
              <Home size={21} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight text-[#172033] sm:text-2xl">
                Grah Pravesh
              </h1>

              <p className="text-[10px] font-medium tracking-[2px] text-gray-500 sm:text-xs">
                FIND YOUR HAPPY PLACE
              </p>
            </div>
          </Link>

          <Link
            to="/"
            className="flex items-center gap-2 text-sm font-semibold text-gray-600 transition hover:text-[#172033]"
          >
            <ArrowLeft size={17} />
            <span className="hidden sm:inline">Back to home</span>
            <span className="sm:hidden">Home</span>
          </Link>
        </nav>
      </header>

      {/* Main Section */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-8 sm:py-12 lg:px-12 lg:py-16">
        <div className="grid min-h-[620px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-[0_20px_70px_rgba(23,32,51,0.08)] lg:grid-cols-2">
          {/* Left Branding Panel */}
          <section className="relative hidden overflow-hidden bg-[#172033] p-10 text-white lg:flex lg:flex-col lg:justify-between xl:p-14">
            <div className="absolute -right-24 -top-20 h-80 w-80 rounded-full bg-[#B8D9F2]/10 blur-3xl" />

            <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-[#B8D9F2]/10 blur-3xl" />

            <div className="relative z-10">
              <div className="mb-10 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/15 bg-white/10">
                <Home size={28} />
              </div>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-medium text-[#B8D9F2]">
                <Sparkles size={14} />
                YOUR NEXT CHAPTER STARTS HERE
              </span>

              <h2 className="mt-7 max-w-lg text-4xl font-extrabold leading-tight xl:text-5xl">
                Welcome back to your
                <span className="block text-[#B8D9F2]">
                  happy place.
                </span>
              </h2>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-300 xl:text-base">
                Your next memorable stay is just around the corner.
                Sign in to discover beautiful places and manage your
                bookings with ease.
              </p>
            </div>

            <div className="relative z-10 mt-12 space-y-5">
              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B8D9F2]/15 text-[#B8D9F2]">
                  <ShieldCheck size={23} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Your account, your way
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Access your account and manage your stays in one place.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#B8D9F2]/15 text-[#B8D9F2]">
                  <MapPin size={23} />
                </div>

                <div>
                  <h3 className="font-bold">
                    Discover places worth staying
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-gray-400">
                    Find your next destination and make yourself at home.
                  </p>
                </div>
              </div>

              <p className="pt-4 text-xs tracking-wide text-gray-500">
                GRAH PRAVESH · FIND YOUR PLACE, FEEL AT HOME.
              </p>
            </div>
          </section>

          {/* Right Login Form */}
          <section className="flex items-center justify-center px-5 py-10 sm:px-10 lg:px-12 xl:px-16">
            <div className="w-full max-w-md">
              {/* Login Heading — No Extra Mobile Logo */}
              <div className="mb-8">
                <span className="inline-flex items-center gap-2 rounded-full bg-[#B8D9F2]/40 px-3 py-1.5 text-xs font-bold text-[#172033]">
                  <ShieldCheck size={14} />
                  WELCOME BACK
                </span>

                <h2 className="mt-5 text-3xl font-extrabold tracking-tight text-[#172033] sm:text-4xl">
                  Sign in to your account
                </h2>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  Enter your details below to continue your journey with
                  Grah Pravesh.
                </p>
              </div>

              {/* Error Message */}
              {error && (
                <div
                  role="alert"
                  className="mb-5 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
                >
                  {error}
                </div>
              )}

              {/* Success Message */}
              {success && (
                <div
                  role="status"
                  className="mb-5 rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700"
                >
                  {success}
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Email */}
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-bold text-[#172033]"
                  >
                    Email address
                  </label>

                  <div className="flex items-center rounded-xl border border-gray-200 bg-white transition focus-within:border-[#172033] focus-within:ring-4 focus-within:ring-[#172033]/5">
                    <Mail
                      size={19}
                      className="ml-4 shrink-0 text-gray-400"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      autoComplete="email"
                      className="w-full rounded-xl bg-transparent px-3 py-4 text-sm text-[#172033] outline-none placeholder:text-gray-400"
                    />
                  </div>
                </div>

                {/* Password */}
                <div>
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="password"
                      className="text-sm font-bold text-[#172033]"
                    >
                      Password
                    </label>

                    <Link
                      to="/forgot-password"
                      className="text-xs font-semibold text-[#172033] transition hover:text-blue-700"
                    >
                      Forgot password?
                    </Link>
                  </div>

                  <div className="flex items-center rounded-xl border border-gray-200 bg-white transition focus-within:border-[#172033] focus-within:ring-4 focus-within:ring-[#172033]/5">
                    <LockKeyhole
                      size={19}
                      className="ml-4 shrink-0 text-gray-400"
                    />

                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      className="w-full rounded-xl bg-transparent px-3 py-4 text-sm text-[#172033] outline-none placeholder:text-gray-400"
                    />

                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      className="mr-4 text-gray-400 transition hover:text-[#172033]"
                    >
                      {showPassword ? (
                        <EyeOff size={19} />
                      ) : (
                        <Eye size={19} />
                      )}
                    </button>
                  </div>
                </div>

                {/* Remember Me */}
                <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-600">
                  <input
                    type="checkbox"
                    className="h-4 w-4 rounded border-gray-300 accent-[#172033]"
                  />

                  Remember me
                </label>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#172033] px-5 py-4 text-sm font-bold text-white shadow-lg shadow-[#172033]/15 transition hover:bg-[#25334D] disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {loading ? "Signing in..." : "Sign in to your account"}

                  {!loading && <ArrowRight size={18} />}
                </button>
              </form>

              {/* Register Link */}
              <div className="mt-8 border-t border-gray-100 pt-6 text-center">
                <p className="text-sm text-gray-500">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-bold text-[#172033] underline underline-offset-4 transition hover:text-blue-700"
                  >
                    Create an account
                  </Link>
                </p>
              </div>

              <p className="mt-6 text-center text-xs leading-5 text-gray-400">
                By signing in, you agree to our Terms of Service and
                Privacy Policy.
              </p>
            </div>
          </section>
        </div>
      </main>

    </div>
  );
};

export default Login;
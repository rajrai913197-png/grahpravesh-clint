import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  LayoutDashboard,
  House,
  Plus,
  CalendarDays,
  Wallet,
  UserRound,
  Settings,
  LogOut,
  Bell,
  ArrowUpRight,
  ArrowRight,
  Menu,
  X,
  IndianRupee,
  Clock,
  ChevronRight
} from "lucide-react";

const HostDashboard = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigate = useNavigate();

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  // Close mobile sidebar
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  // Dashboard Statistics
  const stats = [
    {
      title: "Total Properties",
      value: "08",
      subtitle: "Listed properties",
      icon: House,
      color: "bg-red-50 text-red-600"
    },
    {
      title: "Total Bookings",
      value: "24",
      subtitle: "Across all properties",
      icon: CalendarDays,
      color: "bg-blue-50 text-blue-600"
    },
    {
      title: "Total Earnings",
      value: "₹48,500",
      subtitle: "This month",
      icon: IndianRupee,
      color: "bg-green-50 text-green-600"
    },
    {
      title: "Pending Requests",
      value: "05",
      subtitle: "Awaiting confirmation",
      icon: Clock,
      color: "bg-orange-50 text-orange-600"
    }
  ];

  // Sidebar Menu
  const menuItems = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
      path: "/host-dashboard"
    },
    {
      name: "Add Property",
      icon: Plus,
      path: "/add-property"
    },
    {
      name: "My Properties",
      icon: House,
      path: "/my-properties"
    },
    {
      name: "Bookings",
      icon: CalendarDays,
      path: "/host-bookings"
    },
    {
      name: "Earnings",
      icon: Wallet,
      path: "/host-earnings"
    }
  ];

  return (

    <div className="min-h-screen bg-[#F8FAFC] flex">

      {/* MOBILE OVERLAY */}

      {isMenuOpen && (
        <div
          onClick={closeMenu}
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
        />
      )}


      {/* SIDEBAR */}

      <aside
        className={`
          w-[260px]
          bg-white
          border-r border-gray-100
          flex flex-col
          fixed h-screen top-0 left-0
          z-50
          transition-transform duration-300 ease-in-out
          ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
        `}
      >

        {/* LOGO */}

        <div className="px-6 py-7 border-b border-gray-100 flex items-center justify-between">

          <Link
            to="/host-dashboard"
            onClick={closeMenu}
            className="flex items-center gap-2"
          >

            <div className="bg-[#E50909] p-2 rounded-xl">
              <House className="text-white" size={23} />
            </div>

            <div>
              <h1 className="text-xl font-extrabold tracking-tight">
                Grah<span className="text-[#E50909]">Pravesh</span>
              </h1>

              <p className="text-[8px] tracking-[2px] text-gray-500 font-bold">
                STAY. EXPLORE. EXPERIENCE.
              </p>
            </div>

          </Link>

          {/* MOBILE CLOSE BUTTON */}

          <button
            onClick={closeMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
          >
            <X size={22} />
          </button>

        </div>


        {/* SIDEBAR LINKS */}

        <div className="px-5 py-7 flex-1 overflow-y-auto">

          <p className="text-[11px] font-bold tracking-[1.5px] text-gray-400 px-3 mb-5">
            HOST MENU
          </p>

          <div className="space-y-2">

            {menuItems.map((item, index) => {

              const Icon = item.icon;

              return (

                <Link
                  key={index}
                  to={item.path}
                  onClick={closeMenu}
                  className={`
                    flex items-center gap-3 px-4 py-3.5
                    rounded-xl transition-all
                    ${
                      index === 0
                        ? "bg-[#E50909] text-white shadow-lg shadow-red-200"
                        : "text-gray-500 hover:bg-red-50 hover:text-[#E50909]"
                    }
                  `}
                >

                  <Icon size={19} />

                  <span className="text-sm font-semibold">
                    {item.name}
                  </span>

                  {index === 0 && (
                    <ChevronRight size={16} className="ml-auto" />
                  )}

                </Link>

              );

            })}

          </div>


          <p className="text-[11px] font-bold tracking-[1.5px] text-gray-400 px-3 mt-10 mb-5">
            ACCOUNT
          </p>


          <Link
            to="/host-profile"
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-500 hover:bg-red-50 hover:text-[#E50909]"
          >
            <UserRound size={19} />
            <span className="text-sm font-semibold">
              My Profile
            </span>
          </Link>


          <Link
            to="/host-settings"
            onClick={closeMenu}
            className="flex items-center gap-3 px-4 py-3.5 rounded-xl text-gray-500 hover:bg-red-50 hover:text-[#E50909]"
          >
            <Settings size={19} />
            <span className="text-sm font-semibold">
              Settings
            </span>
          </Link>

        </div>


        {/* SUPPORT & LOGOUT */}

        <div className="p-5 border-t border-gray-100">

          <div className="bg-[#F0F7FD] rounded-2xl p-5">

            <div className="text-2xl mb-3">
              🏡
            </div>

            <h3 className="font-bold text-gray-800 text-sm">
              Need some help?
            </h3>

            <p className="text-xs text-gray-500 mt-2 leading-5">
              We're here to help you grow your hosting business.
            </p>

            <button className="text-[#E50909] text-xs font-bold mt-3">
              Contact Support →
            </button>

          </div>


          <button
            onClick={handleLogout}
            className="flex items-center gap-3 text-red-500 px-4 py-4 text-sm font-semibold hover:text-red-700"
          >
            <LogOut size={19} />
            Logout
          </button>

        </div>

      </aside>


      {/* MAIN CONTENT */}

      <main className="flex-1 lg:ml-[260px] min-w-0">


        {/* TOP NAVBAR */}

        <header className="h-[78px] bg-white border-b border-gray-100 flex items-center justify-between px-5 md:px-10 sticky top-0 z-30">

          <div className="flex items-center gap-4">

            {/* HAMBURGER */}

            <button
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition"
              aria-label="Open menu"
            >
              <Menu size={25} className="text-gray-700" />
            </button>


            <div>
              <p className="text-xs text-gray-400">
                Host Portal
              </p>

              <h2 className="font-bold text-gray-800 text-sm md:text-base">
                Dashboard Overview
              </h2>
            </div>

          </div>


          {/* RIGHT NAVBAR */}

          <div className="flex items-center gap-3 md:gap-5">

            <button className="relative p-2.5 rounded-full bg-gray-50 hover:bg-gray-100">
              <Bell size={19} className="text-gray-600" />

              <span className="absolute top-2 right-2 w-2 h-2 bg-[#E50909] rounded-full border-2 border-white"></span>
            </button>


            <div className="flex items-center gap-3 border-l pl-4 border-gray-200">

              <div className="hidden sm:block text-right">

                <p className="text-sm font-bold text-gray-800">
                  Host Account
                </p>

                <p className="text-xs text-gray-400">
                  Property Owner
                </p>

              </div>

              <div className="w-10 h-10 rounded-full bg-[#B9D9F3] flex items-center justify-center">
                <UserRound size={22} className="text-gray-700" />
              </div>

            </div>

          </div>

        </header>


        {/* DASHBOARD BODY */}

        <div className="p-5 md:p-10 max-w-[1500px] mx-auto">


          {/* WELCOME BANNER */}

          <section className="bg-[#111827] rounded-[24px] p-7 md:p-10 relative overflow-hidden mb-9">

            <div className="absolute -right-10 -top-28 w-80 h-80 rounded-full border-[45px] border-white/5"></div>

            <div className="absolute right-28 -bottom-32 w-72 h-72 rounded-full border-[40px] border-[#E50909]/20"></div>


            <div className="relative z-10 max-w-xl">

              <span className="inline-flex items-center gap-2 bg-white/10 text-[#B9D9F3] px-4 py-2 rounded-full text-xs font-semibold mb-5">
                ✦ YOUR HOSTING JOURNEY STARTS HERE
              </span>

              <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight">
                Welcome back,
                <span className="text-[#B9D9F3]"> Host!</span>
              </h1>

              <p className="text-gray-300 text-sm md:text-base mt-4 leading-7">
                Manage your properties, welcome new guests and
                create unforgettable stay experiences with
                Grah Pravesh.
              </p>


              <Link
                to="/add-property"
                className="inline-flex items-center gap-3 mt-7 bg-[#E50909] hover:bg-red-700 text-white px-6 py-3.5 rounded-xl font-bold text-sm transition-all shadow-lg shadow-red-900/30"
              >
                <Plus size={19} />
                Add New Property
                <ArrowRight size={17} />
              </Link>

            </div>


            <div className="hidden md:block absolute right-12 bottom-0 text-[150px] opacity-10">
              🏡
            </div>

          </section>


          {/* STATISTICS */}

          <section className="mb-10">

            <div className="flex items-center justify-between mb-5">

              <div>
                <h2 className="text-xl font-extrabold text-gray-800">
                  Your Performance
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Here's what's happening with your business.
                </p>
              </div>

              <span className="text-xs text-gray-400 hidden sm:block">
                Monthly overview
              </span>

            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

              {stats.map((item, index) => {

                const Icon = item.icon;

                return (

                  <div
                    key={index}
                    className="bg-white p-6 rounded-2xl border border-gray-100 hover:shadow-lg hover:shadow-gray-100 transition-all"
                  >

                    <div className="flex justify-between items-center">

                      <div className={`p-3 rounded-xl ${item.color}`}>
                        <Icon size={22} />
                      </div>

                      <ArrowUpRight size={18} className="text-gray-300" />

                    </div>


                    <p className="text-sm text-gray-500 mt-5">
                      {item.title}
                    </p>

                    <h3 className="text-2xl font-extrabold text-gray-800 mt-2">
                      {item.value}
                    </h3>

                    <p className="text-xs text-gray-400 mt-2">
                      {item.subtitle}
                    </p>

                  </div>

                );

              })}

            </div>

          </section>


          {/* QUICK ACTIONS */}

          <section className="mb-10">

            <h2 className="text-xl font-extrabold text-gray-800 mb-5">
              Quick Actions
            </h2>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">


              {/* ADD PROPERTY */}

              <Link
                to="/add-property"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#E50909] hover:shadow-lg transition-all group"
              >

                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center text-[#E50909] group-hover:bg-[#E50909] group-hover:text-white transition-all">
                  <Plus size={25} />
                </div>

                <h3 className="font-bold text-gray-800 mt-5">
                  List a Property
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  Add your property and reach more guests.
                </p>

                <div className="flex items-center gap-2 text-[#E50909] font-bold text-sm mt-5">
                  Get Started <ArrowRight size={16} />
                </div>

              </Link>


              {/* MY PROPERTIES */}

              <Link
                to="/my-properties"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#E50909] hover:shadow-lg transition-all group"
              >

                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                  <House size={24} />
                </div>

                <h3 className="font-bold text-gray-800 mt-5">
                  Manage Properties
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  View, update and manage your listings.
                </p>

                <div className="flex items-center gap-2 text-[#E50909] font-bold text-sm mt-5">
                  View Properties <ArrowRight size={16} />
                </div>

              </Link>


              {/* BOOKINGS */}

              <Link
                to="/host-bookings"
                className="bg-white border border-gray-100 rounded-2xl p-6 hover:border-[#E50909] hover:shadow-lg transition-all group"
              >

                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center text-green-600">
                  <CalendarDays size={24} />
                </div>

                <h3 className="font-bold text-gray-800 mt-5">
                  Manage Bookings
                </h3>

                <p className="text-sm text-gray-400 mt-2">
                  Keep track of your guest reservations.
                </p>

                <div className="flex items-center gap-2 text-[#E50909] font-bold text-sm mt-5">
                  View Bookings <ArrowRight size={16} />
                </div>

              </Link>

            </div>

          </section>


          {/* RECENT PROPERTIES */}

          <section className="bg-white rounded-2xl border border-gray-100 p-6 md:p-8">

            <div className="flex justify-between items-center mb-7">

              <div>

                <h2 className="text-xl font-extrabold text-gray-800">
                  Recent Properties
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Your recently listed properties.
                </p>

              </div>


              <Link
                to="/my-properties"
                className="text-[#E50909] text-sm font-bold flex items-center gap-2"
              >
                View All <ArrowRight size={16} />
              </Link>

            </div>


            <div className="text-center py-12">

              <div className="w-20 h-20 bg-red-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <House size={35} className="text-[#E50909]" />
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                Your properties will appear here
              </h3>

              <p className="text-sm text-gray-400 mt-2 max-w-sm mx-auto">
                Start listing your space and make it available
                for travellers looking for their perfect stay.
              </p>


              <Link
                to="/add-property"
                className="inline-flex items-center gap-2 mt-6 bg-[#E50909] text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-red-700 transition"
              >
                <Plus size={18} />
                Add Your First Property
              </Link>

            </div>

          </section>


          {/* FOOTER */}

          <footer className="mt-10 pt-6 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-3 text-xs text-gray-400">

            <p>
              © 2026 Grah Pravesh. All rights reserved.
            </p>

            <p>
              Made for better stays. ❤️
            </p>

          </footer>

        </div>

      </main>

    </div>

  );

};

export default HostDashboard;
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ArrowUpRight,
  ChevronDown,
  CircleHelp,
  ClipboardList,
  Clock,
  CreditCard,
  Headphones,
  Home,
  Mail,
  Search,
  Send,
  ShieldCheck,
  Sparkles,
  TicketCheck,
  X,
} from "lucide-react";

const supportCategories = [
  {
    title: "Bookings & Trips",
    description: "Manage reservations, cancellations, and trips.",
    icon: ClipboardList,
    color: "bg-blue-50 text-blue-600",
    category: "Bookings",
  },
  {
    title: "Payments & Refunds",
    description: "Get help with payments, refunds, and invoices.",
    icon: CreditCard,
    color: "bg-emerald-50 text-emerald-600",
    category: "Payments",
  },
  {
    title: "Account & Security",
    description: "Manage your account and keep it secure.",
    icon: ShieldCheck,
    color: "bg-purple-50 text-purple-600",
    category: "Account",
  },
  {
    title: "Hosting & Properties",
    description: "Learn how to manage your property listings.",
    icon: Home,
    color: "bg-orange-50 text-orange-600",
    category: "Hosting",
  },
];

const faqs = [
  {
    category: "Bookings",
    question: "How do I book a property?",
    answer:
      "Explore available properties, select the one you like, choose your check-in and check-out dates, enter the number of guests, and follow the booking process.",
  },
  {
    category: "Bookings",
    question: "Can I cancel my booking?",
    answer:
      "Yes, cancellations depend on the property's cancellation policy. Open your Trips section, select your reservation, and review the available cancellation options.",
  },
  {
    category: "Bookings",
    question: "How can I check my booking status?",
    answer:
      "Visit your Trips or Bookings section to view your reservation details and current booking status.",
  },
  {
    category: "Payments",
    question: "Which payment methods are supported?",
    answer:
      "Available payment methods will be displayed during checkout. Supported options depend on the payment gateway configured on the platform.",
  },
  {
    category: "Payments",
    question: "How long does a refund take?",
    answer:
      "Refund timelines depend on the payment provider and your bank. Once a refund is processed, it may take several business days to appear in your account.",
  },
  {
    category: "Payments",
    question: "Where can I find my payment receipt?",
    answer:
      "Once payment receipts are implemented, you will be able to access them from your booking details or account dashboard.",
  },
  {
    category: "Account",
    question: "How do I reset my password?",
    answer:
      "Use the Forgot Password option on the login page, if enabled. Follow the instructions to verify your account and create a new password.",
  },
  {
    category: "Account",
    question: "How can I update my profile?",
    answer:
      "Open your account profile, update the information you want to change, and save your changes.",
  },
  {
    category: "Account",
    question: "How do I keep my account secure?",
    answer:
      "Use a strong, unique password, never share your login credentials, and always log out when using a shared device.",
  },
  {
    category: "Hosting",
    question: "How can I become a host?",
    answer:
      "Create an account and use the Become a Host option when available. You will be guided through the property listing process.",
  },
  {
    category: "Hosting",
    question: "How do I add a property?",
    answer:
      "After host access is enabled, open your host dashboard and add your property details, photos, location, pricing, and availability.",
  },
  {
    category: "Hosting",
    question: "Can I update my property listing?",
    answer:
      "Hosts can manage property information, pricing, photos, and availability through their host dashboard when these features are enabled.",
  },
];

export default function Contact() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [openFaq, setOpenFaq] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [formError, setFormError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;

    const searchText =
      `${faq.question} ${faq.answer} ${faq.category}`.toLowerCase();

    return matchesCategory && searchText.includes(searchQuery.toLowerCase());
  });

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setOpenFaq(0);

    document.getElementById("faq-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormError("");
    setSuccessMessage("");

    if (
      !formData.name.trim() ||
      !formData.email.trim() ||
      !formData.subject.trim() ||
      !formData.message.trim()
    ) {
      setFormError("Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(formData.email)) {
      setFormError("Please enter a valid email address.");
      return;
    }

    setSuccessMessage(
      "Your form is valid! Connect the support API to submit your request."
    );
  };

  return (
    <main className="min-h-screen bg-white text-[#0B1424]">
      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#0B1424] px-5 py-20 text-white sm:py-24">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-[#B7D8F5]/10 blur-3xl" />
        <div className="absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-[#E10600]/10 blur-3xl" />

        <div className="relative mx-auto max-w-5xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100">
            <Sparkles size={16} />
            We're here to help
          </span>

          <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            How can we{" "}
            <span className="text-[#B7D8F5]">help you?</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
            Find answers, resolve issues, and get the support you need for
            your next stay or hosting experience.
          </p>

          <div className="mx-auto mt-9 flex max-w-2xl items-center gap-3 rounded-2xl bg-white p-2 shadow-2xl">
            <Search className="ml-3 shrink-0 text-slate-400" size={22} />

            <input
              type="text"
              placeholder="Search for answers, bookings, refunds..."
              value={searchQuery}
              onChange={(event) => {
                setSearchQuery(event.target.value);
                setOpenFaq(0);
              }}
              onKeyDown={(event) => {
                if (event.key === "Enter") {
                  document.getElementById("faq-section")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }
              }}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-[#0B1424] outline-none placeholder:text-slate-400 sm:text-base"
            />

            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="rounded-lg p-2 text-slate-500 hover:bg-slate-100"
                aria-label="Clear search"
              >
                <X size={18} />
              </button>
            )}

            <button
              type="button"
              onClick={() =>
                document.getElementById("faq-section")?.scrollIntoView({
                  behavior: "smooth",
                })
              }
              className="rounded-xl bg-[#E10600] px-5 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
            >
              Search
            </button>
          </div>

          <p className="mt-5 text-sm text-slate-400">
            Popular topics: Booking, Cancellation, Refunds, Hosting
          </p>
        </div>
      </section>

      {/* SUPPORT CATEGORIES */}
      <section className="px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#E10600]">
              Help Center
            </p>

            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              What do you need help with?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-500">
              Choose a category to find relevant answers and helpful
              information.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {supportCategories.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  type="button"
                  key={item.title}
                  onClick={() => handleCategoryClick(item.category)}
                  className="group rounded-2xl border border-slate-200 bg-white p-6 text-left transition duration-300 hover:-translate-y-1 hover:border-[#B7D8F5] hover:shadow-xl"
                >
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${item.color}`}
                  >
                    <Icon size={27} />
                  </div>

                  <h3 className="mt-5 text-lg font-bold">{item.title}</h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-slate-500">
                    {item.description}
                  </p>

                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#E10600]">
                    Explore topics
                    <ArrowRight
                      size={16}
                      className="transition group-hover:translate-x-1"
                    />
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq-section" className="scroll-mt-10 bg-slate-50 px-5 py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.75fr_1.25fr]">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
              <CircleHelp size={17} />
              Frequently Asked Questions
            </span>

            <h2 className="mt-5 text-3xl font-bold leading-tight sm:text-4xl">
              Quick answers to your questions.
            </h2>

            <p className="mt-4 leading-7 text-slate-500">
              Browse the most common questions about bookings, payments,
              your account, and hosting.
            </p>

            <div className="mt-7 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                  <Headphones size={22} />
                </div>

                <div>
                  <h3 className="font-bold">Still need help?</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    Our support team is here for you.
                  </p>
                </div>
              </div>

              <a
                href="#contact-section"
                className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B1424] px-4 py-3 font-semibold text-white transition hover:bg-slate-800"
              >
                Contact Support
                <ArrowRight size={17} />
              </a>
            </div>
          </div>

          <div>
            <div className="mb-6 flex flex-wrap gap-2">
              {["All", "Bookings", "Payments", "Account", "Hosting"].map(
                (category) => (
                  <button
                    type="button"
                    key={category}
                    onClick={() => {
                      setActiveCategory(category);
                      setOpenFaq(0);
                    }}
                    className={`rounded-full px-4 py-2 text-sm font-semibold transition ${
                      activeCategory === category
                        ? "bg-[#0B1424] text-white"
                        : "border border-slate-200 bg-white text-slate-600 hover:border-slate-400"
                    }`}
                  >
                    {category}
                  </button>
                )
              )}
            </div>

            <div className="space-y-3">
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq, index) => {
                  const isOpen = openFaq === index;

                  return (
                    <div
                      key={faq.question}
                      className={`overflow-hidden rounded-2xl border bg-white transition ${
                        isOpen
                          ? "border-[#B7D8F5] shadow-sm"
                          : "border-slate-200"
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => setOpenFaq(isOpen ? -1 : index)}
                        className="flex w-full items-center justify-between gap-4 p-5 text-left"
                      >
                        <span className="font-semibold leading-6">
                          {faq.question}
                        </span>

                        <ChevronDown
                          size={20}
                          className={`shrink-0 text-slate-500 transition ${
                            isOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isOpen && (
                        <div className="px-5 pb-5">
                          <p className="border-t border-slate-100 pt-4 text-sm leading-7 text-slate-500">
                            {faq.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })
              ) : (
                <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-12 text-center">
                  <Search
                    size={30}
                    className="mx-auto text-slate-400"
                  />

                  <h3 className="mt-4 font-bold">No answers found</h3>

                  <p className="mt-2 text-sm text-slate-500">
                    Try another search term or select a different category.
                  </p>

                  <button
                    type="button"
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("All");
                      setOpenFaq(0);
                    }}
                    className="mt-4 font-semibold text-[#E10600]"
                  >
                    Clear filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SUPPORT SECTION */}
      <section id="contact-section" className="scroll-mt-10 px-5 py-16 sm:py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid overflow-hidden rounded-3xl border border-slate-200 lg:grid-cols-2">
            <div className="bg-[#0B1424] p-7 text-white sm:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-blue-100">
                <Mail size={16} />
                Get in touch
              </span>

              <h2 className="mt-6 text-3xl font-bold sm:text-4xl">
                Let's solve this together.
              </h2>

              <p className="mt-4 max-w-md leading-7 text-slate-300">
                Tell us what's going on. Share the details of your issue so
                our support team can help you find the right solution.
              </p>

              <div className="mt-9 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Mail size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Email Support</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Use the contact form to describe your issue.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <Clock size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Response Time</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Response times will depend on support availability.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/10">
                    <TicketCheck size={21} />
                  </div>

                  <div>
                    <h3 className="font-semibold">Support Request</h3>
                    <p className="mt-1 text-sm leading-6 text-slate-400">
                      Describe your problem clearly to help us understand it.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 rounded-2xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 font-semibold">
                  <ShieldCheck size={19} className="text-[#B7D8F5]" />
                  Your privacy matters
                </div>

                <p className="mt-2 text-sm leading-6 text-slate-400">
                  Never include your password, OTP, or sensitive payment
                  details in a support request.
                </p>
              </div>
            </div>

            <div className="bg-white p-6 sm:p-10 lg:p-12">
              <h3 className="text-2xl font-bold">Send us a message</h3>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Complete the form below with details about your issue.
              </p>

              <form onSubmit={handleSubmit} className="mt-7 space-y-5">
                <div>
                  <label
                    htmlFor="support-name"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Full Name
                  </label>

                  <input
                    id="support-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="support-email"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Email Address
                  </label>

                  <input
                    id="support-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                <div>
                  <label
                    htmlFor="support-subject"
                    className="mb-2 block text-sm font-semibold"
                  >
                    What do you need help with?
                  </label>

                  <select
                    id="support-subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 outline-none transition focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  >
                    <option value="">Select a topic</option>
                    <option value="Booking Issue">Booking Issue</option>
                    <option value="Cancellation">Cancellation</option>
                    <option value="Payment or Refund">Payment or Refund</option>
                    <option value="Account Issue">Account Issue</option>
                    <option value="Hosting">Hosting or Property</option>
                    <option value="Technical Issue">Technical Issue</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="support-message"
                    className="mb-2 block text-sm font-semibold"
                  >
                    Message
                  </label>

                  <textarea
                    id="support-message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Describe your issue in detail..."
                    className="w-full resize-y rounded-xl border border-slate-200 px-4 py-3 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-4 focus:ring-blue-50"
                  />
                </div>

                {formError && (
                  <p
                    role="alert"
                    className="rounded-xl bg-red-50 p-3 text-sm text-red-700"
                  >
                    {formError}
                  </p>
                )}

                {successMessage && (
                  <p
                    role="status"
                    className="rounded-xl bg-emerald-50 p-3 text-sm leading-6 text-emerald-700"
                  >
                    {successMessage}
                  </p>
                )}

                <button
                  type="submit"
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#E10600] px-5 py-4 font-semibold text-white transition hover:bg-red-700"
                >
                  Send Message
                  <Send size={18} />
                </button>

                <p className="text-center text-xs leading-5 text-slate-400">
                  This form currently validates your input in the browser.
                  Connect it to your backend to send and save support requests.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="px-5 pb-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl bg-[#B7D8F5]/30 p-7 sm:p-10 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.18em] text-[#E10600]">
              Your next stay awaits
            </p>

            <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
              Ready to discover your next destination?
            </h2>

            <p className="mt-3 max-w-xl leading-7 text-slate-600">
              Explore properties and find a place that feels like home.
            </p>
          </div>

          <Link
            to="/explore"
            className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-[#0B1424] px-6 py-4 font-semibold text-white transition hover:bg-slate-800"
          >
            Explore Properties
            <ArrowUpRight size={19} />
          </Link>
        </div>
      </section>
    </main>
  );
}
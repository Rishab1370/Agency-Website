"use client";

import { useThemeMode } from "@/lib/ThemeContext";
import { useModal } from "@/lib/ModalContext";
import { motion } from "framer-motion";
import { Zap, Mail, Phone, MapPin } from "lucide-react";
import Link from "next/link";

const footerLinks = {
  Services: [
    "AI Website Development",
    "School ERP Systems",
    "Gym & Business CRM",
    "AI Chatbots",
    "Automation & Workflow",
    "UI/UX Design",
  ],
  Company: ["About Us", "Case Studies", "Blog", "Careers", "Contact"],
  Industries: ["Schools", "Cafes", "Gyms", "Clinics", "Startups"],
};

export default function Footer() {
  const { mode } = useThemeMode();
  const { openModal } = useModal();

  return (
    <footer
      className="relative overflow-hidden"
      style={{ background: "var(--color-bg)", borderTop: "1px solid var(--color-border)" }}
    >
      {/* Top glow */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(70,102,255,0.4), rgba(163,71,255,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Main footer */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{ background: mode === "dark" ? "linear-gradient(135deg, #4666FF, #A347FF)" : "linear-gradient(135deg, #4666FF 60%, #A347FF 100%)", boxShadow: mode === "dark" ? "0 0 20px rgba(70,102,255,0.4)" : "0 0 10px #B3C6FF" }}
              >
                <Zap size={16} color="#fff" fill="#fff" />
              </div>
              <span
                className="text-lg font-bold"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                Neural<span style={{ color: "#4666FF" }}>Craft</span>
              </span>
            </Link>

            <p
              className="text-sm leading-relaxed mb-6 max-w-xs"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Full-service digital and AI agency building high-performance websites, bespoke business systems, and intelligent automation.
            </p>

            {/* Contact info */}
            <div className="space-y-3 mb-6">
              {[
                { icon: Mail, text: "tiwaririshabh878@gmail.com" },
                { icon: Phone, text: "+91 6307758195" },
                { icon: MapPin, text: "Lucknow, India" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div
                    className="w-7 h-7 rounded-md flex items-center justify-center"
                    style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)" }}
                  >
                    <item.icon size={13} color="var(--color-primary)" />
                  </div>
                  <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Links columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4
                className="text-sm font-semibold mb-5"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => {
                  const routeMap: Record<string, string> = {
                    "About Us": "/about",
                    "Case Studies": "/case-studies",
                    "Blog": "/blog",
                    "Careers": "/careers",
                    "Schools": "/#industries",
                    "Cafes": "/#industries",
                    "Gyms": "/#industries",
                    "Clinics": "/#industries",
                    "Startups": "/#industries",
                  };

                  const href = routeMap[link] || "/#services";

                  if (link === "Contact") {
                    return (
                      <li key={link}>
                        <button
                          onClick={() => openModal()}
                          className="text-sm transition-all duration-200 text-left w-full hover:translate-x-1"
                          style={{ color: "var(--color-text-secondary)" }}
                          onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                          onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                        >
                          {link}
                        </button>
                      </li>
                    );
                  }

                  return (
                    <li key={link}>
                      <Link
                        href={href}
                        className="text-sm transition-all duration-200 block hover:translate-x-1"
                        style={{ color: "var(--color-text-secondary)" }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
                      >
                        {link}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter / Copyright */}
        <div
          className="py-8"
          style={{ borderTop: "1px solid var(--color-border)", borderBottom: "1px solid var(--color-border)" }}
        >
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
            <div className="flex-1">
              <h4
                className="text-base font-semibold mb-1"
                style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
              >
                NeuralCraft AI Ecosystem
              </h4>
              <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                © 2026 NeuralCraft. All rights reserved.
              </p>
            </div>
            <div className="flex gap-5">
              {[
                "Privacy Policy",
                "Terms of Service",
                "Cookie Policy",
              ].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="text-xs transition-colors duration-200"
                  style={{ color: "var(--color-text-muted)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "var(--color-primary)")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-muted)")}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

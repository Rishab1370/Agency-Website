"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Bot, TrendingUp, Users, Sparkles } from "lucide-react";
import { useThemeMode } from "@/lib/ThemeContext";
import { useModal } from "@/lib/ModalContext";
import Image from "next/image";

const floatingCards = [
  {
    icon: <Bot size={18} color="#4666FF" />,
    title: "AI Chatbot Active",
    subtitle: "Handling 340 queries/day",
    color: "#4666FF",
    position: { top: "12%", right: "-5%" },
    delay: 0.4,
  },
  {
    icon: <TrendingUp size={18} color="#47E0FF" />,
    title: "Revenue Growth",
    subtitle: "+187% this quarter",
    color: "#47E0FF",
    position: { bottom: "30%", right: "-8%" },
    delay: 0.6,
  },
  {
    icon: <Users size={18} color="#A347FF" />,
    title: "Active Members",
    subtitle: "2,847 users online",
    color: "#A347FF",
    position: { bottom: "10%", left: "5%" },
    delay: 0.8,
  },
];

export default function Hero() {
  const { mode } = useThemeMode();
  const { openModal } = useModal();

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden pt-16 grid-bg"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Background blobs */}
      <div
        className="glow-blob w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle, #4666FF, transparent)",
          top: "-10%",
          left: "-15%",
          opacity: mode === "dark" ? 0.25 : 0.08,
        }}
      />
      <div
        className="glow-blob w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle, #A347FF, transparent)",
          top: "30%",
          right: "-10%",
          opacity: mode === "dark" ? 0.15 : 0.05,
        }}
      />
      <div
        className="glow-blob w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(circle, #47E0FF, transparent)",
          bottom: "0%",
          left: "30%",
          opacity: mode === "dark" ? 0.12 : 0.04,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full py-20 lg:py-0">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6"
            >
              <span className="tag-pill">
                <Sparkles size={13} />
                Full-Service Digital & AI Agency
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
              style={{
                fontFamily: "var(--font-display)",
                lineHeight: 1.05,
                color: "var(--color-text-primary)",
              }}
            >
              Scale Your Business Through{" "}
              <span className="gradient-text">AI-Driven Digital Systems</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="section-subtitle mb-12 text-lg sm:text-xl"
              style={{ color: "var(--color-text-secondary)", maxWidth: "100%" }}
            >
              We help small businesses and startups automate complex workflows and
              maximize revenue with high-performance digital infrastructure.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-5"
            >
              <button
                onClick={() => openModal()}
                className="btn-primary text-base sm:text-lg px-8 py-4 shadow-xl active:scale-95"
                style={{ boxShadow: '0 20px 40px -10px rgba(70, 102, 255, 0.5)' }}
              >
                Book Free Strategy Call
                <ArrowRight size={18} />
              </button>
              <a href="#case-studies" className="btn-ghost px-8 py-4 text-base" style={{
                background: "color-mix(in srgb, var(--color-primary), transparent 92%)",
                color: "var(--color-text-primary)",
                border: "1px solid color-mix(in srgb, var(--color-primary), transparent 85%)"
              }}>
                <Play size={16} fill="currentColor" className="mr-2" />
                View Our Portfolio
              </a>
            </motion.div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative pointer-events-none lg:pointer-events-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative"
            >
              {/* Main Visual Container */}
              <div
                className="relative rounded-[2.5rem] border p-3 shadow-2xl backdrop-blur-md overflow-hidden bg-white/5"
                style={{ borderColor: "rgba(255, 255, 255, 0.1)" }}
              >
                <div className="relative rounded-[1.8rem] overflow-hidden border border-white/10 bg-black/40 aspect-[4/3] flex items-center justify-center">
                  <Image
                    src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1200"
                    alt="AI and Digital Innovation"
                    fill
                    className="object-cover opacity-80 mix-blend-screen transition-transform duration-1000"
                    priority
                  />
                  {/* Digital overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 pointer-events-none" />

                  {/* Subtle HUD scanline effect */}
                  <div className="absolute inset-0 pointer-events-none opacity-20"
                    style={{
                      backgroundImage: "linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))",
                      backgroundSize: "100% 2px, 3px 100%"
                    }}
                  />
                </div>
              </div>

              {/* Floating elements */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  className="absolute p-4 rounded-2xl border shadow-xl flex items-center gap-4 z-20 backdrop-blur-xl"
                  style={{
                    backgroundColor: mode === "dark" ? "rgba(30, 30, 40, 0.85)" : "rgba(255, 255, 255, 0.9)",
                    borderColor: "var(--color-border)",
                    ...card.position,
                  }}
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: card.delay,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: `${card.color}15` }}
                  >
                    {card.icon}
                  </div>
                  <div>
                    <p className="text-xs font-bold" style={{ color: "var(--color-text-primary)" }}>
                      {card.title}
                    </p>
                    <p className="text-[10px] opacity-60 font-medium">{card.subtitle}</p>
                  </div>
                </motion.div>
              ))}

              {/* Decorative light rays */}
              <div
                className="absolute -inset-10 -z-10 blur-3xl opacity-20"
                style={{
                  background:
                    "conic-gradient(from 0deg at 50% 50%, #4666FF 0deg, transparent 60deg, #A347FF 180deg, transparent 240deg, #4666FF 360deg)",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

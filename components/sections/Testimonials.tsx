"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";
import Image from "next/image";

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { mode } = useThemeMode();

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const prev = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p - 1 + testimonials.length) % testimonials.length);
  };
  const next = () => {
    setIsAutoPlaying(false);
    setCurrent((p) => (p + 1) % testimonials.length);
  };

  return (
    <section
      id="testimonials"
      className="relative section-container overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="glow-blob w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle, #47E0FF, transparent)",
          bottom: "0%",
          right: "10%",
          opacity: mode === "dark" ? 0.12 : 0.05,
        }}
      />

      <div className="max-w-5xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Testimonials</span>
          <h2 className="section-title mb-5">
            Loved by <span className="gradient-text">Businesses Like Yours</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Don&apos;t take our word for it — here&apos;s what our clients say after going live.
          </p>
        </AnimatedSection>

        {/* Featured testimonial */}
        <div className="relative">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -40 }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="p-10 relative overflow-hidden rounded-2xl border transition-all duration-300"
            style={{
              background: mode === "dark" ? "var(--color-surface)" : "white",
              borderColor: "var(--color-border)",
              boxShadow: mode === "dark" ? "none" : "var(--shadow-md)"
            }}
          >
            {/* Quote icon */}
            <div
              className="absolute top-6 right-8 opacity-10"
              style={{ color: "var(--color-primary)" }}
            >
              <Quote size={80} />
            </div>

            <div className="flex flex-col md:flex-row gap-8 items-start">
              {/* Avatar + info */}
              <div className="flex-shrink-0 flex flex-col items-center text-center md:items-start md:text-left">
                <div className="relative mb-4">
                  <div className="w-16 h-16 rounded-full overflow-hidden relative" style={{
                    border: "2px solid var(--color-primary)",
                    boxShadow: mode === "dark" ? "0 0 24px rgba(70, 102, 255, 0.3)" : "0 4px 12px rgba(70, 102, 255, 0.1)",
                  }}>
                    <Image
                      src={testimonials[current].avatar}
                      alt={testimonials[current].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  {/* Online dot */}
                  <div
                    className="absolute bottom-0.5 right-0.5 w-3.5 h-3.5 rounded-full border-2"
                    style={{
                      background: "#47FF9B",
                      borderColor: mode === "dark" ? "var(--color-surface)" : "white",
                    }}
                  />
                </div>
                <div
                  className="text-base font-semibold mb-0.5"
                  style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                >
                  {testimonials[current].name}
                </div>
                <div className="text-sm font-bold mt-1" style={{ color: "var(--color-text-secondary)" }}>
                  {testimonials[current].role}
                </div>
                <div className="text-xs font-semibold mb-4" style={{ color: "var(--color-primary)" }}>
                  {testimonials[current].company}
                </div>

                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} color="#FFB347" fill={i < testimonials[current].rating ? "#FFB347" : "transparent"} />
                  ))}
                </div>

                {/* Industry tag */}
                <span
                  className="mt-3 text-xs px-2.5 py-1 rounded-full font-medium"
                  style={{
                    background: "color-mix(in srgb, var(--color-primary), transparent 90%)",
                    border: "1px solid color-mix(in srgb, var(--color-primary), transparent 80%)",
                    color: "var(--color-primary)",
                  }}
                >
                  {testimonials[current].industry}
                </span>
              </div>

              {/* Quote */}
              <div className="flex-1">
                <p
                  className="text-lg leading-relaxed relative z-10"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-body)",
                    fontStyle: "italic",
                    opacity: 0.9,
                  }}
                >
                  &ldquo;{testimonials[current].quote}&rdquo;
                </p>
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(i); }}
                  className="transition-all duration-300 rounded-full"
                  style={{
                    width: i === current ? "24px" : "8px",
                    height: "8px",
                    background: i === current ? "var(--color-primary)" : "var(--color-border)",
                  }}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={prev}
                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                  color: "var(--color-text-secondary)",
                }}
              >
                <ChevronLeft size={18} />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={next}
                className="w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-200"
                style={{
                  background: "color-mix(in srgb, var(--color-primary), transparent 90%)",
                  borderColor: "color-mix(in srgb, var(--color-primary), transparent 80%)",
                  color: "var(--color-primary)",
                }}
              >
                <ChevronRight size={18} />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

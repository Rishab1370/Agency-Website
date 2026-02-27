"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Tag } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";
import Image from "next/image";

export default function CaseStudies() {
  const { mode } = useThemeMode();

  return (
    <section
      id="case-studies"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="glow-blob w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(circle, #4666FF, transparent)",
          top: "0%",
          left: "-5%",
          opacity: mode === "dark" ? 0.15 : 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Case Studies</span>
          <h2 className="section-title mb-5">
            Results That <span className="gradient-text">Speak for Themselves</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Real businesses, real outcomes. Here&apos;s how we&apos;ve transformed operations with
            AI-powered digital solutions.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          staggerDelay={0.12}
        >
          {caseStudies.map((study) => (
            <StaggerItem key={study.id}>
              <motion.div
                className="group relative overflow-hidden rounded-2xl h-full flex flex-col cursor-pointer border transition-all duration-300"
                style={{
                  background: "var(--color-surface)",
                  borderColor: "var(--color-border)",
                }}
                whileHover={{ y: -6, borderColor: mode === "dark" ? "rgba(70, 102, 255, 0.4)" : "rgba(70, 102, 255, 0.2)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div
                    className="absolute inset-0"
                    style={{
                      background: `linear-gradient(180deg, ${study.color}22 0%, rgba(7,7,26,${mode === "dark" ? 0.8 : 0.4}) 100%)`,
                    }}
                  />
                  {/* Tag */}
                  <div className="absolute top-4 left-4">
                    <div
                      className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold"
                      style={{
                        background: mode === "dark" ? `${study.color}22` : "rgba(255,255,255,0.9)",
                        border: `1px solid ${study.color}55`,
                        color: study.color,
                        fontFamily: "var(--font-display)",
                        backdropFilter: "blur(10px)",
                      }}
                    >
                      <Tag size={11} />
                      {study.tag}
                    </div>
                  </div>
                  {/* Arrow button */}
                  <div
                    className="absolute top-4 right-4 w-9 h-9 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: study.color }}
                  >
                    <ArrowUpRight size={16} color="#fff" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <p className="text-xs font-semibold mb-2" style={{ color: study.color, fontFamily: "var(--font-display)" }}>
                    {study.type}
                  </p>
                  <h3
                    className="text-lg font-bold mb-3 transition-colors duration-200"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {study.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-5 flex-1" style={{ color: "var(--color-text-secondary)" }}>
                    {study.description}
                  </p>

                  {/* Metrics */}
                  <div className="flex flex-wrap gap-2">
                    {study.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="text-xs px-3 py-1 rounded-full font-medium"
                        style={{
                          background: `${study.color}15`,
                          border: `1px solid ${study.color}30`,
                          color: study.color,
                          fontFamily: "var(--font-display)",
                        }}
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom glow on hover */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(90deg, transparent, ${study.color}, transparent)`,
                  }}
                />
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

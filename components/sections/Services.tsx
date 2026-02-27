"use client";

import { motion } from "framer-motion";
import {
  Globe,
  GraduationCap,
  Dumbbell,
  MessageSquareCode,
  Workflow,
  Layers,
  ArrowRight,
  ShoppingBag,
  Layout,
  Zap,
} from "lucide-react";
import { services } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Globe,
  GraduationCap,
  Dumbbell,
  MessageSquareCode,
  Workflow,
  Layers,
  ShoppingBag,
  Layout,
  Zap,
};

export default function Services() {
  const { mode } = useThemeMode();

  return (
    <section id="services" className="relative py-20 overflow-hidden" style={{ background: "var(--color-bg)" }}>
      {/* Background */}
      <div
        className="glow-blob w-[400px] h-[400px]"
        style={{
          background: "radial-gradient(circle, #A347FF, transparent)",
          top: "20%",
          right: "-10%",
          opacity: mode === "dark" ? 0.15 : 0.06,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Header */}
        <AnimatedSection className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Services</span>
          <h2 className="section-title mb-5">
            Everything Your Business{" "}
            <span className="gradient-text">Needs to Scale</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            From high-conversion e-commerce to full-scale enterprise solutions — we combine
            traditional web excellence with optional, cutting-edge AI capabilities.
          </p>
        </AnimatedSection>

        {/* Grid */}
        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          staggerDelay={0.08}
        >
          {services.map((service) => {
            const Icon = iconMap[service.icon];
            return (
              <StaggerItem key={service.id}>
                <motion.div
                  className="p-7 h-full flex flex-col group rounded-2xl border transition-all duration-300"
                  style={{
                    background: "var(--color-surface)",
                    borderColor: "var(--color-border)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: mode === "dark" ? "rgba(70, 102, 255, 0.4)" : "rgba(70, 102, 255, 0.2)",
                    boxShadow: mode === "dark" ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "var(--shadow-md)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  {/* Icon */}
                  <div className="mb-5">
                    <div
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{
                        background: `${service.color}15`,
                        border: `1px solid ${service.color}30`,
                        boxShadow: `0 0 20px ${service.color}10`,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {Icon && <Icon size={22} color={service.color} />}
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-lg font-semibold mb-3 transition-colors duration-200"
                    style={{
                      fontFamily: "var(--font-display)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {service.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed mb-6 flex-1"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {service.description}
                  </p>

                  {/* Link */}
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200 group/link"
                    style={{
                      color: service.color,
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    Learn More
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-200 group-hover/link:translate-x-1"
                    />
                  </a>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import {
  School,
  Coffee,
  Dumbbell,
  Stethoscope,
  Rocket,
  Store,
  Sparkles,
} from "lucide-react";
import { industries } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  School,
  Coffee,
  Dumbbell,
  Stethoscope,
  Rocket,
  Store,
};

const industryColors = ["#4666FF", "#A347FF", "#47E0FF", "#FF6B6B", "#FFB347", "#47FF9B"];

export default function Industries() {
  const { mode } = useThemeMode();

  return (
    <section
      id="industries"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--color-surface)" }}
    >
      <div
        className="glow-blob w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle, #4666FF, transparent)",
          bottom: "-10%",
          left: "20%",
          opacity: mode === "dark" ? 0.1 : 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-16">
          <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Industries</span>
          <h2 className="section-title mb-5">
            Built for Your <span className="gradient-text">Industry</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            We deliver exquisite digital solutions tailored to your unique industry.
            Add an intelligent edge with our specialized AI features.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          staggerDelay={0.09}
        >
          {industries.map((industry, i) => {
            const Icon = iconMap[industry.icon];
            const color = industryColors[i % industryColors.length];
            return (
              <StaggerItem key={industry.id}>
                <motion.div
                  className="p-7 flex flex-col gap-4 group rounded-2xl border transition-all duration-300"
                  style={{
                    background: "var(--color-bg)",
                    borderColor: "var(--color-border)",
                  }}
                  whileHover={{
                    scale: 1.02,
                    borderColor: mode === "dark" ? "rgba(70, 102, 255, 0.4)" : "rgba(70, 102, 255, 0.2)",
                    boxShadow: mode === "dark" ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "var(--shadow-md)"
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 25 }}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{
                        background: `${color}15`,
                        border: `1px solid ${color}35`,
                      }}
                    >
                      {Icon && <Icon size={20} color={color} />}
                    </div>
                    <h3
                      className="text-base font-semibold"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                    >
                      {industry.name}
                    </h3>
                  </div>

                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {industry.description}
                  </p>

                  {/* AI Feature */}
                  <div
                    className="flex items-start gap-2 rounded-lg p-3"
                    style={{
                      background: `${color}10`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Sparkles size={13} color={color} className="flex-shrink-0 mt-0.5" />
                    <span className="text-xs font-medium" style={{ color }}>
                      {industry.aiFeature}
                    </span>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}

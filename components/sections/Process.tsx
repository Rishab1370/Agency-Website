"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";
import { processSteps } from "@/lib/data";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Search,
  PenTool,
  Code2,
  Rocket,
};

const stepColors = ["#4666FF", "#A347FF", "#47E0FF", "#47FF9B"];

export default function Process() {
  const { mode } = useThemeMode();

  return (
    <section
      id="process"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="glow-blob w-[600px] h-[600px]"
        style={{
          background: "radial-gradient(circle, #47E0FF, transparent)",
          top: "50%",
          right: "-20%",
          opacity: mode === "dark" ? 0.1 : 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-20">
          <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Our Process</span>
          <h2 className="section-title mb-5">
            How We <span className="gradient-text">Build & Launch</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            A proven 4-step process that takes you from idea to a fully AI-integrated product
            — on time, every time.
          </p>
        </AnimatedSection>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div
            className="hidden lg:block absolute top-12 left-0 right-0 h-px"
            style={{ background: mode === "dark" ? "linear-gradient(90deg, transparent, #1E2A5A 20%, #1E2A5A 80%, transparent)" : "linear-gradient(90deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)" }}
          />
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
            className="hidden lg:block absolute top-12 left-0 right-0 h-px origin-left"
            style={{ background: "linear-gradient(90deg, #4666FF, #A347FF, #47E0FF, #47FF9B)" }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {processSteps.map((step, i) => {
              const Icon = iconMap[step.icon];
              const color = stepColors[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center relative group"
                >
                  {/* Step circle */}
                  <motion.div
                    className="relative mb-6 z-10"
                    whileHover={{ scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <div
                      className="w-24 h-24 rounded-full flex items-center justify-center border-2 transition-all duration-300"
                      style={{
                        background: mode === "dark" ? `${color}15` : `${color}08`,
                        borderColor: mode === "dark" ? `${color}40` : `${color}25`,
                        boxShadow: `0 0 40px ${color}${mode === "dark" ? "20" : "15"}`,
                      }}
                    >
                      <div
                        className="w-16 h-16 rounded-full flex items-center justify-center border transition-all duration-300"
                        style={{
                          background: `${color}${mode === "dark" ? "25" : "15"}`,
                          borderColor: `${color}${mode === "dark" ? "50" : "30"}`,
                        }}
                      >
                        {Icon && <Icon size={24} color={color} />}
                      </div>
                    </div>
                    {/* Step number badge */}
                    <div
                      className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold"
                      style={{
                        background: color,
                        color: "white",
                        fontFamily: "var(--font-display)",
                        boxShadow: `0 0 16px ${color}60`,
                      }}
                    >
                      {step.step}
                    </div>
                  </motion.div>

                  {/* Content */}
                  <h3
                    className="text-base font-semibold mb-3 transition-colors"
                    style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                  >
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

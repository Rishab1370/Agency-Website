"use client";

import { motion } from "framer-motion";
import { Zap, BarChart3, Sparkles, TrendingUp, DollarSign, Shield, Check } from "lucide-react";
import { aiAdvantages } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";

const iconMap: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  Zap,
  BarChart3,
  Sparkles,
  TrendingUp,
  DollarSign,
  Shield,
};

export default function AIAdvantage() {
  const { mode } = useThemeMode();

  return (
    <section
      id="ai-advantage"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Animated background orb */}
      <div
        className="glow-blob w-[700px] h-[700px]"
        style={{
          background: "radial-gradient(circle, #4666FF 0%, #A347FF 40%, transparent 70%)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          opacity: mode === "dark" ? 0.2 : 0.08,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <AnimatedSection direction="left">
            <div className="relative flex items-center justify-center h-96">
              {/* Animated brain/AI visual */}
              <div className="relative">
                {/* Outer ring */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 rounded-full"
                  style={{
                    width: "320px",
                    height: "320px",
                    border: mode === "dark" ? "1px dashed rgba(70, 102, 255, 0.25)" : "1px dashed rgba(70, 102, 255, 0.15)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                {/* Middle ring */}
                <motion.div
                  animate={{ rotate: -360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute rounded-full"
                  style={{
                    width: "240px",
                    height: "240px",
                    border: mode === "dark" ? "1px dashed rgba(163, 71, 255, 0.3)" : "1px dashed rgba(163, 71, 255, 0.15)",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                  }}
                />
                {/* Inner glow core */}
                <div
                  className="relative w-36 h-36 rounded-full flex items-center justify-center"
                  style={{
                    background: mode === "dark" ? "radial-gradient(circle, rgba(70,102,255,0.4), rgba(163,71,255,0.2), transparent)" : "radial-gradient(circle, rgba(70,102,255,0.15), rgba(163,71,255,0.08), transparent)",
                    boxShadow: mode === "dark" ? "0 0 80px rgba(70,102,255,0.4), 0 0 40px rgba(163,71,255,0.3)" : "0 0 60px rgba(70,102,255,0.1)",
                  }}
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    <Sparkles size={48} color="#4666FF" />
                  </motion.div>
                </div>

                {/* Orbiting nodes */}
                {[0, 60, 120, 180, 240, 300].map((angle, i) => {
                  const colors = ["#4666FF", "#A347FF", "#47E0FF", "#FF6B6B", "#FFB347", "#47FF9B"];
                  const radians = (angle * Math.PI) / 180;
                  const r = 120;
                  const x = r * Math.cos(radians);
                  const y = r * Math.sin(radians);
                  return (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full"
                      style={{
                        background: colors[i],
                        left: `calc(50% + ${x}px - 6px)`,
                        top: `calc(50% + ${y}px - 6px)`,
                        boxShadow: mode === "dark" ? `0 0 16px ${colors[i]}` : `0 0 8px ${colors[i]}`,
                      }}
                      animate={{ scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: i * 0.4,
                      }}
                    />
                  );
                })}
              </div>
            </div>

            {/* Label below */}
            <div className="text-center mt-4">
              <p
                className="text-sm font-semibold gradient-text-blue"
                style={{ fontFamily: "var(--font-display)" }}
              >
                High-Performance Digital Architecture
              </p>
              <p className="text-xs mt-1" style={{ color: "var(--color-text-secondary)" }}>
                Premium engineering meets intelligent automation
              </p>
            </div>
          </AnimatedSection>

          {/* Right: Content */}
          <AnimatedSection direction="right">
            <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Our Edge</span>
            <h2 className="section-title mb-5">
              Why Choose Our{" "}
              <span className="gradient-text">Full-Service Studio?</span>
            </h2>
            <p className="section-subtitle mb-10">
              We combine traditional engineering excellence with intelligent AI integration
              to build products that are premium, scalable, and future-ready.
            </p>

            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 gap-4" staggerDelay={0.08}>
              {aiAdvantages.map((advantage, i) => {
                const Icon = iconMap[advantage.icon];
                return (
                  <StaggerItem key={i}>
                    <motion.div
                      className="p-5 flex items-start gap-4 rounded-xl border border-transparent transition-all duration-300"
                      style={{
                        background: "var(--color-surface)",
                        border: "1px solid var(--color-border)",
                      }}
                      whileHover={{ scale: 1.02, borderColor: mode === "dark" ? "rgba(70, 102, 255, 0.4)" : "rgba(70, 102, 255, 0.2)" }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div
                        className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{
                          background: "color-mix(in srgb, var(--color-primary), transparent 85%)",
                          border: "1px solid color-mix(in srgb, var(--color-primary), transparent 70%)",
                        }}
                      >
                        {Icon && <Icon size={18} color="var(--color-primary)" />}
                      </div>
                      <div>
                        <h4
                          className="text-sm font-semibold mb-1"
                          style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                        >
                          {advantage.title}
                        </h4>
                        <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                          {advantage.description}
                        </p>
                      </div>
                    </motion.div>
                  </StaggerItem>
                );
              })}
            </StaggerContainer>

            {/* CTA */}
            <div className="mt-10 flex items-center gap-4 flex-wrap">
              <a href="#contact" className="btn-primary">
                Start Your AI Journey
                <Sparkles size={15} />
              </a>
              <div className="flex items-center gap-2">
                <Check size={16} color="#47E0FF" />
                <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                  Free strategy call
                </span>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}

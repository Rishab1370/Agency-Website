"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Zap, ArrowRight } from "lucide-react";
import { pricingPlans } from "@/lib/data";
import { useModal } from "@/lib/ModalContext";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";

export default function Pricing() {
  const { mode } = useThemeMode();
  const { openModal } = useModal();

  return (
    <section
      id="pricing"
      className="relative py-20 overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      <div
        className="glow-blob w-[500px] h-[500px]"
        style={{
          background: "radial-gradient(circle, #A347FF, transparent)",
          top: "-10%",
          right: "-5%",
          opacity: mode === "dark" ? 0.12 : 0.05,
        }}
      />

      <div className="max-w-6xl mx-auto px-6 lg:px-8 relative z-10">
        <AnimatedSection className="text-center mb-14">
          <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Our Plans</span>
          <h2 className="section-title mb-5">
            Service <span className="gradient-text">Packages</span>
          </h2>
          <p className="section-subtitle mx-auto text-center">
            Choose the right scale for your business growth. Flexible solutions tailored to your needs.
          </p>
        </AnimatedSection>

        <StaggerContainer
          className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start"
          staggerDelay={0.12}
        >
          {pricingPlans.map((plan) => (
            <StaggerItem key={plan.id}>
              <motion.div
                className="relative rounded-2xl overflow-hidden flex flex-col transition-all duration-300"
                style={{
                  background: plan.popular
                    ? (mode === "dark" ? "rgba(70, 102, 255, 0.08)" : "rgba(70, 102, 255, 0.03)")
                    : "var(--color-surface)",
                  border: plan.popular
                    ? "1px solid rgba(70, 102, 255, 0.5)"
                    : "1px solid var(--color-border)",
                  backdropFilter: "blur(16px)",
                  boxShadow: plan.popular
                    ? (mode === "dark" ? "0 0 60px rgba(70, 102, 255, 0.2)" : "0 10px 30px rgba(70, 102, 255, 0.1)")
                    : "var(--shadow-sm)",
                }}
                whileHover={{ y: -4, boxShadow: mode === "dark" ? "0 20px 40px -10px rgba(0,0,0,0.5)" : "var(--shadow-md)" }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                {/* Popular badge */}
                {plan.popular && (
                  <div
                    className="absolute top-4 right-4 flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #4666FF, #A347FF)",
                      color: "#fff",
                      fontFamily: "var(--font-display)",
                    }}
                  >
                    <Zap size={11} fill="#fff" />
                    Most Popular
                  </div>
                )}

                {/* Top gradient line for popular */}
                {plan.popular && (
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5"
                    style={{ background: "linear-gradient(90deg, #4666FF, #A347FF, #47E0FF)" }}
                  />
                )}

                <div className="p-7">
                  {/* Plan name */}
                  <div className="mb-7 pb-7" style={{ borderBottom: "1px solid var(--color-border)" }}>
                    <p
                      className="text-xs font-semibold mb-1"
                      style={{ color: plan.color, fontFamily: "var(--font-display)" }}
                    >
                      {plan.subtitle}
                    </p>
                    <h3
                      className="text-xl font-bold mb-3"
                      style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                    >
                      {plan.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                      {plan.description}
                    </p>
                  </div>

                  {/* Features */}
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div
                          className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5"
                          style={{ background: `${plan.color}15`, border: `1px solid ${plan.color}30` }}
                        >
                          <Check size={11} color={plan.color} />
                        </div>
                        <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button
                    onClick={() => openModal(plan.name === 'Growth' ? 'AI & Automation' : plan.name === 'Enterprise' ? 'ERP/CRM Systems' : 'Custom Web Development')}
                    className={plan.popular ? "btn-primary w-full justify-center" : "btn-ghost w-full justify-center"}
                    style={
                      !plan.popular
                        ? { borderColor: `${plan.color}40`, color: plan.color }
                        : undefined
                    }
                  >
                    {plan.cta}
                    <ArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Footer note */}
        <AnimatedSection className="text-center mt-12">
          <p className="text-sm" style={{ color: "var(--color-text-muted)" }}>
            Need a custom solution?{" "}
            <a href="#contact" style={{ color: "var(--color-primary)" }}>
              Contact us for a bespoke quote →
            </a>
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}

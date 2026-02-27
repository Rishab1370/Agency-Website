"use client";

import { motion } from "framer-motion";
import { PhoneCall, FileText, ArrowRight, Sparkles } from "lucide-react";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";

export default function CTASection() {
  const { mode } = useThemeMode();

  return (
    <section
      id="contact"
      className="relative section-container overflow-hidden"
      style={{ background: "var(--color-bg)" }}
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            background: [
              `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(70,102,255,${mode === "dark" ? 0.25 : 0.08}) 0%, transparent 70%)`,
              `radial-gradient(ellipse 80% 60% at 80% 50%, rgba(163,71,255,${mode === "dark" ? 0.25 : 0.08}) 0%, transparent 70%)`,
              `radial-gradient(ellipse 80% 60% at 50% 80%, rgba(71,224,255,${mode === "dark" ? 0.2 : 0.06}) 0%, transparent 70%)`,
              `radial-gradient(ellipse 80% 60% at 20% 50%, rgba(70,102,255,${mode === "dark" ? 0.25 : 0.08}) 0%, transparent 70%)`,
            ],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0"
        />
        {/* Grid overlay */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: mode === "dark"
              ? `linear-gradient(rgba(70, 102, 255, 0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 102, 255, 0.06) 1px, transparent 1px)`
              : `linear-gradient(rgba(70, 102, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(70, 102, 255, 0.03) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="max-w-4xl mx-auto px-6 lg:px-8 relative z-10 text-center">
        <AnimatedSection>
          <motion.div
            className="inline-flex items-center gap-2 mb-8"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Sparkles size={28} color="var(--color-primary)" />
          </motion.div>

          <h2
            className="mb-8"
            style={{
              fontFamily: "var(--font-display)",
              lineHeight: 1.1,
              color: "var(--color-text-primary)",
            }}
          >
            Ready to <span className="gradient-text">Dominate Your Market?</span>
          </h2>

          <p
            className="text-lg leading-relaxed mb-12 mx-auto"
            style={{ color: "var(--color-text-secondary)", maxWidth: "520px" }}
          >
            Let&apos;s transform your business with AI-driven digital infrastructure.
            Free consultation, no obligations.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-10">
            <motion.a
              href="tel:+919999999999"
              className="btn-primary text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{ padding: "16px 32px", fontSize: "15px" }}
            >
              <PhoneCall size={17} />
              Schedule a Call
            </motion.a>
            <motion.a
              href="mailto:hello@neuralcraft.in"
              className="btn-ghost text-base"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                padding: "16px 32px",
                fontSize: "15px",
                border: "1px solid var(--color-border)",
                background: "var(--color-surface)",
                color: "var(--color-text-primary)"
              }}
            >
              <FileText size={17} />
              Get Free Proposal
              <ArrowRight size={15} />
            </motion.a>
          </div>

          <p className="text-sm font-semibold mb-12" style={{ color: "var(--color-text-muted)" }}>
            No spam. Zero-obligation strategy call.
          </p>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {["Free Consultation", "No Hidden Fees", "Response in 2 Hours", "100% Custom"].map(
              (item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <div
                    className="w-1.5 h-1.5 rounded-full"
                    style={{ background: "#47FF9B" }}
                  />
                  <span className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                    {item}
                  </span>
                </div>
              )
            )}
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}

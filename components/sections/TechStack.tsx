"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";
import { technologyCategories } from "@/lib/data";
import Image from "next/image";

export default function TechStack() {
    const { mode } = useThemeMode();
    const [activeTab, setActiveTab] = useState(technologyCategories[0].id);

    const activeCategory = technologyCategories.find(cat => cat.id === activeTab) || technologyCategories[0];

    return (
        <section className="py-20 relative overflow-hidden" style={{ background: "var(--color-surface)" }}>
            <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                <AnimatedSection className="text-center mb-16">
                    <span className="tag-pill mb-6 inline-flex border border-blue-500/20" style={{ background: "color-mix(in srgb, var(--color-primary), transparent 92%)", color: "var(--color-primary)" }}>Technology</span>
                    <h2 className="section-title mb-5">
                        Our <span className="gradient-text">Powerhouse Stack</span>
                    </h2>
                    <p className="section-subtitle mx-auto text-center">
                        We leverage a comprehensive suite of modern technologies to build fast,
                        secure, and future-proof digital ecosystems.
                    </p>
                </AnimatedSection>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {technologyCategories.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${activeTab === category.id
                                ? "bg-primary text-white border-primary shadow-lg shadow-primary/25 scale-105"
                                : "bg-surface text-text-secondary border-border hover:border-primary/40"
                                }`}
                            style={{
                                backgroundColor: activeTab === category.id ? "var(--color-primary)" : "var(--color-surface)",
                                color: activeTab === category.id ? "white" : "var(--color-text-secondary)",
                                borderColor: activeTab === category.id ? "var(--color-primary)" : "var(--color-border)",
                            }}
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                    >
                        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6">
                            {activeCategory.techs.map((tech) => (
                                <StaggerItem key={tech.name}>
                                    <motion.div
                                        whileHover={{ y: -5, scale: 1.05 }}
                                        className="flex flex-col items-center p-6 rounded-2xl border transition-all duration-300 group"
                                        style={{
                                            background: mode === "dark" ? "var(--color-bg)" : "white",
                                            borderColor: "var(--color-border)"
                                        }}
                                    >
                                        <div className="w-12 h-12 mb-4 relative grayscale group-hover:grayscale-0 transition-all duration-500">
                                            <Image
                                                src={tech.icon}
                                                alt={tech.name}
                                                width={48}
                                                height={48}
                                                className="w-full h-full object-contain"
                                                unoptimized
                                            />
                                        </div>
                                        <span className="text-xs font-bold text-center" style={{ color: "var(--color-text-primary)" }}>
                                            {tech.name}
                                        </span>
                                    </motion.div>
                                </StaggerItem>
                            ))}
                        </StaggerContainer>
                    </motion.div>
                </AnimatePresence>
            </div>
        </section>
    );
}

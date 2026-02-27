"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Tag, Sparkles, Filter } from "lucide-react";
import { caseStudies } from "@/lib/data";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";
import Image from "next/image";

export default function CaseStudiesPage() {
    const { mode } = useThemeMode();

    return (
        <main className="pt-24 min-h-screen" style={{ background: "var(--color-bg)" }}>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        background: "radial-gradient(circle at 50% 50%, var(--color-primary) 0%, transparent 70%)"
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="mb-6 flex justify-center"
                    >
                        <span className="tag-pill">
                            <Sparkles size={13} />
                            Our Portfolio
                        </span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="text-5xl md:text-6xl font-bold mb-8"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", lineHeight: 1.1 }}
                    >
                        Real Results, <br />
                        <span className="gradient-text">Extraordinary Impact</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.35 }}
                        className="text-lg md:text-xl leading-relaxed mb-10 max-w-3xl mx-auto"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        Explore our archive of successful digital transformations. From AI-integrated ERPs to high-performance consumer storefronts.
                    </motion.p>
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-2xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                            Featured Projects ({caseStudies.length})
                        </h2>
                        {/* Simple placeholder for filter */}
                        <div className="flex items-center gap-2 px-4 py-2 rounded-xl border border-border bg-surface text-sm font-medium opacity-60">
                            <Filter size={14} />
                            All Categories
                        </div>
                    </div>

                    <StaggerContainer
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {caseStudies.map((study) => (
                            <StaggerItem key={study.id}>
                                <motion.div
                                    className="group relative overflow-hidden rounded-3xl h-full flex flex-col cursor-pointer border transition-all duration-500 hover:shadow-2xl"
                                    style={{
                                        background: "var(--color-surface)",
                                        borderColor: "var(--color-border)",
                                    }}
                                    whileHover={{ y: -8, borderColor: mode === "dark" ? "rgba(70, 102, 255, 0.4)" : "rgba(70, 102, 255, 0.2)" }}
                                >
                                    {/* Image */}
                                    <div className="relative overflow-hidden aspect-[16/10]">
                                        <Image
                                            src={study.image}
                                            alt={study.title}
                                            fill
                                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                                        />
                                        {/* Overlay */}
                                        <div
                                            className="absolute inset-0"
                                            style={{
                                                background: `linear-gradient(180deg, transparent 40%, rgba(7,7,26,${mode === "dark" ? 0.9 : 0.6}) 100%)`,
                                            }}
                                        />
                                        {/* Tag */}
                                        <div className="absolute top-6 left-6">
                                            <div
                                                className="flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
                                                style={{
                                                    background: "rgba(255,255,255,0.9)",
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
                                    </div>

                                    {/* Content */}
                                    <div className="p-8 flex flex-col flex-1">
                                        <p className="text-xs font-bold mb-3 uppercase tracking-wider" style={{ color: study.color, fontFamily: "var(--font-display)" }}>
                                            {study.type}
                                        </p>
                                        <h3
                                            className="text-2xl font-bold mb-4 transition-colors duration-200"
                                            style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}
                                        >
                                            {study.title}
                                        </h3>
                                        <p className="leading-relaxed mb-8 flex-1" style={{ color: "var(--color-text-secondary)" }}>
                                            {study.description}
                                        </p>

                                        {/* Metrics */}
                                        <div className="flex flex-wrap gap-3">
                                            {study.metrics.map((metric, i) => (
                                                <div
                                                    key={i}
                                                    className="px-4 py-2 rounded-xl text-sm font-semibold border transition-all duration-300 group-hover:border-primary/40 group-hover:bg-primary/5"
                                                    style={{
                                                        background: "rgba(255,255,255,0.03)",
                                                        borderColor: "var(--color-border)",
                                                        color: "var(--color-text-primary)",
                                                    }}
                                                >
                                                    {metric}
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Arrow Indicator */}
                                    <div
                                        className="absolute top-6 right-6 w-12 h-12 rounded-full flex items-center justify-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-lg"
                                        style={{ background: study.color }}
                                    >
                                        <ArrowUpRight size={20} color="#fff" />
                                    </div>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Project CTA */}
            <section className="py-20">
                <div className="max-w-4xl mx-auto px-6 lg:px-8">
                    <div className="text-center p-12 rounded-3xl border border-border relative overflow-hidden bg-surface">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Have a similar project in mind?</h2>
                            <p className="text-lg mb-8 opacity-70">We love taking on challenging technical problems and finding elegant solutions.</p>
                            <button className="btn-primary px-10 py-4 text-base">Let&apos;s Build Together</button>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

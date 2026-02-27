"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Target, Rocket, ShieldCheck, Heart } from "lucide-react";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/AnimatedSection";
import Image from "next/image";

export default function AboutPage() {
    return (
        <main className="pt-24 min-h-screen" style={{ background: "var(--color-bg)" }}>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-20"
                    style={{
                        background: "radial-gradient(circle at 20% 30%, #4666FF 0%, transparent 40%), radial-gradient(circle at 80% 70%, #A347FF 0%, transparent 40%)"
                    }}
                />

                <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
                    <div className="max-w-3xl">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="mb-6"
                        >
                            <span className="tag-pill">
                                <Users size={13} />
                                About NeuralCraft
                            </span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-5xl md:text-6xl font-bold mb-8"
                            style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", lineHeight: 1.1 }}
                        >
                            Building the Future of <br />
                            <span className="gradient-text">Intelligent Digital Commerce</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.7, delay: 0.35 }}
                            className="text-lg md:text-xl leading-relaxed mb-10"
                            style={{ color: "var(--color-text-secondary)" }}
                        >
                            NeuralCraft is a premier digital agency that bridges the gap between traditional craftsmanship and cutting-edge Artificial Intelligence. We don&apos;t just build websites; we engineer growth engines.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-20 bg-surface/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="section-title mb-4">Our Core Values</h2>
                        <p className="section-subtitle mx-auto">The principles that drive every pixel we craft and every line of code we write.</p>
                    </AnimatedSection>

                    <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: <Target className="text-blue-500" />,
                                title: "Precision Driven",
                                desc: "We focus on the details that matter, ensuring every solution is optimized for maximum performance and conversion."
                            },
                            {
                                icon: <Sparkles className="text-purple-500" />,
                                title: "AI-First Thinking",
                                desc: "We integrate intelligence into everything we do, helping businesses automate the mundane and focus on the extraordinary."
                            },
                            {
                                icon: <ShieldCheck className="text-emerald-500" />,
                                title: "Reliable Partnership",
                                desc: "We don&apos;t just deliver and disappear. We act as your long-term technical partner, scaling with your success."
                            }
                        ].map((value, i) => (
                            <StaggerItem key={i}>
                                <div
                                    className="p-8 rounded-2xl border backdrop-blur-sm h-full flex flex-col transition-all duration-300 hover:shadow-xl"
                                    style={{ background: "var(--color-surface)", borderColor: "var(--color-border)" }}
                                >
                                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>{value.title}</h3>
                                    <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{value.desc}</p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Our Story */}
            <section className="py-20 relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <div className="relative rounded-3xl overflow-hidden aspect-video shadow-2xl border border-white/10">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/20 to-purple-600/20 z-10" />
                                <div className="flex items-center justify-center h-full bg-surface">
                                    <Rocket size={80} className="text-blue-500/20 animate-pulse" />
                                </div>
                            </div>
                        </AnimatedSection>

                        <AnimatedSection>
                            <h2 className="section-title mb-6">Our Journey</h2>
                            <div className="space-y-6 text-lg leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                                <p>
                                    Founded in 2024, NeuralCraft grew out of a simple observation: modern businesses were being left behind by the rapid pace of AI innovation.
                                </p>
                                <p>
                                    Our mission was clear — democratize high-end digital technology and AI automation for growing enterprises. We combined seasoned web developers with AI specialists to create a unique agency model that builds for today while anticipating tomorrow.
                                </p>
                                <p>
                                    Today, we support dozens of industries, from healthcare and education to retail and professional services, helping them reclaim their time and scale their revenue.
                                </p>
                            </div>
                        </AnimatedSection>
                    </div>
                </div>
            </section>

            {/* Team CTA */}
            <section className="py-20">
                <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
                    <div
                        className="p-12 rounded-[2rem] border relative overflow-hidden"
                        style={{ background: "linear-gradient(135deg, rgba(70,102,255,0.1), rgba(163,71,255,0.1))", borderColor: "rgba(70,102,255,0.2)" }}
                    >
                        <Heart size={40} className="mx-auto mb-6 text-purple-500" />
                        <h2 className="text-3xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Join Our Journey</h2>
                        <p className="text-lg mb-10 max-w-2xl mx-auto" style={{ color: "var(--color-text-secondary)" }}>
                            We&apos;re always looking for brilliant designers, clever developers, and AI enthusiasts to help us shape the next generation of digital tools.
                        </p>
                        <a href="/careers" className="btn-primary">View Open Roles</a>
                    </div>
                </div>
            </section>
        </main>
    );
}

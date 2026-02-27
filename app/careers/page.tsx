"use client";

import { motion } from "framer-motion";
import { Sparkles, Briefcase, MapPin, Clock, ArrowRight, Star, Heart, Coffee, Zap } from "lucide-react";
import { openPositions } from "@/lib/data";
import { StaggerContainer, StaggerItem, AnimatedSection } from "@/components/ui/AnimatedSection";
import { useThemeMode } from "@/lib/ThemeContext";
import Image from "next/image";

export default function CareersPage() {
    const { mode } = useThemeMode();

    return (
        <main className="pt-24 min-h-screen" style={{ background: "var(--color-bg)" }}>
            {/* Hero Section */}
            <section className="relative py-20 overflow-hidden">
                <div
                    className="absolute inset-0 z-0 opacity-10"
                    style={{
                        background: "radial-gradient(circle at 100% 0%, #47FF9B 0%, transparent 50%)"
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
                            <Star size={13} />
                            Work with Us
                        </span>
                    </motion.div>

                    <h1
                        className="text-5xl md:text-6xl font-bold mb-8"
                        style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)", lineHeight: 1.1 }}
                    >
                        Build the Future <br />
                        <span className="gradient-text">One Line at a Time</span>
                    </h1>

                    <p
                        className="text-lg md:text-xl leading-relaxed mb-10 max-w-2xl mx-auto"
                        style={{ color: "var(--color-text-secondary)" }}
                    >
                        At NeuralCraft, we&apos;re pioneering the intersection of AI and premium digital craftsmanship. Join a team where excellence is expected and innovation is the norm.
                    </p>
                </div>
            </section>

            {/* Benefits Section */}
            <section className="py-20 bg-surface/30">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <AnimatedSection className="text-center mb-16">
                        <h2 className="section-title mb-4">Why NeuralCraft?</h2>
                        <p className="section-subtitle mx-auto">We invest in our people as much as we invest in our technology.</p>
                    </AnimatedSection>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            { icon: <Briefcase className="text-blue-500" />, title: "Meaningful Work", desc: "Build high-impact tools that actually solve business problems." },
                            { icon: <Heart className="text-red-500" />, title: "Wellness First", desc: "Flexible hours and comprehensive health coverage for your peace of mind." },
                            { icon: <Coffee className="text-orange-500" />, title: "Prime Culture", desc: "A collaborative, no-ego environment focused on growth." },
                            { icon: <Zap className="text-yellow-500" />, title: "Modern Stack", desc: "Work with the latest AI models and frontend frameworks." }
                        ].map((benefit, i) => (
                            <div
                                key={i}
                                className="p-8 rounded-2xl border bg-surface transition-all duration-300 hover:border-primary/30"
                                style={{ borderColor: "var(--color-border)" }}
                            >
                                <div className="mb-5">{benefit.icon}</div>
                                <h3 className="text-lg font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>{benefit.title}</h3>
                                <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Internal Culture Snapshot */}
            <section className="py-20 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <AnimatedSection>
                            <h2 className="text-4xl font-bold mb-6" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>Our Cultural Pulse</h2>
                            <div className="space-y-6">
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">1</div>
                                    <div>
                                        <h4 className="font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>Extreme Ownership</h4>
                                        <p className="text-sm opacity-70">We take full responsibility for our outcomes, ensuring quality at every stage.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">2</div>
                                    <div>
                                        <h4 className="font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>Bias for Action</h4>
                                        <p className="text-sm opacity-70">We value moving fast and learning through implementation over endless planning.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4">
                                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">3</div>
                                    <div>
                                        <h4 className="font-bold mb-1" style={{ color: "var(--color-text-primary)" }}>Customer Obsession</h4>
                                        <p className="text-sm opacity-70">Every feature we build must directly benefit the end-user or the business goals.</p>
                                    </div>
                                </div>
                            </div>
                        </AnimatedSection>
                        <div className="relative">
                            <div className="aspect-square rounded-[3rem] bg-gradient-to-tr from-primary to-purple-600 opacity-20 blur-3xl absolute inset-0" />
                            <div className="relative z-10 grid grid-cols-2 gap-4">
                                <div className="relative h-48 rounded-3xl overflow-hidden border border-border group/img">
                                    <Image
                                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&q=80&w=800"
                                        alt="Collaborative Session"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover/img:bg-transparent transition-colors" />
                                </div>
                                <div className="relative h-64 rounded-3xl overflow-hidden border border-border mt-8 group/img">
                                    <Image
                                        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
                                        alt="Modern Office Vibes"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    />
                                </div>
                                <div className="relative h-56 rounded-3xl overflow-hidden border border-border -mt-8 group/img">
                                    <Image
                                        src="https://images.unsplash.com/photo-1542831371-29b0f74f9713?auto=format&fit=crop&q=80&w=800"
                                        alt="Hacker Mode Activation"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    />
                                </div>
                                <div className="relative h-48 rounded-3xl overflow-hidden border border-border group/img">
                                    <Image
                                        src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=800"
                                        alt="Launch Day Success"
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover/img:scale-110"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions */}
            <section id="positions" className="py-20 mb-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-12">
                        <h2 className="text-3xl font-bold" style={{ fontFamily: "var(--font-display)", color: "var(--color-text-primary)" }}>
                            Open Positions
                        </h2>
                        <div className="hidden md:block h-px flex-1 mx-10 bg-border" />
                        <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest border border-primary/20">
                            Current: {openPositions.length}
                        </span>
                    </div>

                    <StaggerContainer className="space-y-4">
                        {openPositions.map((pos) => (
                            <StaggerItem key={pos.id}>
                                <motion.div
                                    className="group p-6 md:p-8 rounded-3xl border bg-surface flex flex-col md:flex-row md:items-center justify-between transition-all duration-300 hover:shadow-xl hover:translate-x-2"
                                    style={{ borderColor: "var(--color-border)" }}
                                >
                                    <div className="mb-6 md:mb-0">
                                        <span className="text-xs font-bold text-primary uppercase tracking-widest mb-2 block">{pos.department}</span>
                                        <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>{pos.role}</h3>
                                        <div className="flex flex-wrap gap-4 text-sm opacity-60">
                                            <div className="flex items-center gap-1.5">
                                                <MapPin size={14} />
                                                {pos.location}
                                            </div>
                                            <div className="flex items-center gap-1.5">
                                                <Clock size={14} />
                                                {pos.type}
                                            </div>
                                        </div>
                                    </div>
                                    <button className="btn-primary flex items-center gap-2 group/btn">
                                        Apply Now
                                        <ArrowRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                                    </button>
                                </motion.div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>
        </main>
    );
}
